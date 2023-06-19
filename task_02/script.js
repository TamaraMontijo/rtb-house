const insertElement = document.querySelector('.offer')


// get offer
fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json')
  .then(res => res.json())
  .then(data => {
    let offers = data.offers
    offers.forEach((offer, index) => {
      // HTML
      insertElement.insertAdjacentHTML('beforeend', 
      `<div class="slider" id="offer-${index}">
        <img src=${offer.imgURL} alt="">
        <p>${offer.name}</p>
        <strong>${offer.price} ${offer.currency}</strong>
        <button>Check</button>
      </div> `
      )
    })
  })
  .catch(error => console.log(error))

// SLIDE
let slideContainer = document.getElementById("offer");
    let slides = slideContainer.getElementsByClassName("slider");
    let currentIndex = 0;

    function nextOffer() {
      slides[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].style.display = "block";
    }
    
    function autoAdvance() {
      nextOffer();
      setTimeout(autoAdvance, 5000);
    }

    autoAdvance();





