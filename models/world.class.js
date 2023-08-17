class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    throwableObjects = [];
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        // this.GameMusic();
        // initLevel();
    }

    // GameMusic() {
    //     this.gameMusic = new Audio('audio/mariachi.mp3');
    //     this.gameMusic.loop = true;
    //     this.gameMusic.play();
    // }

    setWorld() {
        this.character.world = this;
    }
    
    run() {
        setInterval(() => {
        this.checkCollisions();
        this.checkThrowObjects();
    }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE) {
            let bottle = new ThrowableObject(this.character.x + 30, this.character.y + 60);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
            this.level.enemies.forEach( (enemy) => {
                if ( this.character.isColliding(enemy) ) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
            // this.level.endboss.forEach( (boss) => {
            //     if ( this.character.isColliding(boss) ) {
            //         this.character.hitBoss();
            //         this.statusBar.setPercentage(this.character.energy);
            //     }
            // });
            this.level.coins.forEach( (coin) => {
                if ( this.character.isColliding(coin) ) {
                    this.character.hitCoin();
                    this.statusBarCoin.setPercentage(this.character.collected);
                    this.removeCoin(coin);
                }
            });
            this.level.bottles.forEach( (bottle) => {
                if ( this.character.isColliding(bottle) ) {
                    this.character.hitBottle();
                    this.statusBarBottle.setPercentage(this.character.salsa);
                    this.removeBottle(bottle);
                }
            });
    }

    removeCoin(coin) {
        let index = this.level.coins.indexOf(coin);
        this.level.coins.splice(index, 1);
    }

    removeBottle(bottle) {
        let index = this.level.bottles.indexOf(bottle);
        this.level.bottles.splice(index, 1);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        
        //Space for fixed objects
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}


