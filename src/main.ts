import { MediaPlayer } from './Player';
import { AutoPause, MediaKeys } from './plugins';
import AppNodes from './NodesGetter';
import * as handlers from './handlers';

// Base conf
const Nodes = new AppNodes();
const player = new MediaPlayer({
  el: Nodes.mediaNode,
  plugins: [
    new AutoPause({ button: Nodes.btnPlay }),
    new MediaKeys({ container: Nodes.mediaContainer, button: Nodes.btnPlay }),
  ],
});

// Event handling
Nodes.timer.innerHTML = `${Math.round(player.media.currentTime)}s`;

// Handles the button play/pause actions
Nodes.btnPlay.addEventListener('click', function () {
  handlers.playPauseHandler({ player, ...Nodes }, this);
});

// Handles the click and mouse over actions on mute
Nodes.btnMute.addEventListener('click', function () {
  handlers.muteHandler({ player, ...Nodes }, this);
});

Nodes.btnMute.addEventListener('mouseover', () =>
  Nodes.volumeRange.classList.remove('hidden')
);

// Handles the volume changes on slide and hide the slider on mouse out
Nodes.volumeRange.addEventListener('change', function () {
  handlers.volumeHandler({ player, ...Nodes }, this);
});

Nodes.volumeRange.addEventListener('mouseout', function () {
  this.classList.add('hidden');
});

// Update the progressbar on time update
Nodes.mediaNode.addEventListener('timeupdate', () =>
  handlers.handleProgress({ player, ...Nodes })
);

// Fast forward / rewind
Nodes.fastForward.addEventListener('click', () => player.fastForward());
Nodes.fastRewind.addEventListener('click', () => player.fastRewind());
