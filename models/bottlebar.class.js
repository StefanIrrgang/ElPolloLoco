/**
 * The class contains the size, position and percentage of the bottlebar.
 */
class BottleBar extends StatusBar {
    x = 5;
    y = 100;
    imageCache = {};
    percentage = 0;

    /**
     * The array contains all images of the respective object
     */
    BottleBar_Images = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];

    /**
     * Generate the bottlebar at a specific place according to the x and y coordinates
     */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png');
        this.loadImages(this.BottleBar_Images);
        this.setPercentage(0);
    }

    /**
     * Set the value of the bar to update the bar depending from the amount of collected bottles and thrown bottles
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.BottleBar_Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}