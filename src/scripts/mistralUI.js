AFRAME.registerComponent('mistral-ui', {
    init: function () {
      const mistralUI = document.getElementById("mistralUI");
      const mistralCloseButton = document.getElementById("mistralCloseButton");
      const mistralInfoButton = document.getElementById("mistralInfoButton");
      const mistralPlaySoundButton = document.getElementById("mistralPlaySoundButton");
      const mistralPhotoAlbumButton = document.getElementById("mistralPhotoAlbumButton");
      const mistralContent = document.getElementById("mistralContent");
      const mistralCarousel = document.getElementById("mistralCarousel");
      const mistralCarouselImage = document.getElementById("mistralCarouselImage");
      const mistralCloseCarouselBtn = document.getElementById("closeMistralBtn");
      const mistralNextPhotoBtn = document.getElementById("nextMistralBtn");
      const mistralPrevPhotoBtn = document.getElementById("prevMistralBtn");
      
      
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
    mistralPlaySoundButton.addEventListener("click", () => {
        youtubeIframe.src = "https://www.youtube.com/embed/PSlLV6rhU_c?autoplay=1&rel=0&wmode=transparent"; 
        youtubeModal.style.display = "flex";
    });

    // Disappearance of the YouTube Modal
    closeYoutubeButton.addEventListener("click", () => {
        youtubeModal.style.display = "none"; 
        youtubeIframe.src = ""; 
    });

      // Carousel Photos
      const mistralPhotos = [
        "./src/images/mistral/mistral-1.jpg",
        "./src/images/mistral/mistral-2.jpg",
        "./src/images/mistral/mistral-3.jpg",
        "./src/images/mistral/mistral-4.jpg",
        "./src/images/mistral/mistral-5.jpg",
        "./src/images/mistral/mistral-6.jpg"
      ];
      let mistralPhotoIndex = 0;
  
      // Click on the Mistral Boat
      this.el.addEventListener('click', () => {
        mistralUI.style.display = "flex";
      });
  
      // UI Closing
      mistralCloseButton.addEventListener("click", () => {
        mistralUI.style.display = "none";
      });
  
      // Info Tab
      mistralInfoButton.addEventListener("click", () => {
        mistralContent.innerHTML = `
          <h3>Πληροφορίες για την Κλάση Μιστράλ</h3>
          <p>
            Η Κλάση Μιστράλ είναι τύπος αποβατικού πλοίου κρούσης (ελικοπτεροφόρου) που σχεδιάστηκε για τη μεταφορά και την υποστήριξη στρατιωτικών αποστολών.
            Τα πλοία αυτής της κλάσης μπορούν να μεταφέρουν έως 16 ελικόπτερα τύπου NH90 ή Tiger, τέσσερις φορτηγίδες απόβασης, έως 70 οχήματα (συμπεριλαμβανομένων 13 αρμάτων μάχης), καθώς και 450 στρατιώτες, με δυνατότητα φιλοξενίας έως 900 για σύντομο χρονικό διάστημα.
          </p>
          <p>
            Τα πλοία διαθέτουν επίσης νοσοκομειακές υποδομές με 69 κλίνες και έχουν πλήρωμα 160 ατόμων. Είναι σχεδιασμένα για πολυδιάστατες αποστολές, 
            συμπεριλαμβανομένων επιχειρήσεων απόβασης, ανθρωπιστικής βοήθειας και ειρηνευτικών αποστολών, ενώ συμμετέχουν ενεργά σε επιχειρήσεις του ΝΑΤΟ, των Ηνωμένων Εθνών και της Ευρωπαϊκής Ένωσης.
          </p>
          <p>
            Σήμερα, τρία πλοία αυτής της κλάσης υπηρετούν στο Γαλλικό Πολεμικό Ναυτικό: το Mistral (L9013), το Tonnerre (L9014) και το Dixmude (L9015), τα οποία εδρεύουν στο λιμάνι της Τουλόν.
            Επιπλέον, δύο πλοία, τα Gamal Abdel Nasser και Anwar El Sadat, ανήκουν στο Αιγυπτιακό Πολεμικό Ναυτικό.
          </p>
          <p>
            Αρχικά, είχε συμφωνηθεί η πώληση δύο πλοίων στη Ρωσία, ωστόσο η συμφωνία ακυρώθηκε λόγω διεθνών πιέσεων, και τα πλοία αγοράστηκαν από την Αίγυπτο.
            Τα πλοία της κλάσης Μιστράλ αποτελούν ένα από τα πιο ευέλικτα και ισχυρά εργαλεία των ναυτικών δυνάμεων που τα διαθέτουν.
          </p>
          <p>
            Πηγή: <a href="https://el.wikipedia.org/wiki/%CE%9A%CE%BB%CE%AC%CF%83%CE%B7_%CE%9C%CE%B9%CF%83%CF%84%CF%81%CE%AC%CE%BB" target="_blank">Wikipedia</a>
          </p>
        `;
      }); 
  
      // Appearance of the Photo Carousel
      mistralPhotoAlbumButton.addEventListener("click", () => {
        if (mistralPhotos.length > 0) {
          mistralPhotoIndex = 0;
          mistralCarouselImage.src = mistralPhotos[mistralPhotoIndex];
          mistralCarousel.style.display = "flex";
          console.log("Το καρουζέλ εμφανίστηκε με την εικόνα:", mistralPhotos[mistralPhotoIndex]);
        } else {
          console.error("Δεν υπάρχουν φωτογραφίες στο άλμπουμ.");
        }
      });
      
  
      // Disappearance of the Carousel
      mistralCloseCarouselBtn.addEventListener("click", () => {
        mistralCarousel.style.display = "none";
      });
  
      // Next Photo
      mistralNextPhotoBtn.addEventListener("click", () => {
        mistralPhotoIndex = (mistralPhotoIndex + 1) % mistralPhotos.length;
        mistralCarouselImage.src = mistralPhotos[mistralPhotoIndex];
      });
  
      // Previous Photo
      mistralPrevPhotoBtn.addEventListener("click", () => {
        mistralPhotoIndex = (mistralPhotoIndex - 1 + mistralPhotos.length) % mistralPhotos.length;
        mistralCarouselImage.src = mistralPhotos[mistralPhotoIndex];
      });
    }
  });

  
  // Component Connection with DOM
  document.addEventListener("DOMContentLoaded", () => {
    const mistralBoat = document.querySelector("#mistral");
    mistralBoat.setAttribute("mistral-ui", "");
  });
  