document.addEventListener("DOMContentLoaded", function () {
  const boat = document.querySelector('[gltf-model="#boat"]');
  const popeye = document.querySelector('[gltf-model="#popeye"]');
  const clouds = document.querySelector('[id="#clouds"]');
  const clickSound = document.querySelector('#click-sound'); 
  
  function animateAll() {
    animateMove(boat, false);
    animateMove(popeye, true);
    animateMove(clouds, false);
  }

  function animateMove(element, alternate) {
    let currPosition = element.getAttribute('position');
    let newPosition = {
      x: currPosition.x + 40,
      y: currPosition.y,
      z: currPosition.z
    };

    let params = {
      property: 'position',
      to: newPosition,
      dur: 5000,
      easing: 'easeInOutElastic'
    };

    if (alternate) {
      params.dir = 'alternate';
      params.loop = true;
    }

    element.setAttribute('animation', params);

    if (clickSound) {
      clickSound.play(); 
    }
  }

  boat.addEventListener('click', animateAll);
  popeye.addEventListener('click', animateAll);
  clouds.addEventListener('click', animateAll);
});
