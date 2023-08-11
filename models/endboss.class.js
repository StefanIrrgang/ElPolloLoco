class Endboss extends MovableObject {

    y = 50;
    height = 400;
    width = 400;
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    chicken_sound = new Audio('audio/chicken.mp3');

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 2400;
        this.animate();
        
    }

    animate() {
        setInterval(() => {
            // this.endboss.play();
            this.playAnimation(this.IMAGES_WALKING);
        }, 180);
    }

}