import { MediaPlayer } from '../Player';

/**
 * Handle the volume of player
 *
 * @export
 * @param {MediaPlayer} player
 * @param {HTMLInputElement} target
 */
export function volumeHandler(player: MediaPlayer, target: HTMLInputElement) {
  const amount = Number(target.value) / 100;
  player.setVolume(amount);
}
