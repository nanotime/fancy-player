import { MediaPlayer } from '../Player';
import { toggleIcon, IconNames } from '../utils';

interface PluginConfig {
  button: HTMLButtonElement;
  container: HTMLElement;
}

const toggleIconConf = {
  defaultIcon: IconNames.paused,
  toggleIcon: IconNames.play,
};

/**
 * Plugin that adds keyboard management to the player
 *
 * @export
 * @class MediaKeys
 */
export class MediaKeys {
  player: MediaPlayer | undefined;
  container: HTMLElement;
  button: HTMLElement;

  constructor({ container, button }: PluginConfig) {
    this.container = container;
    this.button = button.querySelector('span') as HTMLElement;
    this.onEnter = this.onEnter.bind(this);
    this.onLeftArrow = this.onLeftArrow.bind(this);
    this.onRightArrow = this.onRightArrow.bind(this);
  }

  public run(player: MediaPlayer) {
    this.player = player;
    this.container.addEventListener('keyup', ({ code }) => {
      if (code === 'Enter') this.onEnter();
      if (code === 'ArrowLeft') this.onLeftArrow();
      if (code === 'ArrowRight') this.onRightArrow();
    });

    this.container.querySelector('video')?.addEventListener('click', () => {
      toggleIcon({
        ...toggleIconConf,
        target: this.button,
        condition: this.player?.media.paused as boolean,
      });
      this.player?.togglePlay();
    });
  }

  private onEnter() {
    toggleIcon({
      ...toggleIconConf,
      target: this.button,
      condition: this.player?.media.paused as boolean,
    });
    this.player?.togglePlay();
  }

  private onLeftArrow() {
    this.player?.fastRewind();
  }

  private onRightArrow() {
    this.player?.fastForward();
  }
}
