class Bottles extends MovableObject {
    height = 100;
    width = 100;
    y = 340;
    offset = {
        top: 25,
        left: 35,
        right: 35,
        bottom: 0
    };

    IMAGES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];
    // bottles_sound = new Audio('audio/coin.mp3');

    constructor(x) {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES);
        this.x = x;
    }
}