class EndbossHealthbar extends StatusBar {
    y = 0;
    x = 530;
    percentage = 100;
    imageCache = {};

    Endboss_Health_Bar_Images = [
       'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/endboss000.png',
       'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/endboss020.png',
       'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/endboss040.png',
       'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/endboss060.png',
       'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/endboss080.png',
       'img/7_statusbars/2_statusbar_endboss/green.png',
    ]

    constructor() {
        super().loadImage('img/7_statusbars/2_statusbar_endboss/green.png');
        this.loadImages(this.Endboss_Health_Bar_Images);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.Endboss_Health_Bar_Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}