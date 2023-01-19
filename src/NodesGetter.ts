export default class AppNodes {
  btnPlay: HTMLButtonElement;
  btnMute: HTMLButtonElement;
  volumeRange: HTMLInputElement;
  timer: HTMLLabelElement;
  progressBar: HTMLProgressElement;
  settingsBtn: HTMLButtonElement;
  settings: NodeListOf<HTMLInputElement>;
  mediaNode: HTMLMediaElement;
  fastForward: HTMLButtonElement;
  fastRewind: HTMLButtonElement;

  constructor() {
    this.btnPlay = document.querySelector('#play-pause') as HTMLButtonElement;
    this.btnMute = document.querySelector('#mute') as HTMLButtonElement;
    this.volumeRange = document.querySelector('#volume') as HTMLInputElement;
    this.timer = document.querySelector('#timer') as HTMLLabelElement;
    this.progressBar = document.querySelector(
      '#progress'
    ) as HTMLProgressElement;
    this.settingsBtn = document.querySelector(
      '.btn-settings'
    ) as HTMLButtonElement;
    this.settings = document.querySelectorAll(
      '.settings .setting-option'
    ) as NodeListOf<HTMLInputElement>;
    this.mediaNode = document.querySelector('video') as HTMLMediaElement;
    this.fastForward = document.querySelector(
      '#fast-forward'
    ) as HTMLButtonElement;
    this.fastRewind = document.querySelector(
      '#fast-rewind'
    ) as HTMLButtonElement;
  }
}
