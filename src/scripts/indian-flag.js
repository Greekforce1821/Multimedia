AFRAME.registerComponent('indian-flag', {
  init: function() {
    let flag = this.el;
    let anthem = document.querySelector('#indian-horn');
    let isPlaying = false;

    anthem.volume = 0.2;
    
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
