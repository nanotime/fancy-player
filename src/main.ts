import { MediaPlayer } from './Player';
import {
  playPauseHandler,
  muteHandler,
  volumeHandler,
  handleProgress,
} from './handlers';

// Base conf
const mediaNode = document.querySelector('video') as HTMLMediaElement;
const player = new MediaPlayer({
  el: mediaNode,
});

// Capturing Controls
const btnPlay = document.querySelector('#play-pause') as HTMLButtonElement;
const btnMute = document.querySelector('#mute') as HTMLButtonElement;
const volumeRange = document.querySelector('#volume') as HTMLInputElement;
const timer = document.querySelector('#timer') as HTMLLabelElement;
const progressBar = document.querySelector('#progress') as HTMLProgressElement;
const btnAutoPlay = document.querySelector('#auto-play') as HTMLButtonElement;
const btnFullScreen = document.querySelector(
  '#full-screen'
) as HTMLButtonElement;

// Event handling
timer.innerHTML = `${Math.round(player.media.currentTime)}s`;

btnPlay.addEventListener('click', () => playPauseHandler(player, btnPlay));
btnMute.addEventListener('click', () => muteHandler(player, btnMute));
btnAutoPlay.addEventListener('click', ev => console.log(ev));
btnFullScreen.addEventListener('click', ev => console.log(ev));

volumeRange.addEventListener('change', () =>
  volumeHandler(player, volumeRange)
);

mediaNode.addEventListener('timeupdate', () =>
  handleProgress(player, timer, progressBar)
);
