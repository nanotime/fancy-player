import { BaseHandlerProps } from './index';

/**
 * Changes the player volume
 *
 * @export
 * @param {BaseHandlerProps} props
 * @param {HTMLInputElement} [current] - refers to the element being target of the event
 */
export function volumeHandler(
  props: BaseHandlerProps,
  current?: HTMLInputElement
) {
  const amount = Number(current?.value) / 100;
  props.player.setVolume(amount);
}
