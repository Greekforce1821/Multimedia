AFRAME.registerComponent('popup-listener', {
    init: function () {
            const popup = document.querySelector('#popup');
            const playSoundButton = document.querySelector('#play-sound');
            const closePopupButton = document.querySelector('#close-popup');
            const titanicSound = document.querySelector('#titanic-sound');

            // Show the popup when the entity is clicked
            this.el.addEventListener('click', () => {
                popup.style.display = 'block';
            });

            // Play the sound when "Play Sound" is clicked
            playSoundButton.addEventListener('click', () => {
                titanicSound.play();
            });

            // Close the popup when "Close" is clicked
            closePopupButton.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        }
});