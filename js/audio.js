const game_music = new Audio('audio/mariachi.mp3');
const gameOverMusic = new Audio('audio/game-over.mp3');
const start_screen_music = new Audio('audio/start-music.mp3');
const winner_Music = new Audio('audio/winner.mp3');
const walkingSound = new Audio('audio/walking.mp3');
const jumpingSound = new Audio('audio/jump.mp3');
const deadSound = new Audio('audio/death.mp3');
const hurtSound = new Audio('audio/hurt.mp3');
const gameOverVoice = new Audio('audio/game-over.mp3');
const chicken_dead_sound = new Audio('audio/chicken-dead.mp3');
const endboss_Sound = new Audio('audio/chicken-boss-death.mp3');
const bottle_splash_sound = new Audio('audio/glass_shatter.mp3');
const collect_coin_sound = new Audio('audio/collect-coin.mp3');
const collect_bottle_sound = new Audio('audio/collect-bottle.mp3');
const endboss_music = new Audio('audio/endboss-music.mp3');
const snoringSound = new Audio('audio/snoring-sound.mp3');

const allSounds = [
  game_music,
  gameOverMusic,
  start_screen_music,
  winner_Music,
  walkingSound,
  jumpingSound,
  deadSound,
  hurtSound,
  gameOverVoice,
  chicken_dead_sound,
  endboss_Sound,
  bottle_splash_sound,
  collect_coin_sound,
  collect_bottle_sound,
  endboss_music,
  snoringSound,
];

// function which saves to local storage
function saveMuteState(muted) {
  localStorage.setItem('soundMuted', muted);
}

//Function to query the muted state from the Local Storage
function getMuteState() {
  const muted = localStorage.getItem('soundMuted');
  return muted === 'true'; // The Local Storage stores strings, so we compare with 'true'.
}

// function tomutes sound and saves it to local storage
function muteAllSounds() {
  allSounds.forEach(sound => {
    sound.muted = true;
  });
  saveMuteState(true);
  document.getElementById('sound-mute').style.display = 'none';
  document.getElementById('sound-on').style.display = 'flex';
}

//function unmutes sound and saves it to the local storage
function unmuteAllSounds() {
  allSounds.forEach(sound => {
    sound.muted = false;
  });
  saveMuteState(false);
  document.getElementById('sound-mute').style.display = 'flex';
  document.getElementById('sound-on').style.display = 'none';
}

// function , which checks if sound is muted , stays muted by refresh or restart
function checkSoundMuted() {
  const isMuted = getMuteState();
  if (isMuted) {
    muteAllSounds();
  } else {
    unmuteAllSounds();
  }
};

/*
// Beim Laden der Seite überprüfen und den gemuteten Zustand setzen
function checkSoundMuted() {
  const isMuted = getMuteState();
  if (isMuted) {
    muteAllSounds();
  } else {
    unmuteAllSounds();
  }
};

/*
// Funktion zum Speichern des gemuteten Zustands im Local Storage
function saveMuteState(muted) {
  localStorage.setItem('soundMuted', muted);
}

// Funktion zum Abfragen des gemuteten Zustands aus dem Local Storage
function getMuteState() {
  const muted = localStorage.getItem('soundMuted');
  return muted === 'true'; // Der Local Storage speichert Strings, daher vergleichen wir mit 'true'
}

// Funktion zum Stummschalten aller Sounds und Speichern des Zustands
function muteAllSounds() {
  allSounds.forEach(sound => {
    sound.muted = true;
  });
  saveMuteState(true);
  document.getElementById('sound-mute').style.display = 'none';
  document.getElementById('sound-on').style.display = 'flex';
}

// Funktion zum Aktivieren aller Sounds und Speichern des Zustands
function unmuteAllSounds() {
  allSounds.forEach(sound => {
    sound.muted = false;
  });
  saveMuteState(false);
  document.getElementById('sound-mute').style.display = 'flex';
  document.getElementById('sound-on').style.display = 'none';
}

// Beim Laden der Seite überprüfen und den gemuteten Zustand setzen
window.onload = function () {
  const isMuted = getMuteState();
  if (isMuted) {
    muteAllSounds();
  } else {
    unmuteAllSounds();
  }
};



// Beispiel: Button zum Umschalten des Soundstatus
document.getElementById('sound-toggle').addEventListener('click', function () {
  const isMuted = getMuteState();
  if (isMuted) {
    unmuteAllSounds();
  } else {
    muteAllSounds();
  }
});




*/
