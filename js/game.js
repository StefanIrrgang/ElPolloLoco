let canvas;
let ctx;
let character = new Character();




function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    console.log('My character is', character)

}