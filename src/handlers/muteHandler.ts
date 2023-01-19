import { IconNames, toggleIcon } from '../utils';
import { BaseHandlerProps } from './index';

/**
 * Mute/unmute the player and changes the icon depending on the state
 *
 * @export
 * @param {BaseHandlerProps} props
 * @param {HTMLButtonElement} [current] - refers to the element being target of the event
 */
export function muteHandler(
  props: BaseHandlerProps,
  current?: HTMLButtonElement
) {
  const icon = current?.querySelector('span') as HTMLElement;

  props.player.toggleMute();

  toggleIcon({
    target: icon,
    defaultIcon: IconNames.volumeOff,
    toggleIcon: IconNames.volumeUp,
    condition: props.player.media.muted,
  });
}
