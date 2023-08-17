let canvas;
let world;
let keyboard = new Keyboard();
// let intervalIds = [];
// let i = 1;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
    console.log('My character is', world.character)

}

window.addEventListener('keydown', (event) => {
    if(event.key == "ArrowDown") {
        keyboard.DOWN = true;
    }
    if(event.key == "ArrowRight") {
        keyboard.RIGHT = true;
    }
    if(event.key == "ArrowUp") {
        keyboard.UP = true;
    }
    if(event.key == "ArrowLeft") {
        keyboard.LEFT = true;
    }
    if(event.key == " ") {
        keyboard.SPACE = true;
    }
    if(event.key == "d") {
        keyboard.D = true;
    }
})

window.addEventListener('keyup', (event) => {
    if(event.key == "ArrowDown") {
        keyboard.DOWN = false;
    }
    if(event.key == "ArrowRight") {
        keyboard.RIGHT = false;
    }
    if(event.key == "ArrowUp") {
        keyboard.UP = false;
    }
    if(event.key == "ArrowLeft") {
        keyboard.LEFT = false;
    }
    if(event.key == " ") {
        keyboard.SPACE = false;
    }
    if(event.key == "d") {
        keyboard.D = false;
    }
})

function fullscreen() {
    let fullscreen = document.getElementById('canvas');
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
  }

  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }


// Opera browser fix
// function checkOrientation() {
//     if (window.matchMedia("(orientation: landscape)").matches) {
//         if (window.innerHeight < 480) {
//             newHeight = window.innerHeight;
//             document.getElementById('canvas').style.height = `${newHeight}px`;
//         }
//     }
//     else {
//         document.getElementById('canvas').style.height = `100%`;
//     }
// }

// clearAllIntervals() {
//     for (let i = 1; i < 9999; i++) window.clearInterval(i);
//   }


// function setStoppableInterval(fn, time) {
//     let id = setInterval(fn, time);
//     intervalIds.push(id);
// }

// setStoppableInterval(fn, time);

// function stopGame() {
//     intervalIds.forEach(clearInterval);
// }
