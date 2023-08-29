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