class Bottle extends DrawableObject {
    height = 65;
    width = 75;
    imageCache = {};
  
    offset = {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    }
  
    Bottle_Images = [
      'img/6_salsa_bottle/salsa_bottle.png',
    ]
  
    constructor() {
      super();
      this.loadImage(this.Bottle_Images);
      this.x =  200 + Math.random() * 3900;
      this.y = 120 + Math.random() * 250;
    }
  }