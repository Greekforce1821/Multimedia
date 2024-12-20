AFRAME.registerComponent('sailing-skipper-mover', {
    schema: {
      speed: {type: 'number', default: 1}
    },
    init: function () {
      let el = this.el;
      this.sailingskipperClickHorn = document.querySelector('#click-horn');
      this.path = [
        { position: { x: -44, y: 2, z: 29 }, rotation: { x: 0, y: -90, z: 0 } },
        { position: { x: -38.9, y: 2, z: 26 }, rotation: { x: 0, y: -180, z: 0 } },
        { position: { x: -24.5, y: 2, z: -24.5 }, rotation: { x: 0, y: -180, z: 0 } },
        { position: { x: 29, y: 2, z: 22.1 }, rotation: { x: 0, y: -270, z: 0 } },
        { position: { x: 38, y: 2, z: 29.2 }, rotation: { x: 0, y: -90, z: 0 } }
        
      ];
      this.currentPoint = 0;
      this.animating = false; 
    },
  
    play: function () {
      this.el.addEventListener('click', this.startAnimation.bind(this));
    },
  
    pause: function () {
      this.el.removeEventListener('click', this.startAnimation.bind(this));
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
        dur: 5000 / this.data.speed,
        easing: 'easeInOutElastic'
      };
      let rotationParams = {
        property: 'rotation',
        to: `${nextPoint.rotation.x} ${nextPoint.rotation.y} ${nextPoint.rotation.z}`,
        dur: 5000 / this.data.speed,
        easing: 'easeInOutElastic'
      };
  
      this.el.setAttribute('animation__position', positionParams);
      this.el.setAttribute('animation__rotation', rotationParams);
      this.sailingskipperClickHorn.play();
  
      this.el.addEventListener('animationcomplete', () => {
        this.currentPoint++;
        if (this.currentPoint < this.path.length) {
          this.animateMove(); 
        } else {
          this.animating = false; 
          this.currentPoint = 0;
          this.returnToStart(); 
        }
      }, {once: true}); 
    },
  
    returnToStart: function () {
      let initialPoint = this.path[0];
      let positionParams = {
        property: 'position',
        to: `${initialPoint.position.x} ${initialPoint.position.y} ${initialPoint.position.z}`,
        dur: 5000 / this.data.speed,
        easing: 'easeInOutElastic'
      };
      let rotationParams = {
        property: 'rotation',
        to: `${initialPoint.rotation.x} ${initialPoint.rotation.y} ${initialPoint.rotation.z}`,
        dur: 5000 / this.data.speed,
        easing: 'easeInOutElastic'
      };
  
      this.el.setAttribute('animation__position', positionParams);
      this.el.setAttribute('animation__rotation', rotationParams);
      this.sailingboatClickHorn.play();
    }
  });
     

   //            Test values for the coordinates (Prototype)
  // { position: { x: -45, y: 2, z: 30 }, rotation: { x: 0, y: -90, z: 0 } },
 // { position: { x: -40, y: 2, z: 30 }, rotation: { x: 0, y: -180, z: 0 } },
 // { position: { x: -45, y: 2, z: -20 }, rotation: { x: 0, y: -180, z: 0 } },
 // { position: { x: 30, y: 2, z: 20 }, rotation: { x: 0, y: -270, z: 0 } },
 // { position: { x: 30, y: 2, z: 20 }, rotation: { x: 0, y: 0, z: 0 } },
 // { position: { x: 45, y: 2, z: 34 }, rotation: { x: 0, y: -90, z: 0 } }
 //  { position: { x: 27.5, y: 2, z: 20 }, rotation: { x: 0, y: 0, z: 0 } }