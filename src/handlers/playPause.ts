import { MediaPlayer } from '../Player';
import { IconNames, toggleIcon } from '../utils';

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
  const icon = target.querySelector('span') as HTMLElement;

  player.togglePlay();

  toggleIcon({
    target: icon,
    defaultIcon: IconNames.play,
    toggleIcon: IconNames.paused,
    condition: player.media.paused,
  });
}
