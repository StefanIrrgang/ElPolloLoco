/**
 * Class for level of the game
 */
class Level {
    backgroundObjects;
    clouds;
    coins;
    bottles;
    enemies;
    endboss;
    level_end = 4650;
    throwableObjects;
    throwableObjects = [];
    collectedBottles = [];
    collectedCoins = [];
    throwableObjects;

  /**
   * All objects of the level
   * @param {BackgroundObject[]} backgroundObjects - Array of background objects
   * @param {Cloud[]} clouds - Array of cloud objects
   * @param {Coin[]} coins - Array of coin objects
   * @param {Bottle[]} bottles - Array of bottle objects
   * @param {Enemy[]} enemies - Array of enemy objects
   * @param {Endboss} endboss - The end boss object
   * @param {ThrowableObject[]} throwableObjects - Array of throwable objects
   */
    constructor(backgroundObjects, clouds, coins, bottles, enemies, endboss, throwableObjects) {
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.enemies = enemies;
        this.endboss = endboss;
        this.throwableObjects = throwableObjects;
    }
}