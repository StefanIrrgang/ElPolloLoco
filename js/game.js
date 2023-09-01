let canvas;
let world;
let keyboard = new Keyboard();
let contentLoaded = false;
allSounds;
activeFullscreen = false;
winner_Music.volume = 0.15;
game_music.volume = 1;
start_screen_music.volume = 0.20;

/**
 * This function starts the general menu music after the website was loaded
 * An interaction from the user is needed to start playing the music otherwise there is no music
 */
function playStartMusic() {
const tryToPlay = setInterval(() => {
    start_screen_music.play()
      .then(() => {
          clearInterval(tryToPlay);
      })
      .catch(error => {
      });
}, 1000);
checkSoundMuted();
}

/**
 * This function starts the ingame music after the start button was pressed
 */
function init() {
  game_music.play();
  initLevel();
  setTimeout(() => {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
  }, 10);
}

/**
 * Initiates the ingame music as well as mutes the menu music
 * Removes the start screen to show the game world
 * Enable the touchscreen button for control on mobile devices
 */
function startGame() {
  init();
  start_screen_music.muted = true;
  start_screen_music.pause();
  document.getElementById('exitfull-icon').style.display = 'none';
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('start-btn').style.display = 'none';
  document.getElementById('restart-btn').style.display = 'flex';
  startMobileButtonTouch();
  stopMobileButtonTouch();
}

/**
 * Reload the document and hide the winner or game over screen and show start screen again
 */
function restartGame() {
  location.reload();
  document.getElementById('restart-btn').style.display = 'none';
  document.getElementById('game-over').style.display = 'none';
  document.getElementById('winner').style.display = 'none';
  document.getElementById('start-screen').style.display = 'flex';
}

function hideControlOverlay() {
  document.getElementById('control-info').style.display = 'none';
}

function hideInformationOverlay() {
  document.getElementById('information-text').style.display = 'none';
}

function showControls() {
  document.getElementById('control-info').style.display = 'flex';
  document.getElementById('information-text').style.display = 'none';
}

function showInformation() {
  document.getElementById('control-info').style.display = 'none';
  document.getElementById('information-text').style.display = 'flex';
}

/**
 * Enable fullscreen mode
 */
function fullScreen() {
  let fullscreen = document.getElementById('canvas-container');
  activeFullscreen = true;
  enterFullscreen(fullscreen);
  styleFullScreen();
  document.getElementById('start-btn').disabled = false;
  document.getElementById('restart-btn').disabled = false;
}

/**
 * Disable fullscreen
 * funcion is not ative since browser has own function to mnimize by clicking ESC
 */
function minimizeFullscreen() {
  document.getElementById('fullscreen-icon').style.display = 'flex';
  let fullScreen = document.getElementById('canvas-container');
  activeFullscreen = false;
  exitFullscreen(fullScreen);
  styleMinimizedScreen();
}

/**
 * Resize all elements for fullscreen
 */
function styleFullScreen() {
  document.getElementById('fullscreen-icon').style.display = 'none';
  document.getElementById('canvas').style.height = '100%';
  document.getElementById('canvas').style.width = '100%';
  document.getElementById('start-screen').style.width = '100%';
  document.getElementById('start-screen').style.height = '100%';
  document.getElementById('start-img').style.width = '100%';
  document.getElementById('start-img').style.height = '100%';
  document.getElementById('winner').style.width = '100%';
  document.getElementById('winner').style.height = '100%';
  document.getElementById('game-over').style.width = '100%';
  document.getElementById('game-over').style.height = '100%';
  document.getElementById('game-over-img').style.width = '100%';
  document.getElementById('game-over-img').style.height = '100%';
}

/**
 * Resize all elements for minimized screen
 */
function styleMinimizedScreen() {
  document.getElementById('exitfull-icon').style.display = 'none';
  document.getElementById('canvas').style.height = '480px';
  document.getElementById('canvas').style.width = '720px';
  document.getElementById('start-screen').style.width = '720px';
  document.getElementById('start-screen').style.height = '480px';
  document.getElementById('start-img').style.height = '480px';
  document.getElementById('start-img').style.width = '720px';
  document.getElementById('winner').style.width = '720px';
  document.getElementById('winner').style.height = '480px';
  document.getElementById('game-over').style.width = '720px';
  document.getElementById('game-over').style.height = '480px';
  document.getElementById('game-over-img').style.width = '720px';
  document.getElementById('game-over-img').style.height = '480px';
}

/**
 * Enter fullscreen mode
 * @param {*} element - This is the name of the element/container which will show in fullscreen
 */
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

/**
 * Exit fullscreen mode
 */
function exitFullscreen() {
  if (document.exitFullscreen && activeFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/**
 * Exit fullscreen by clicking ESC
 */
function exitFullscreenOnEscape(event) {
  if (event.key === "Escape") {
    minimizeFullscreen();
  }
}

const fullscreenElement = document.getElementById("canvas-container");
document.addEventListener("keyup", exitFullscreenOnEscape);

function checkSoundMuted() {
  const isMuted = getMuteState();
  if (isMuted) {
    muteAllSounds();
  } else {
    unmuteAllSounds();
  }
};

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

/**
 * enable mobile control via touchscreen
 */
function startMobileButtonTouch() {
  document.getElementById("left").addEventListener("touchstart", (event) => {
    keyboard.LEFT = true;
    event.preventDefault();
  });
  document.getElementById("right").addEventListener("touchstart", (event) => {
    keyboard.RIGHT = true;
    event.preventDefault();
  });
  document.getElementById("jump").addEventListener("touchstart", (event) => {
    keyboard.SPACE = true;
    event.preventDefault();
  });
  document.getElementById("throw").addEventListener("touchstart", (event) => {
    keyboard.D = true;
    event.preventDefault();
  });
}

/**
 * stop mobile control via touchscreen
 */
function stopMobileButtonTouch() {
  document.getElementById("left").addEventListener("touchend", (event) => {
    keyboard.LEFT = false;
    event.preventDefault();
  });
  document.getElementById("right").addEventListener("touchend", (event) => {
    keyboard.RIGHT = false;
    event.preventDefault();
  });
  document.getElementById("jump").addEventListener("touchend", (event) => {
    keyboard.SPACE = false;
    event.preventDefault();
  });
  document.getElementById("throw").addEventListener("touchend", (event) => {
    keyboard.D = false;
    event.preventDefault();
  });
}

function moveRight() {
  const button = document.getElementById("right");

  button.addEventListener("mousedown", () => {
    keyboard.RIGHT = true;
  });
  button.addEventListener("mouseup", () => {
    keyboard.RIGHT = false;
  });
}

function moveLeft() {
  const button = document.getElementById("left");

  button.addEventListener("mousedown", () => {
    keyboard.LEFT = true;
  });
  button.addEventListener("mouseup", () => {
    keyboard.LEFT = false;
  });
}

function jump() {
  const button = document.getElementById("jump");

  button.addEventListener("mousedown", () => {
    keyboard.SPACE = true;
  });
  button.addEventListener("mouseup", () => {
    keyboard.SPACE = false;
  });
}

function throwBottle() {
  const button = document.getElementById("throw");

  button.addEventListener("mousedown", () => {
    keyboard.D = true;
  });
  button.addEventListener("mouseup", () => {
    keyboard.D = false;
  });
}