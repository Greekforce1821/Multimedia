AFRAME.registerComponent('cursor-animator', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
        console.log('click');
        
      });
    }
  });