import { IconNames, toggleIcon } from '../utils';
import { BaseHandlerProps } from './index';

/**
 * Play/Pause the player and changes the icon depending on the state
 *
 * @export
 * @param {BaseHandlerProps} props
 * @param {HTMLButtonElement} [current] - refers to the element being target of the event
 */
export function playPauseHandler(
  props: BaseHandlerProps,
  current?: HTMLButtonElement
) {
  const icon = current?.querySelector('span') as HTMLElement;

  props.player.togglePlay();

  toggleIcon({
    target: icon,
    defaultIcon: IconNames.play,
    toggleIcon: IconNames.paused,
    condition: props.player.media.paused,
  });
}
