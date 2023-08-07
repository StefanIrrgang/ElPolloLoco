class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;

    // loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); //Image ist in JS bekannt und bereits definiert als <img id='Image' src> Also: this.img = document.getElementById('Image')
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        
    }


}