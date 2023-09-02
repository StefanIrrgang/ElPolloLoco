/**
 * All movable objects that extend the drawable object class
 */
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

    /**
     * Load all image paths from array and play the animation
     * @param {string} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Move object upwards
     */
    jump() {
        this.speedY = 35;
    }

    /**
     * Move object to the left
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Move object to the right
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Set the gravity to the object
     * The vertical behaviour
     */
    applyGravity() {
        setInterval(() => {
            if (this instanceof (Character) && this.y > 180) {
                this.y = 180;
            }
            if (this.isAboveGround() || this.speedY > 0)
                this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }, 1000 / 60)
    }

    /**+
     * Returns boolean true if object above ground or value if under y=180
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y < 180;
        }
    }

    /**
     * Check the collision conditions to see if objects touch or overlap each other
     * @param {moveableObject} mo 
     * @returns boolean - true if colliding
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }

    /**
     * Throws objects depending on gravity
     */
    throw() {
        this.applyGravity();
        setInterval(() => {
            this.x += 7.5;
        }, 25)
    }

    /**
     * Reduce energy of character if hit by enemy
     */
    hit() {
        this.energy -= 2;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Reduce energy of endboss if hit by character
     */
    hitEndboss() {
        this.energy -= 3;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Check if object was hurt
     * @returns boolean - true if hurt
     */
    isHurt() {
        let time_passed = new Date().getTime() - this.lastHit;
        time_passed = time_passed / 1000;
        return time_passed < 0.6;
    }

    /**
     * Check if object energy is = 0
     * @returns boolean - true if died
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Clear all intervals
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
} 