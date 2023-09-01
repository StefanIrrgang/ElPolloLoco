/**
 * load all sound effects and music into the respective variable
 */
const game_music = new Audio('audio/mariachi.mp3');
const gameOverMusic = new Audio('audio/game-over.mp3');
const start_screen_music = new Audio('audio/start-music.mp3');
const winner_Music = new Audio('audio/winner.mp3');
const walkingSound = new Audio('audio/walking.mp3');
const jumpingSound = new Audio('audio/jump.mp3');
const deadSound = new Audio('audio/dead.mp3');
const hurtSound = new Audio('audio/hurt.mp3');
const gameOverVoice = new Audio('audio/game-over.mp3');
const chicken_dead_sound = new Audio('audio/chicken2.mp3');
const endboss_Sound = new Audio('audio/endboss-dead.mp3');
const bottle_splash_sound = new Audio('audio/glass_shatter.mp3');
const collect_coin_sound = new Audio('audio/coin.mp3');
const collect_bottle_sound = new Audio('audio/bottle.mp3');
const endboss_music = new Audio('audio/endboss-coming.mp3');
const snoringSound = new Audio('audio/sleeping.mp3');

/**
 * array with all sounds which are used for the game
 */
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

/**
 * Check if sounds are muted and toggle the setting
 */
function checkSoundMuted() {
  const isMuted = getMuteState();
  if (isMuted) {
    muteAllSounds();
  } else {
    unmuteAllSounds();
  }
};

/**
 * save current mute state to local storage 
 * @param {*} muted - The name of the current mute state
 */
function saveMuteState(muted) {
  localStorage.setItem('soundMuted', muted);
}

/**
 * load the last mute state from local storage
 * @returns - The name of the last mute state
 */
function getMuteState() {
  const muted = localStorage.getItem('soundMuted');
  return muted === 'true';
}

/**
 * mute all sound effects and music
 * save the mute state 
 * toggle the icon to show the current mute state ingame as well as on start screen in the respective icon
 */
function muteAllSounds() {
  allSounds.forEach(sound => {
    sound.muted = true;
  });
  saveMuteState(true);
  document.getElementById('sound-mute').style.display = 'none';
  document.getElementById('sound-on').style.display = 'flex';
}

/**
 * unmute all sound effects and music
 * save the mute state 
 * toggle the icon to show the current mute state ingame as well as on start screen in the respective icon
 */
function unmuteAllSounds() {
  allSounds.forEach(sound => {
    sound.muted = false;
  });
  saveMuteState(false);
  document.getElementById('sound-mute').style.display = 'flex';
  document.getElementById('sound-on').style.display = 'none';
}