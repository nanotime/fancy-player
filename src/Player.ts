export interface Plugin {
  run: (player: MediaPlayer) => void;
}

interface Conf {
  el: HTMLVideoElement;
  plugins?: Plugin[];
}

export class MediaPlayer {
  media: HTMLVideoElement | null;

  constructor(config: Conf) {
    this.media = config.el;
    this.runPlugins(config.plugins);
  }

  private runPlugins(plugins: Plugin[] = []) {
    plugins.forEach(plugin => plugin.run(this));
  }

  togglePlay() {}

  toggleMute() {}

  setVolume() {}
}
