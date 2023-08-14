class Coins extends MovableObject {
    
    height = 100;
    width = 100;

    IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];
    // coin_sound = new Audio('audio/coin.mp3');

    constructor(x, y) {
        super().loadImage('img/8_coin/coin_1.png',);
        this.loadImages(this.IMAGES);
        this.coinsAnimation();
        this.x = x;
        this.y = y + Math.random() * 200;
    }

    coinsAnimation() {
        setInterval(() => {
            this.playAnimation(this.IMAGES)
        }, 300);
    }


}