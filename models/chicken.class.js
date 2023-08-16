class Chicken extends MovableObject {
    y = 355;
    height = 70;
    width = 70;
    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'
    ];
    chicken_sound = new Audio('audio/chicken.mp3');

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = x;
        this.speed = 0.15 + Math.random() * 0.4;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 180);
    }


}