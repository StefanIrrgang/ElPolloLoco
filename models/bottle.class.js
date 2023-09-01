/**
 * The class contains the size, position and offset of the object.
 */
class Bottle extends DrawableObject {
  width = 75;
  height = 65;
  imageCache = {};

  /**
   * The offset is for the collision functions to set the borders properly.
   */
  offset = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
  }

  /**
   * The array contains all images of the respective object
   */
  Bottle_Images = [
    'img/6_salsa_bottle/salsa_bottle.png',
  ]

  /**
   * Generate a new bottle at a random place according to the math.random calculation
   */
  constructor() {
    super();
    this.loadImage(this.Bottle_Images);
    this.x = 200 + Math.random() * 3900;
    this.y = 120 + Math.random() * 250;
  }
}