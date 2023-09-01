/**
 * This class contains the properties to define the size, position and images of the cloud.
 */
class Cloud extends moveableObject {
    width = 600;
    height = 350;
    imageCache = {};

    /**
     * Array with cloud images
     */
    Cloud_Images = [
        'img/5_background/layers/4_clouds/1.png',
        'img/5_background/layers/4_clouds/2.png',
    ];

    /**
     * Initiate cloud animation and set random position 
     */
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.loadImages(this.Cloud_Images);
        this.y = 35;
        this.x = 5 + Math.random() * 3800;
        this.animate()
    }

    /**
     * Move clouds to the left
     */
    animate() {
        this.moveLeft();
    }
}