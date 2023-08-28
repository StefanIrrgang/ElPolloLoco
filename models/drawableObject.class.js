class DrawableObject {
    y;
    x;
    height = 200;
    width = 250;
    img;
    currentImage = 0;
    imageCache = {};

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        catch (e) {
        }
    }

    /* drawFrame(ctx) {
         if (this instanceof Character || this instanceof Chicken || this instanceof Coin || this instanceof Bottle || this instanceof Endboss) {
             ctx.beginPath();
             ctx.lineWidth = "4";
             ctx.strokeStyle = "red";
             ctx.rect(this.x, this.y, this.width, this.height);
             ctx.stroke();
         }
     }*/

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.CoinBar_Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}