class EndbossHealthbar extends StatusBar {
    y = 0;
    x = 530;
    percentage = 100;
    imageCache = {};

    Endboss_Health_Bar_Images = [
       'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
       'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
       'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
       'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
       'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
       'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
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