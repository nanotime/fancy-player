import { MediaPlayer } from '../Player';

export function handleProgress(
  player: MediaPlayer,
  timer: HTMLLabelElement,
  progressBar: HTMLProgressElement
) {
  const {
    media: { duration, currentTime },
  } = player;
  const current = (currentTime / duration) * 100;
  progressBar.value = current;
  timer.innerHTML = `${Math.round(currentTime)}s`;
}
