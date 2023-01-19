import AppNodes from '../NodesGetter';
import { MediaPlayer } from '../Player';

export interface BaseHandlerProps extends AppNodes {
  player: MediaPlayer;
}

export { playPauseHandler } from './playPause';
export { muteHandler } from './muteHandler';
export { volumeHandler } from './volumeHandler';
export { handleProgress } from './handleProgress';
