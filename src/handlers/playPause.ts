import { MediaPlayer } from '../Player';

const iconNames = {
  paused: 'paused',
  play: 'play_arrow',
};

/**
 * Handles the play pause event on button
 *
 * @export
 * @param {MediaPlayer} player
 * @param {HTMLButtonElement} target
 */
export function playPauseHandler(
  player: MediaPlayer,
  target: HTMLButtonElement
) {
  const icon = target.querySelector('span') as HTMLSpanElement;

  player.togglePlay();

  icon.innerText = '';
  icon.innerText = player.media.paused ? iconNames.play : iconNames.paused;
}
