class Cloud extends moveableObject {
    width = 600;
    height = 350;
    imageCache = {};

    Cloud_Images = [
        'img/5_background/layers/4_clouds/1.png',
        'img/5_background/layers/4_clouds/2.png',
    ];

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.loadImages(this.Cloud_Images);
        this.y = 35;
        this.x = 5 + Math.random() * 3800;
        this.animate()
    }

    animate() {
        this.speed = 10;
        this.moveLeft();
    }
}