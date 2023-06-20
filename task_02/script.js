const insertElement = document.querySelector('.offer')


// get offer
fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json')
  .then(res => res.json())
  .then(data => {
    let offers = data.offers
    offers.slice(-3).forEach((offer, index) => {
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

    // SLIDE
    autoAdvance();
  })
  .catch(error => console.log(error))

// SLIDE
let slideContainer = document.getElementById("offer");
let slides = slideContainer.getElementsByClassName("slider");
let currentIndex = 0;

function nextOffer() {
  let currentOffer = slides[currentIndex];
  let previousOffer = slides[(currentIndex - 1 + slides.length) % slides.length];

  for (let i = 0; i < slides.length; i++) {
    if (i === currentIndex) {
      slides[i].style.display = "flex";
    } else {
      slides[i].style.display = "none";
    }
  }

  currentIndex = (currentIndex + 1) % slides.length;
}

function autoAdvance() {
  nextOffer();
  setTimeout(autoAdvance, 5000);
}

    





