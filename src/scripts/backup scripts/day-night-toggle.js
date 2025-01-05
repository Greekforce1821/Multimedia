AFRAME.registerComponent('day-night-toggle', {
  init: function() {
    this.el.sceneEl.addEventListener('loaded', () => {
      this.el.addEventListener('click', this.toggleDayNight.bind(this));
    });
  },

  toggleDayNight: function() {
    var sceneEl = document.querySelector('a-scene');
    var environment = sceneEl.components.environment;

    if (environment) {
      var currentPreset = environment.attrValue.preset;

      if(currentPreset === 'default' || currentPreset === 'none') {
        sceneEl.setAttribute('environment', 'preset: starry');
        document.getElementById('lighthouseLight').setAttribute('intensity', 3);
        document.getElementById('lightbeam').setAttribute('opacity', 0.2); 
      } else {
        sceneEl.setAttribute('environment', 'preset: default');
        document.getElementById('lighthouseLight').setAttribute('intensity', 0); 
        document.getElementById('lightbeam').setAttribute('opacity', 0); 
      }
    } else {
      console.error('Environment component was not found on the scene.');
    }
  }
});