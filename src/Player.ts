export interface Plugin {
  run: (player: MediaPlayer) => void;
}

interface Conf {
  el: HTMLMediaElement;
  plugins?: Plugin[];
}

export class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Plugin[] | undefined;

  constructor(config: Conf) {
    this.media = config.el;
    this.plugins = config.plugins;
    this.runPlugins();
  }

  private runPlugins() {
    this.plugins?.forEach(plugin => plugin.run(this));
  }

  play() {
    this.media?.play();
  }

  pause() {
    this.media?.pause();
  }

  togglePlay() {
    this.media.paused ? this.media.play() : this.media.pause();
  }

  toggleMute() {
    this.media.muted = !this.media.muted;
  }

  setVolume(amount: number) {
    this.media.volume = amount;
  }
}
