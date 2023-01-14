import { MediaPlayer } from '../Player';
import { IconNames, toggleIcon } from '../utils';

/**
 * Toggle mute on button click
 *
 * @export
 * @param {MediaPlayer} player
 * @param {HTMLButtonElement} target
 */
export function muteHandler(player: MediaPlayer, target: HTMLButtonElement) {
  const icon = target.querySelector('span') as HTMLElement;

  player.toggleMute();

  toggleIcon({
    target: icon,
    defaultIcon: IconNames.volumeOff,
    toggleIcon: IconNames.volumeUp,
    condition: player.media.muted,
  });
}
