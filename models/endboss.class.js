/**
 * The endboss object with properties and methods for position, movement and animations.
 */
class Endboss extends moveableObject {
    width = 180;
    height = 350;
    x = 4850;
    y = 100;
    speed = 8.5;
    level;
    world;
    character;
    energy = 100;
    imageCache = {};
    otherDirection = false;
    firstContact = false;
    isMoving = false;
    offset = {
        right: 30,
        left: 30,
        top: 70,
        bottom: 20,
    };

    /**
     * Arrays wit images for the respective animation
     */
    Walking_Images_Endboss = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    Alert_Images_Endboss = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    Attack_Images_Endboss = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    Hurt_Images_Endboss = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    Dead_Images_Endboss = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    /**
     * Load the images and the start image and call animate function
     */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.Walking_Images_Endboss);
        this.loadImages(this.Alert_Images_Endboss);
        this.loadImages(this.Attack_Images_Endboss);
        this.loadImages(this.Hurt_Images_Endboss);
        this.loadImages(this.Dead_Images_Endboss);
        this.animate();
    }

    /**
     * Initiate animation for endboss
     */
    animate() {
        this.moveInterval = setInterval(() => {
            this.playMovement();
        }, 4500 / 20);

        this.playImagesInterval = setInterval(() => {
            this.playImages();
        }, 150);
    }

    /**
     * Plays images depending on endboss state
     */
    playImages() {
        if (this.isDead()) {
            this.clearAllIntervals();
            game_music.muted = true;
            this.endbossIsDeadAnimation();
            setInterval(() => {
                this.y++; this.x = this.x;
            }, 30);
            this.showEndScreen();
        } else {
            if (this.isHurt()) {
                this.endbossIsHurtAnimation();
            }
        }
    }

    /**
     * Endboss movement depending on different conditions in if else loops
     */
    playMovement() {
        if (world.character.x > 4300 && !this.firstContact) {
            game_music.pause();
            endboss_music.play();
            this.isMoving = true;
            this.firstContact = true;
            setTimeout(() => {
                this.endbossMovingLeft();
            }, 1800);
        }
        if (world.character.x < this.x && this.firstContact) {
            this.endbossMovingLeft();
        } else if (this.x < world.character.x && this.firstContact) {
            this.endbossMovingRight();
        } else if (this.x > 4800 && world.character.x < this.x && this.firstContact) {
            this.endbossMovingLeft();
        } else {
            this.playAnimation(this.Alert_Images_Endboss);
        }
    }

    /**
     * Play endboss dead animation
     */
    endbossIsDeadAnimation() {
        this.playAnimation(this.Dead_Images_Endboss);
        this.isMoving = false;
    }

    /**
     * Move endboss to the right
     */
    endbossMovingRight() {
        this.playAnimation(this.Walking_Images_Endboss);
        this.moveRight();
        this.otherDirection = true;
        this.isMoving = true;
        this.speed = 6, 0;
    }

    /**
     * Move endboss to the left
     */
    endbossMovingLeft() {
        this.playAnimation(this.Walking_Images_Endboss);
        this.moveLeft();
        this.otherDirection = false;
        this.isMoving = true;
        this.speed = 6, 0;
    }

    /**
     * Show hurt animation of endboss
     */
    endbossIsHurtAnimation() {
        endboss_Sound.play();
        this.playAnimation(this.Hurt_Images_Endboss);
    }

    /**
     * Show alert animation od endboss
     */
    endbossIsAlert() {
        this.playAnimation(this.Alert_Images_Endboss);
    }

    /**
     * Load all image paths from array
     * @param {string} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Show endscreen, stop all sounds and play winnner music and screen
     */
    showEndScreen() {
        setTimeout(() => {
            endboss_music.pause();
            walkingSound.pause();
            game_music.pause();
            winner_Music.volume = 0.15;
            winner_Music.play();
            document.getElementById('winner').style.display = 'flex';
            document.getElementById('restart-btn-win').style.display = 'flex';
        }, 500);
    }

    /**
     * Clear all intervals
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}