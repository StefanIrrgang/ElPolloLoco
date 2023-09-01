/**
 * A class which can used to draw objects on a canvas
 */
class DrawableObject {
    y;
    x;
    width = 250;
    height = 200;
    img;
    currentImage = 0;
    imageCache = {};

    /**
     * Function to draw the object on canvas
     * @param {Canvas} ctx - context
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        catch (e) {
        }
    }

    /**
     * Load image from the path
     * @param {string} path - file path to the image
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Load array with images and put them to cache
     * @param {string} arr - array of image paths
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * 
     * @param {number} percentage - percenatge value to set the bar
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.CoinBar_Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}