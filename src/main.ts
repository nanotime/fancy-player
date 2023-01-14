import { MediaPlayer } from './Player';
import { playPauseHandler } from './handlers';

// Base conf
const mediaNode = document.querySelector('video') as HTMLMediaElement;
const player = new MediaPlayer({
  el: mediaNode,
});

// Capturing Controls
const btnPlay = document.querySelector('#play-pause') as HTMLButtonElement;
const volumeRange = document.querySelector('#volume') as HTMLInputElement;
const btnAutoPlay = document.querySelector('#auto-play') as HTMLButtonElement;
const btnFullScreen = document.querySelector(
  '#full-screen'
) as HTMLButtonElement;

// Event handling
btnPlay.addEventListener('click', () => playPauseHandler(player, btnPlay));

volumeRange.addEventListener('change', () => console.log(volumeRange.value));

btnAutoPlay.addEventListener('click', ev => console.log(ev));

btnFullScreen.addEventListener('click', ev => console.log(ev));
