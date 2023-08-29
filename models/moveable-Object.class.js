class moveableObject extends DrawableObject {
    x;
    y;
    level;
    world;
    endboss;
    character;
    energy = 100;
    speed = 10;
    speedY;
    speedX;
    acceleration = 2.0;
    otherDirection = false;
    lastHit = 0;
    imageCache = {};
    offset = {
        right: 10,
        left: 10,
        top: 10,
        bottom: 10,
    };

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 35;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0)
                this.y -= this.speedY;
            this.speedY -= this.acceleration;

        }, 1000 / 60)
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y < 180;
        }
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitEndboss() {
        this.energy -= 3;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let time_passed = new Date().getTime() - this.lastHit;
        time_passed = time_passed / 1000;
        return time_passed < 0.6;
    }

    isDead() {
        return this.energy == 0;
    }

    throw() {
        this.applyGravity();
        setInterval(() => {
            this.x += 7.5;
        }, 25)
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
} 