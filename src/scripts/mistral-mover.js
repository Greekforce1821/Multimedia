AFRAME.registerComponent('mistral-mover', {
    schema: {
      speed: {type: 'number', default: 1.5}
    },
  
    init: function () {
      this.el.addEventListener('click', this.startAnimation.bind(this));
  
      this.path = [
        { position: { x: 20, y: -1, z: -36 }, rotation: { x: 0, y: 360, z: 0 } },  
        { position: { x: 20, y: -1, z: -16 }, rotation: { x: 0, y: 360, z: 0 } }
      ];
  
      this.currentPoint = 0;
      this.animating = false;
      this.airplane = document.querySelector('#airplane'); 
    },
  
    startAnimation: function () {
      if (!this.animating) {
        this.animating = true;
        this.animateMove();
      }
    },
  
    animateMove: function () {
      let nextPoint = this.path[this.currentPoint];
      let positionParams = {
        property: 'position',
        to: `${nextPoint.position.x} ${nextPoint.position.y} ${nextPoint.position.z}`,
        dur: 10000 / this.data.speed,  
        easing: 'easeInOutQuad' 
      };
      let rotationParams = {
        property: 'rotation',
        to: `${nextPoint.rotation.x} ${nextPoint.rotation.y} ${nextPoint.rotation.z}`,
        dur: 10000 / this.data.speed,  
        easing: 'easeInOutQuad'  
      };
  
      this.el.setAttribute('animation__position', positionParams);
      this.el.setAttribute('animation__rotation', rotationParams);
  
      if (this.airplane) {
        this.airplane.setAttribute('animation__position', positionParams);
        this.airplane.setAttribute('animation__rotation', rotationParams);
      }
  
      this.el.addEventListener('animationcomplete', () => {
        this.currentPoint++;
        if (this.currentPoint < this.path.length) {
          this.animateMove(); 
        } else {
          this.animating = false;
        }
      }, {once: true});
    }
  });
  