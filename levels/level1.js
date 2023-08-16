// let level1;

// function initLevel() {

let level1 = new Level(
    [
        new Chicken(250),
        new Chicken(450),
        new Chicken(850),
        new Chicken(900),
        new Chicken(1400),
        new Chicken(1600),
        new Chicken(1650),
        new Chicken(2000),
        new Chicken(2200),
        new Chicken(2700),
        new Chicken(3000),
        new Chicken(3050),
        new Chicken(3150),
        new Endboss()
    ],
    [
        new Cloud(200),
        new Cloud(1600),
        new Cloud(2800),
        new Cloud(3500)
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/air.png', 719*4),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/air.png', 719*5),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*5),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*5),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*5)
    ],
    [
        new Coins(350, 100),
        new Coins(600, 100),
        new Coins(1150, 100),
        new Coins(1450, 100),
        new Coins(2050, 100),
        new Coins(2650, 100),
        new Coins(3000, 100),
        new Coins(3250, 100),
        new Coins(850, 100),
        new Coins(1200, 100)
    ],
    [
        new Bottles(900),
        new Bottles(450),
        new Bottles(1400),
        new Bottles(1900),
        new Bottles(300),
        new Bottles(750),
        new Bottles(2500),
        new Bottles(1800),
        new Bottles(3300),
        new Bottles(2200),
    ]
);

// }