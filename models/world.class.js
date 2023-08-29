class World {
    level = level1;
    enemies = level1.enemies;
    endboss = level1.endboss;
    backgroundObjects = level1.backgroundObjects;
    clouds = level1.clouds;
    coins = level1.coins;
    bottles = level1.bottles;
    throwableObjects = level1.throwableObjects;
    throwableObjects = [];
    collectedBottles = [];
    collectedCoins = [];
    percentage;
    character = new Character();
    bottlebar = new BottleBar();
    coinbar = new Coinbar();
    healthbar = new HealthBar();
    endbossHealthbar = new EndbossHealthbar();
    ctx;
    canvas;
    offset;
    keyboard;
    energy;
    camera = 0;
    world;
    firstContact = false;
    bottleIsBroken = false;
    youWon = false;
    intervals = [];
    i = 1;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera, 0);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.ctx.translate(-this.camera, 0);
        this.addToMap(this.bottlebar);
        this.addToMap(this.coinbar);
        this.addToMap(this.healthbar);
        if (this.character.x > 4300 || this.firstContact) {
            this.addToMap(this.endbossHealthbar);
            this.firstContact = true;
        }
        this.ctx.translate(this.camera, 0);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.endboss);
        this.addToMap(this.character);
        this.addObjectsToMap(this.coins);
        this.addObjectsToMap(this.bottles);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        };
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0)
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    run() {
        setInterval(() => {
            this.checkThrow();
            this.checkCollisionsEnemies();
            this.checkCollisionsCoins();
            this.checkCollisionsBottles();
            this.checkCollisionEndboss();
            this.checkCollisionOfBottleWithEnemy();
            this.checkCollisionOfBottleWithEndboss();
        }, 100);
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    checkCollisionsEnemies() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && enemy.energy > 0 && this.character.speedY < 0) {
                enemy.energy--;
                this.character.jump();
                if (enemy.energy == 0) {
                    this.clearEnemyFromCanvas(enemy);
                }
            } else if (this.character.isColliding(enemy) && !this.character.isAboveGround() && this.character.energy > 0 && enemy.energy > 0) {
                this.character.hit(true);
                this.healthbar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionEndboss() {
        this.level.endboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy);
            }
        })
    }

    checkThrow() {
        if (this.keyboard.D && this.character.amountCollectedBottles > 0) {
            this.character.amountCollectedBottles -= 10;
            this.bottle = new ThrowableObject(this.character.x + 40, this.character.y + 130);
            this.throwableObjects.push(this.bottle);
            this.bottlebar.setPercentage(this.character.amountCollectedBottles);
        }
    }

    checkCollisionOfBottleWithEnemy() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (this.bottle.isColliding(enemy) && !enemy.isDead()) {
                    this.bottleIsBroken = true;
                    this.clearBottleFromCanvas(bottle);
                    enemy.hit(true);
                }
            });
        });
    }

    checkCollisionOfBottleWithEndboss() {
        this.throwableObjects.forEach((bottle) => {
            this.level.endboss.forEach((endboss) => {
                if (this.bottle.isColliding(endboss) && !endboss.isDead()) {
                    this.bottleIsBroken = true;
                    this.endbossHealthbar.setPercentage(endboss.energy);
                    endboss.hitEndboss(true);
                }
            });
        });
    }

    checkCollisionsCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                collect_coin_sound.pause();
                this.character.collectCoin();
                collect_coin_sound.play();
                this.coinbar.setPercentage(this.character.amountCollectedCoins);
                this.clearCoinFromCanvas(coin);
            }
        })
    }

    checkCollisionsBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.clearBottleFromCanvas(bottle);
                this.character.collectBottle(bottle);
                collect_bottle_sound.play();
                this.character.collectedBottles.push(bottle);
                this.bottlebar.setPercentage(this.character.amountCollectedBottles);
            }
        })
    }

    clearEnemyFromCanvas(enemy) {
        setTimeout(() => {
            this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1);
            this.y -= 50;
            this.x = this.x;
        }, 1000);
    }

    clearBottleFromCanvas(bottles) {
        setTimeout(() => {
            this.level.bottles.splice(this.level.bottles.indexOf(bottles), 1);
            this.speed = 0;
            this.speedY = 0;
            this.acceleration = 0;
        }, 50);
    }

    clearCoinFromCanvas(coins) {
        setTimeout(() => {
            this.level.coins.splice(this.level.coins.indexOf(coins), 1);
        }, 50);
    }

    hitEndboss() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }
}