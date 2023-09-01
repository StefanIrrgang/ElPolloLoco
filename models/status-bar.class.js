/**
 * Class which contains a statusbar
 */
class StatusBar extends DrawableObject {
    img;
    width = 180;
    height = 60;

    /**
     * Constructor of statusbar class
     */
    constructor() {
        super();
    }

    /**
     * Returns value for percentage to set the different status bars
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}