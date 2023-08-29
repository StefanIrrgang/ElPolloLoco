class DrawableObject {
    y;
    x;
    width = 250;
    height = 200;
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