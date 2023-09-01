/**
 * A healthbar for the character which shows current status of health
 */
class HealthBar extends StatusBar {
    percentage = 100;
    camera = 0;
    imageCache = {};

    /**
     * /**
     * Array with images of healthbar
     */
    HealthBar_Images = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];

    /**
     * Load start image of character healthbar
     */
    constructor() {
        super();
        this.loadImages(this.HealthBar_Images);
        this.setPercentage(100);
        this.x = 5;
        this.y = 0;
    }

     /**
     * Set percentage of healthbar and update the bar
     * @param {number} percentage - percentage value to set healthbar
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.HealthBar_Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}