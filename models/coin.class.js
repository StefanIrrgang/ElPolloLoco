/**
 * This class contains the properties to define the size, position and images of the coins.
 */
class Coin extends moveableObject {
  width = 105;
  height = 105;
  imageCache = {};
  offset = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
  };

  /**
   * Array with images of the coins
   */
  Images_Coin = [
    'img/8_coin/coin_1.png',
    'img/8_coin/coin_2.png',
  ];

  /**
   * Initiate coins at random position and call animate function
   */
  constructor() {
    super().loadImage('img/8_coin/coin_1.png');
    this.loadImages(this.Images_Coin);
    this.x = 200 + Math.random() * 4200;
    this.y = 280 - Math.random() * 200;
    this.animate();
  }

  /**
   * Play animation of the coins
   * @param {string} images - Array of coins
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Initiate animation for the coins
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_Coin)
    }, 12000 / 60);
  }
}