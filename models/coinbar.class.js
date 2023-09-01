/**
 * A coinbar which shows current status of collected coins
 */
class Coinbar extends StatusBar {
    x = 5;
    y = 50;
    percentage = 0;
    imageCache = {};

    /**
     * Array of coinbar images
     */
    CoinBar_Images = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    /**
     * Load the images of the coinbar with start value 0
     */
    constructor() {
        super();
        this.loadImages(this.CoinBar_Images);
        this.setPercentage(0);
    }

    /**
     * Set percentage for coinbar and update coinbar
     * @param {number} percentage - percentage value to set the bar
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.CoinBar_Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}