AFRAME.registerComponent('mormugao-ui', {
  init: function () {
    const mormugaoUI = document.getElementById("mormugaoUI");
    const mormugaoCloseButton = document.getElementById("mormugaoCloseButton");
    const mormugaoInfoButton = document.getElementById("mormugaoInfoButton");
    const mormugaoPlaySoundButton = document.getElementById("mormugaoPlaySoundButton");
    const mormugaoPhotoAlbumButton = document.getElementById("mormugaoPhotoAlbumButton");
    const mormugaoContent = document.getElementById("mormugaoContent");
    const mormugaoCarousel = document.getElementById("mormugaoCarousel");
    const mormugaoCarouselImage = document.getElementById("mormugaoCarouselImage");
    const mormugaoCloseCarouselBtn = document.getElementById("closemormugaoBtn");
    const mormugaoNextPhotoBtn = document.getElementById("nextmormugaoBtn");
    const mormugaoPrevPhotoBtn = document.getElementById("prevmormugaoBtn");
    
    
    // The Creation of the YouTube Modal
    const youtubeModal = document.createElement("div");
    youtubeModal.id = "youtubeModal";
    youtubeModal.style.display = "none"; 
    youtubeModal.style.position = "fixed";
    youtubeModal.style.top = "0";
    youtubeModal.style.left = "0";
    youtubeModal.style.width = "100%";
    youtubeModal.style.height = "100%";
    youtubeModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    youtubeModal.style.zIndex = "1100";
    youtubeModal.style.justifyContent = "center";
    youtubeModal.style.alignItems = "center";
    youtubeModal.innerHTML = `
        <div style="position: relative; width: 80%; height: 60%;">
            <iframe
                id="youtubeIframe"
                width="100%"
                height="100%"
                src=""
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <button id="closeYoutubeButton" style="
                position: absolute;
                top: 10px;
                right: 10px;
                padding: 10px;
                font-size: 16px;
                background-color: red;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;">
                Κλείσιμο
            </button>
        </div>
    `;
    document.body.appendChild(youtubeModal);

    const youtubeIframe = youtubeModal.querySelector("#youtubeIframe");
    const closeYoutubeButton = youtubeModal.querySelector("#closeYoutubeButton");
    
  // Appearance of the YouTube Modal
  mormugaoPlaySoundButton.addEventListener("click", () => {
      youtubeIframe.src = "https://www.youtube.com/embed/4sZqT3_BEwc?autoplay=1&rel=0&wmode=transparent"; 
      youtubeModal.style.display = "flex";
  });

  // Disappearance of the YouTube Modal
  closeYoutubeButton.addEventListener("click", () => {
      youtubeModal.style.display = "none"; 
      youtubeIframe.src = ""; 
  });

    // Carousel Photos
    const mormugaoPhotos = [
      "./src/images/mormugao/mormugao-1.jpg",
      "./src/images/mormugao/mormugao-2.jpg",
      "./src/images/mormugao/mormugao-3.jpg",
      "./src/images/mormugao/mormugao-4.jpg",
      "./src/images/mormugao/mormugao-5.jpg",
      "./src/images/mormugao/mormugao-6.jpg"
    ];
    let mormugaoPhotoIndex = 0;

    // Click on the mormugao Boat
    this.el.addEventListener('click', () => {
      mormugaoUI.style.display = "flex";
    });

    // UI Closing
    mormugaoCloseButton.addEventListener("click", () => {
      mormugaoUI.style.display = "none";
    });

    // Info Tab
    mormugaoInfoButton.addEventListener("click", () => {
      mormugaoContent.innerHTML = `
      <h3>Πληροφορίες για το INS Mormugao</h3>
      <p>
        Το <strong>INS Mormugao</strong> είναι το δεύτερο πλοίο των stealth αντιτορπιλικών κατευθυνόμενων πυραύλων της κλάσης Visakhapatnam, το οποίο ανήκει στο Ινδικό Ναυτικό. 
        Κατασκευάστηκε στο Mazagon Dock Limited (MDL) και καθελκύστηκε στις 17 Σεπτεμβρίου 2016. Το πλοίο τέθηκε σε υπηρεσία στις 18 Δεκεμβρίου 2022 και πήρε το όνομά του από την πόλη-λιμάνι Mormugao στη Γκόα.
      </p>
      <h4>Κατασκευή</h4>
      <p>
        Η κατασκευή του INS Mormugao ξεκίνησε με την τοποθέτηση της καρίνας του στις 4 Ιουνίου 2015 και καθελκύστηκε στις 17 Σεπτεμβρίου 2016. 
        Το πλοίο ολοκλήρωσε τις δοκιμές λεκάνης στις 15 Δεκεμβρίου 2021 και ξεκίνησε τις παρθενικές θαλάσσιες δοκιμές του στις 19 Δεκεμβρίου 2021, 
        τιμώντας την Ημέρα Απελευθέρωσης της Γκόα.
      </p>
      <p>
        Το πλοίο τέθηκε σε υπηρεσία στις 18 Δεκεμβρίου 2022, με διοικητή τον πλοίαρχο Kapil Bhatia, VSM.
      </p>
      <h4>Ιστορικό Υπηρεσίας</h4>
      <p>
        Στις 14 Μαΐου 2023, το INS Mormugao εκτόξευσε με επιτυχία μια προηγμένη παραλλαγή του πυραύλου Brahmos.
      </p>
      <p>
        Τον Δεκέμβριο του 2023, συμμετείχε σε αποστολές προστασίας εμπορικών πλοίων στην Αραβική Θάλασσα μαζί με τα INS Kochi και INS Kolkata. 
        Επιπλέον, το πλοίο συμμετείχε σε περιπολίες στο πλαίσιο της Επιχείρησης Sankalp, με στόχο την ασφάλεια της εμπορικής ναυτιλίας 
        στην Ερυθρά Θάλασσα, τον Κόλπο του Άντεν και την Αραβική Θάλασσα.
      </p>
      <h4>Τελευταία Ανάπτυξη</h4>
      <p>
        Στα τέλη του 2023, το Ινδικό Ναυτικό ανέπτυξε το INS Mormugao και άλλα σύγχρονα αντιτορπιλικά, όπως τα INS Kolkata, INS Kochi, INS Chennai και INS Visakhapatnam, για την ενίσχυση της ασφάλειας στη βόρεια και κεντρική Αραβική Θάλασσα, με φόντο τις αυξανόμενες απειλές από επιθέσεις πειρατείας.
      </p>
      <p>
        Πηγή: <a href="https://en.wikipedia.org/wiki/INS_Mormugao" target="_blank">Wikipedia</a>
        Μετάφραση: DeepL
      </p>
    `;
});

    // Appearance of the Photo Carousel
    mormugaoPhotoAlbumButton.addEventListener("click", () => {
      if (mormugaoPhotos.length > 0) {
        mormugaoPhotoIndex = 0;
        mormugaoCarouselImage.src = mormugaoPhotos[mormugaoPhotoIndex];
        mormugaoCarousel.style.display = "flex";
        vclassCarouselImage.classList.add("fade-in");
        console.log("Το καρουζέλ εμφανίστηκε με την εικόνα:", mormugaoPhotos[mormugaoPhotoIndex]);
      } else {
        console.error("Δεν υπάρχουν φωτογραφίες στο άλμπουμ.");
      }
    });
    

    // Disappearance of the Carousel
    mormugaoCloseCarouselBtn.addEventListener("click", () => {
      mormugaoCarousel.style.display = "none";
    });

    // Next Photo
    mormugaoNextPhotoBtn.addEventListener("click", () => {
      mormugaoPhotoIndex = (mormugaoPhotoIndex + 1) % mormugaoPhotos.length;
      mormugaoCarouselImage.src = mormugaoPhotos[mormugaoPhotoIndex];
    });

    // Previous Photo
    mormugaoPrevPhotoBtn.addEventListener("click", () => {
      mormugaoPhotoIndex = (mormugaoPhotoIndex - 1 + mormugaoPhotos.length) % mormugaoPhotos.length;
      mormugaoCarouselImage.src = mormugaoPhotos[mormugaoPhotoIndex];
    });
  }
});


// Component Connection with DOM
document.addEventListener("DOMContentLoaded", () => {
  const mormugaoBoat = document.querySelector("#mormugao");
  mormugaoBoat.setAttribute("mormugao-ui", "");
});
