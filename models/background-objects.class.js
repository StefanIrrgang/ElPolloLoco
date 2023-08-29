class BackgroundObject extends moveableObject {
    width = 720;
    height = 480;
    x = 0;
    y = 0;
    imageCache = {};

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}