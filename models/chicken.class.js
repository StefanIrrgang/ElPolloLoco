/**
 * This class contains properties and methods for the control of the chicken movement, animations as well as actions.
 */
class Chicken extends moveableObject {
    width = 70;
    height = 70;
    y = 350;
    energy = 1;
    imageCache = {};
    offset = {
        right: 5,
        left: 5,
        top: 5,
        bottom: -100,
    }

    /**
     * array with images of walking chicken
     */
    Walking_Images_Enemies = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    /**
     * array with image of dead chicken
     */
    Dead_Images_Enemies = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    /**
     * Generate new chicken enemies amd random places and call their animate function to move them
     */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.Walking_Images_Enemies);
        this.loadImages(this.Dead_Images_Enemies);
        this.x = 350 + Math.random() * 4250;
        this.speed = 4.25 + Math.random() * 0.7;
        this.animate();
    }

    /**
     * Load the chicken animation (images) for the respective state
     */
    animate() {
        let animationInterval = setInterval(() => {
            if (this.isDead()) {
                this.chickenDeathInterval(animationInterval);
                setTimeout(() => {
                    clearInterval(animationInterval);
                }, 100);
            } if (!this.isDead()) {
                this.chickenMoving();
            }
        }, 5500 / 60);
    }

    /**
     * Move the chicken to left
     */
    chickenMoving() {
        this.moveLeft();
        this.playAnimation(this.Walking_Images_Enemies);
        this.otherDirection = false;
    }

    /**
     * Call chicken dead animation
     */
    killedChickenToHell() {
        setInterval(() => {
            this.y++;
        }, 50);
    }

    /**
     * Animates the chicken dead animation with sound
     */
    chickenDeathInterval() {
        this.playAnimation(this.Dead_Images_Enemies);
        this.killedChickenToHell();
        chicken_dead_sound.play();
    }

    /**
     * Play the animation with the respective image array
     * @param {string} images - Array of chicken enemies
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}