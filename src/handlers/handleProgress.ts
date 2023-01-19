import { BaseHandlerProps } from './index';

/**
 * Updates the progress bar and time
 *
 * @export
 * @param {BaseHandlerProps} props
 */
export function handleProgress(props: BaseHandlerProps) {
  const {
    media: { duration, currentTime },
  } = props.player;
  const current = (currentTime / duration) * 100;
  props.progressBar.value = current;
  props.timer.innerHTML = `${Math.round(currentTime)}s`;
}
