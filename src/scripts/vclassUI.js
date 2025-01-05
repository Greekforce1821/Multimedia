AFRAME.registerComponent('vclass-ui', {
  init: function () {
    const vclassUI = document.getElementById("vclassUI");
    const vclassCloseButton = document.getElementById("vclassCloseButton");
    const vclassInfoButton = document.getElementById("vclassInfoButton");
    const vclassPlaySoundButton = document.getElementById("vclassPlaySoundButton");
    const vclassPhotoAlbumButton = document.getElementById("vclassPhotoAlbumButton");
    const vclassContent = document.getElementById("vclassContent");
    const vclassCarousel = document.getElementById("vclassCarousel");
    const vclassCarouselImage = document.getElementById("vclassCarouselImage");
    const vclassCloseCarouselBtn = document.getElementById("closevclassBtn");
    const vclassNextPhotoBtn = document.getElementById("nextvclassBtn");
    const vclassPrevPhotoBtn = document.getElementById("prevvclassBtn");
    
    
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
  vclassPlaySoundButton.addEventListener("click", () => {
      youtubeIframe.src = "https://www.youtube.com/embed/5RVaYTtEPww?autoplay=1&rel=0&wmode=transparent"; 
      youtubeModal.style.display = "flex";
  });

  // Disappearance of the YouTube Modal
  closeYoutubeButton.addEventListener("click", () => {
      youtubeModal.style.display = "none"; 
      youtubeIframe.src = ""; 
  });

    // Carousel Photos
    const vclassPhotos = [
      "./src/images/vclass/vclass-1.jpg",
      "./src/images/vclass/vclass-2.jpg",
      "./src/images/vclass/vclass-3.jpg",
      "./src/images/vclass/vclass-4.jpg",
      "./src/images/vclass/vclass-5.jpg",
      "./src/images/vclass/vclass-6.jpg"
    ];
    let vclassPhotoIndex = 0;

    // Click on the vclass Boat
    this.el.addEventListener('click', () => {
      vclassUI.style.display = "flex";
    });

    // UI Closing
    vclassCloseButton.addEventListener("click", () => {
      vclassUI.style.display = "none";
    });

    // Info Tab
    vclassInfoButton.addEventListener("click", () => {
      vclassContent.innerHTML = `
      <h3>Πληροφορίες για την Κλάση V και W</h3>
      <p>
        Η κλάση V και W ήταν ένα αμάλγαμα έξι παρόμοιων κλάσεων αντιτορπιλικών που κατασκευάστηκαν για το Βασιλικό Ναυτικό στο πλαίσιο του 9ου, 10ου, 13ου και 14ου από τα δεκατέσσερα Προγράμματα Έκτακτης Ανάγκης Πολέμου κατά τη διάρκεια του Πρώτου Παγκοσμίου Πολέμου και γενικά αντιμετωπίστηκαν ως μία κλάση. 
        Για την εποχή τους ήταν από τα πιο ισχυρά και προηγμένα πλοία του τύπου τους στον κόσμο και καθόρισαν την τάση για τα μελλοντικά βρετανικά σχέδια. 
      </p>
      <p>
        Έφτασαν εγκαίρως για να δουν υπηρεσία στον Πρώτο Παγκόσμιο Πόλεμο. Κατά τη διάρκεια του μεσοπολέμου, τα πλοία αυτά αποτέλεσαν τη ραχοκοκαλιά των στόλων αντιτορπιλικών του Βασιλικού Ναυτικού μέχρι να αντικατασταθούν σταδιακά από νέες κατασκευές. 
        Μέχρι τα μέσα της δεκαετίας του 1930, τα περισσότερα είχαν μετατοπιστεί στον εφεδρικό στόλο. 
        Τα περισσότερα πλοία επιβίωσαν για να συμβάλουν εκτενώς στην προσπάθεια του Β' Παγκοσμίου Πολέμου, στον ζωτικό ρόλο της συνοδείας νηοπομπών, απελευθερώνοντας πιο σύγχρονα πλοία για τη δράση του στόλου.
      </p>
      <h4>Σχεδιασμός</h4>
      <p>
        Ο νέος σχεδιασμός, αρχικά γνωστός ως αρχηγός της κλάσης Admiralty V, ενσωμάτωσε όλες αυτές τις βελτιώσεις, καθώς και μια πιο λογική διάταξη του κύριου οπλισμού, 
        με το πυροβόλο στο μέσο του πλοίου μεταξύ των φουγάρων να μεταφέρεται στο πρυμναίο κατάστρωμα καταφυγής, υπερκαλύπτοντας το πυροβόλο στο κατάστρωμα της πρύμνης. 
        Αυτό εισήγαγε την πανταχού παρούσα διάταξη «Α», «Β», «Χ», «Υ» για τον κύριο οπλισμό. 
        Νέες εξελίξεις, όπως ο κατευθυνόμενος πυροβολισμός για τον κύριο οπλισμό, οι τριπλοί τορπιλοσωλήνες και ο βαρύτερος οπλισμός εισήχθησαν είτε από την αρχή είτε όταν έγιναν διαθέσιμες. 
      </p>
      <h4>Χαρακτηριστικά</h4>
      <ul>
        <li><strong>Εκτόπισμα:</strong> 1,120 έως 1,300 τόνοι.</li>
        <li><strong>Μήκος:</strong> Περίπου 91 μέτρα (300 πόδια).</li>
        <li><strong>Πρόωση:</strong> Ατμοστρόβιλοι, με ταχύτητα έως 34 κόμβους.</li>
        <li><strong>Οπλισμός (ΠΠΙ):</strong>
          <ul>
            <li>Τέσσερα πυροβόλα των 4 ιντσών (102 mm).</li>
            <li>Ένα αντιαεροπορικό πυροβόλο των 3 ιντσών (76 mm).</li>
            <li>Τέσσερις τορπιλοσωλήνες των 21 ιντσών (533 mm).</li>
          </ul>
        </li>
        <li><strong>Τροποποιήσεις (ΠΠΙΙ):</strong>
          <ul>
            <li>Ενισχυμένος ανθυποβρυχιακός οπλισμός.</li>
            <li>Προσθήκη συστημάτων ραντάρ.</li>
            <li>Εγκατάσταση βυθοφόρων βομβών.</li>
          </ul>
        </li>
        <li><strong>Ρόλοι:</strong> Αρχικά χρησιμοποιήθηκαν σε επιχειρήσεις στόλου, αργότερα προσαρμόστηκαν για συνοδεία νηοπομπών και ανθυποβρυχιακό πόλεμο.</li>
        <li><strong>Κληρονομιά:</strong> Γνωστά για την ταχύτητα, τη δύναμη πυρός και την προσαρμοστικότητά τους, διαδραμάτισαν κρίσιμο ρόλο και στους δύο παγκόσμιους πολέμους.</li>
      </ul>
      <p>
        Πηγή: <a href="https://en.wikipedia.org/wiki/V_and_W-class_destroyer" target="_blank">Wikipedia</a>
      </p>
    `;
  });


    // Appearance of the Photo Carousel
    vclassPhotoAlbumButton.addEventListener("click", () => {
      if (vclassPhotos.length > 0) {
        vclassPhotoIndex = 0;
        vclassCarouselImage.src = vclassPhotos[vclassPhotoIndex];
        vclassCarousel.style.display = "flex";
        console.log("Το καρουζέλ εμφανίστηκε με την εικόνα:", vclassPhotos[vclassPhotoIndex]);
      } else {
        console.error("Δεν υπάρχουν φωτογραφίες στο άλμπουμ.");
      }
    });
    

    // Disappearance of the Carousel
    vclassCloseCarouselBtn.addEventListener("click", () => {
      vclassCarousel.style.display = "none";
    });

    // Next Photo
    vclassNextPhotoBtn.addEventListener("click", () => {
      vclassPhotoIndex = (vclassPhotoIndex + 1) % vclassPhotos.length;
      vclassCarouselImage.src = vclassPhotos[vclassPhotoIndex];
    });

    // Previous Photo
    vclassPrevPhotoBtn.addEventListener("click", () => {
      vclassPhotoIndex = (vclassPhotoIndex - 1 + vclassPhotos.length) % vclassPhotos.length;
      vclassCarouselImage.src = vclassPhotos[vclassPhotoIndex];
    });
  }
});


// Component Connection with DOM
document.addEventListener("DOMContentLoaded", () => {
  const vclassBoat = document.querySelector("#vclass");
  vclassBoat.setAttribute("vclass-ui", "");
});
