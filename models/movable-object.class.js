class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;
    imageCache = {};

    // loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); //Image ist in JS bekannt und bereits definiert als <img id='Image' src> Also: this.img = document.getElementById('Image')
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }


}