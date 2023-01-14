export interface Plugin {
  run: (player: MediaPlayer) => void;
}

interface Conf {
  el: HTMLMediaElement;
  plugins?: Plugin[];
}

export class MediaPlayer {
  media: HTMLMediaElement;

  constructor(config: Conf) {
    this.media = config.el;
    this.runPlugins(config.plugins);
  }

  private runPlugins(plugins: Plugin[] = []) {
    plugins.forEach(plugin => plugin.run(this));
  }

  togglePlay() {
    this.media.paused ? this.media.play() : this.media.pause();
  }

  toggleMute() {
    this.media.muted = !this.media.muted;
  }
  // setVolume() {}
}
