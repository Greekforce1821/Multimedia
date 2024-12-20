AFRAME.registerComponent('mover', {
  init: function() {
    let el = this.el;
    let boatClickSound = document.querySelector('#boat-click');
    this.animateMove = function() {
      let currPosition = el.getAttribute('position');
      let params = {
        property: 'position',
        to: {
          x: currPosition.x + 40,
          y: currPosition.y,
          z: currPosition.z
        },
        dur: 5000,
        easing: 'easeInOutElastic'
      };
      el.setAttribute('animation', params);
      boatClickSound.play();
    
    }

    this.el.addEventListener('click', this.animateMove);
  },
  remove: function() {
    this.el.removeEventListener('click', this.animateMove);
  }
});
