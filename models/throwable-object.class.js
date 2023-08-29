class ThrowableObject extends moveableObject {
    x;
    y;
    width = 75;
    height = 65;
    speedY = 27;
    bottleIsBroken = false;
    otherDirection = false;

    Bottle_Rotation_Images = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    Bottle_Splash_Images = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y) {
        super();
        this.loadImages(this.Bottle_Rotation_Images);
        this.loadImages(this.Bottle_Splash_Images);
        this.throw();
        this.x = x;
        this.y = y;
    }

    throw() {
        this.animateBottle();
        this.applyGravity();
        this.throwBottleLeft = world.character.otherDirection;
        setInterval(() => {
            if (this.throwBottleLeft) {
                this.x -= 17;
            }
            else {
                this.x += 17;
            }
        }, 35);
    }

    animateBottle() {
        this.bottleInterval = setInterval(() => {
            if (this.y < 345) {
                this.bottleRotation();
            } else {
                this.bottleSplashing();
                setTimeout(() => {
                    clearInterval(this.bottleInterval);
                }, 500);
            }
        }, 1000 / 20);
    }

    bottleRotation() {
        this.playAnimation(this.Bottle_Rotation_Images);
    }

    bottleSplashing() {
        bottle_splash_sound.pause();
        this.bottleIsBroken = true;
        this.playAnimation(this.Bottle_Splash_Images);
        bottle_splash_sound.play();
    }

    clearBottleFromCanvas(bottles) {
        setTimeout(() => {
            this.level.bottles.splice(this.level.bottles.indexOf(bottles), 1);
        }, 50);
    }
}