AFRAME.registerComponent('flag-interaction', {
  init: function() {
    let flag = this.el;
    let anthem = document.querySelector('#greek-horn');
    let isPlaying = false;

    this.toggleSoundAndAnimation = function() {
      if (isPlaying) {
        anthem.pause();
        anthem.currentTime = 0;
        flag.emit('stopAnimation');
        isPlaying = false;
      } else {
        anthem.play();
        flag.emit('startAnimation');
        isPlaying = true;
      }
    };

    this.el.addEventListener('click', this.toggleSoundAndAnimation);
  },
  remove: function() {
    this.el.removeEventListener('click', this.toggleSoundAndAnimation);
  }
});
