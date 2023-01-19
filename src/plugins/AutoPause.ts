import { MediaPlayer } from '../Player';
import { toggleIcon, IconNames } from '../utils';

interface PluginConfig {
  button: HTMLButtonElement;
}

const toggleIconConf = {
  defaultIcon: IconNames.paused,
  toggleIcon: IconNames.play,
};

export class AutoPause {
  player: MediaPlayer | undefined;
  button: HTMLElement;
  private threshold: number;

  constructor({ button }: PluginConfig) {
    this.threshold = 0.25;
    this.button = button.querySelector('span') as HTMLElement;

    this.pauseOnScroll = this.pauseOnScroll.bind(this);
    this.pauseOnVisibility = this.pauseOnVisibility.bind(this);
  }

  public run(player: MediaPlayer) {
    this.player = player;
    const observer = new IntersectionObserver(this.pauseOnScroll, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.pauseOnVisibility);
  }

  private pauseOnScroll(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (!isVisible) {
      toggleIcon({
        ...toggleIconConf,
        target: this.button,
        condition: isVisible,
      });
      this.player?.pause();
    }
  }

  private pauseOnVisibility() {
    const isVisible = document.visibilityState === 'visible';
    if (!isVisible) {
      toggleIcon({
        ...toggleIconConf,
        target: this.button,
        condition: isVisible,
      });
      this.player?.pause();
    }
  }
}
