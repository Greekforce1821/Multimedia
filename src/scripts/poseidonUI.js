AFRAME.registerComponent('poseidon-ui', {
  init: function () {
    const poseidonUI = document.getElementById("poseidonUI");
    const poseidonCloseButton = document.getElementById("poseidonCloseButton");
    const poseidonInfoButton = document.getElementById("poseidonInfoButton");
    const poseidonPlaySoundButton = document.getElementById("poseidonPlaySoundButton");
    const poseidonPhotoAlbumButton = document.getElementById("poseidonPhotoAlbumButton");
    const poseidonMoverButton = document.getElementById("poseidonMoverButton");
    const poseidonContent = document.getElementById("poseidonContent");
    const poseidonCarousel = document.getElementById("poseidonCarousel");
    const poseidonCarouselImage = document.getElementById("poseidonCarouselImage");
    const poseidonCloseCarouselBtn = document.getElementById("closeposeidonBtn");
    const poseidonNextPhotoBtn = document.getElementById("nextposeidonBtn");
    const poseidonPrevPhotoBtn = document.getElementById("prevposeidonBtn");
    const poseidonEntity = document.querySelector("#poseidonEntity");
    
    
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
  poseidonPlaySoundButton.addEventListener("click", () => {
    youtubeIframe.src = "https://www.youtube.com/embed/031ze__eGu8?autoplay=1&rel=0&wmode=transparent&start=664";
    youtubeModal.style.display = "flex";
  });

  // Disappearance of the YouTube Modal
  closeYoutubeButton.addEventListener("click", () => {
      youtubeModal.style.display = "none"; 
      youtubeIframe.src = ""; 
  });

    // Carousel Photos
    const poseidonPhotos = [
      "./src/images/poseidon/poseidon-1.jpg",
      "./src/images/poseidon/poseidon-2.jpg",
      "./src/images/poseidon/poseidon-3.jpg",
      "./src/images/poseidon/poseidon-4.jpg",
      "./src/images/poseidon/poseidon-5.jpg",
      "./src/images/poseidon/poseidon-6.jpg"
    ];
    let poseidonPhotoIndex = 0;

    // Click on the poseidon Boat
    this.el.addEventListener('click', () => {
      poseidonUI.style.display = "flex";
    });

    // UI Closing
    poseidonCloseButton.addEventListener("click", () => {
      poseidonUI.style.display = "none";
    });

    // Move Boat
    poseidonMoverButton.addEventListener("click", () => {
      poseidonUI.style.display = "none"; 

      // Save the Current Possition of the Boat
      const currPosition = poseidonEntity.getAttribute("position");

      // Move the Boat 20 units forward on the Z-axis
      const targetPosition = { x: currPosition.x, y: currPosition.y, z: currPosition.z + 20 };

      // Adjust the Boat's Position
      poseidonEntity.setAttribute("animation", {
        property: "position",
        to: `${targetPosition.x} ${targetPosition.y} ${targetPosition.z}`,
        dur: 10000,
        easing: "easeInOutQuad"
      });

    });

    // Info Tab
    poseidonInfoButton.addEventListener("click", () => {
      poseidonContent.innerHTML = `
        <h3>Πληροφορίες για το Υποβρύχιο ΠΟΣΕΙΔΩΝ (S-116)</h3>
        <p>
          Το Υποβρύχιο ΠΟΣΕΙΔΩΝ (S-116) είναι το πρώτο από τα τέσσερα υποβρύχια τύπου «209/1200» που κατασκευάστηκαν στα ναυπηγεία της HDW στο Κίελο της Γερμανίας. 
          Καθελκύστηκε στις 21 Μαρτίου 1978 και παραλήφθηκε από το Πολεμικό Ναυτικό στις 21 Μαρτίου 1979. Στις 17 Μαΐου 1979, κατέπλευσε στον Ναύσταθμο Σαλαμίνας 
          και εντάχθηκε στη δύναμη του Αρχηγείου Στόλου.
        </p>
        <h4>Βασικά Χαρακτηριστικά:</h4>
        <ul>
          <li>Διαστάσεις: 54,15 μ. (μήκος) / 6,35 μ. (πλάτος) / 11,38 μ. (ύψος)</li>
          <li>Εκτόπισμα: 1.278 τόνοι</li>
          <li>Πλήρωμα: Περίπου 35 άτομα, εκ των οποίων 6-7 είναι αξιωματικοί</li>
          <li>Ταχύτητα: 22 κόμβοι</li>
          <li>Πρόωση: 1 ηλεκτρικός κινητήρας συνεχούς ρεύματος, 4 συστοιχίες, 4 κύριες μηχανές MTU, 4 γεννήτριες</li>
          <li>Οπλισμός: 8 τορπιλοσωλήνες, 14 τορπίλες και κατευθυνόμενα βλήματα (SUBHARPOON / SUT / SST-4)</li>
        </ul>
        <p>
          Το όνομα "ΠΟΣΕΙΔΩΝ" προέρχεται από τον θεό της θάλασσας στην ελληνική μυθολογία. Είναι το πέμπτο πλοίο στην ιστορία του Πολεμικού Ναυτικού που φέρει 
          αυτό το όνομα και το δεύτερο υποβρύχιο. Το πρώτο υποβρύχιο με το όνομα αυτό (S-78) ήταν κλάσης GATO, κατασκευασμένο το 1942, 
          και παραχωρήθηκε από τις ΗΠΑ στην Ελλάδα το 1957.
        </p>
        <p>
          Το Υ/Β ΠΟΣΕΙΔΩΝ (S-116) είναι σχεδιασμένο για επιχειρήσεις κατά υποβρυχίων και πλοίων επιφανείας, συμβάλλοντας σημαντικά στην άμυνα 
          και την ασφάλεια των ελληνικών θαλασσών.
        </p>
        <p>
          Πηγή: <a href="https://hellenicnavy.gr/o-stolos-mas/ypovrychia/y-v-poseidon-s-116/" target="_blank">Πολεμικό Ναυτικό</a>
        </p>
  `;
});


    // Appearance of the Photo Carousel
    poseidonPhotoAlbumButton.addEventListener("click", () => {
      if (poseidonPhotos.length > 0) {
        poseidonPhotoIndex = 0;
        poseidonCarouselImage.src = poseidonPhotos[poseidonPhotoIndex];
        poseidonCarousel.style.display = "flex";
        poseidonCarouselImage.classList.add("fade-in");
        console.log("Το καρουζέλ εμφανίστηκε με την εικόνα:", poseidonPhotos[poseidonPhotoIndex]);
      } else {
        console.error("Δεν υπάρχουν φωτογραφίες στο άλμπουμ.");
      }
    });
    

    // Disappearance of the Carousel
    poseidonCloseCarouselBtn.addEventListener("click", () => {
      poseidonCarousel.style.display = "none";
    });

    // Next Photo
    poseidonNextPhotoBtn.addEventListener("click", () => {
      poseidonPhotoIndex = (poseidonPhotoIndex + 1) % poseidonPhotos.length;
      poseidonCarouselImage.src = poseidonPhotos[poseidonPhotoIndex];
    });

    // Previous Photo
    poseidonPrevPhotoBtn.addEventListener("click", () => {
      poseidonPhotoIndex = (poseidonPhotoIndex - 1 + poseidonPhotos.length) % poseidonPhotos.length;
      poseidonCarouselImage.src = poseidonPhotos[poseidonPhotoIndex];
    });
  }
});


// Component Connection with DOM
document.addEventListener("DOMContentLoaded", () => {
  const poseidonBoat = document.querySelector("#poseidon");
  poseidonBoat.setAttribute("poseidon-ui", "");
});
