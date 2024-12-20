document.addEventListener("DOMContentLoaded", function () {
    const sailingBoat = document.querySelector('[gltf-model="#sailing-boat"]');
    const skipper = document.querySelector('[gltf-model="#sailor"]');
    const clickSound = document.querySelector('#click-horn');

    const sailingBoatPath = [
        { position: { x: -40, y: 2, z: 30 }, rotation: { x: 0, y: -90, z: 0 } },
        { position: { x: -40, y: 2, z: 30 }, rotation: { x: 0, y: -180, z: 0 } },
        { position: { x: -25, y: 2, z: -20 }, rotation: { x: 0, y: -180, z: 0 } },
        { position: { x: 25, y: 2, z: 20 }, rotation: { x: 0, y: -270, z: 0 } },
        { position: { x: 43, y: 2, z: 30 }, rotation: { x: 0, y: -90, z: 0 } }
    ];

    const skipperPath = [
        { position: { x: -44, y: 2, z: 29 }, rotation: { x: 0, y: -90, z: 0 } },
        { position: { x: -38.9, y: 2, z: 26 }, rotation: { x: 0, y: -180, z: 0 } },
        { position: { x: -24.5, y: 2, z: -24.5 }, rotation: { x: 0, y: -180, z: 0 } },
        { position: { x: 29, y: 2, z: 22.1 }, rotation: { x: 0, y: -270, z: 0 } },
        { position: { x: 38, y: 2, z: 29.2 }, rotation: { x: 0, y: -90, z: 0 } }
    ];

    function animateAll() {
        animateMove(sailingBoat, sailingBoatPath, 0);
        animateMove(skipper, skipperPath, 0);
    }

    function animateMove(element, path, index) {
        if (index >= path.length) {
            return;
        }

        let nextPosition = path[index].position;
        let nextRotation = path[index].rotation;

        let moveAnimationId = `move-animation-${element.id || 'no-id'}-${index}`;
        let rotateAnimationId = `rotate-animation-${element.id || 'no-id'}-${index}`;

        let moveParams = {
            property: 'position',
            to: `${nextPosition.x} ${nextPosition.y} ${nextPosition.z}`,
            dur: 5000,
            easing: 'easeInOutElastic'
        };

        let rotateParams = {
            property: 'rotation',
            to: `${nextRotation.x} ${nextRotation.y} ${nextRotation.z}`,
            dur: 5000,
            easing: 'easeInOutElastic'
        };

        element.setAttribute(`animation__${moveAnimationId}`, moveParams);
        element.setAttribute(`animation__${rotateAnimationId}`, rotateParams);

        if (clickSound) {
            clickSound.play();
        }

        element.addEventListener('animationcomplete', function (event) {
            if (event.detail.name === `animation__${moveAnimationId}`) {
                animateMove(element, path, index + 1);
            }
        }, { once: true });
    }

    sailingBoat.addEventListener('click', animateAll);
    skipper.addEventListener('click', animateAll);
});
