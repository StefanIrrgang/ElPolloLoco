class Coin extends moveableObject {
    height = 105;
    width = 105 ;
    imageCache = {};
  
    offset = {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    };
  
    Images_Coin = [
      'img/8_coin/coin_1.png',
      'img/8_coin/coin_2.png',
    ];
  
    constructor() {
      super().loadImage('img/8_coin/coin_1.png');
      this.loadImages(this.Images_Coin);
      this.x = 200 + Math.random() * 4200;
      this.y = 280 - Math.random() * 200;
      this.animate();
    }
    
    playAnimation(images) {
      let i = this.currentImage % images.length;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }
  
    animate() {
      setInterval(() => {
        this.playAnimation(this.Images_Coin)
      }, 12000 / 60);
    }
  }