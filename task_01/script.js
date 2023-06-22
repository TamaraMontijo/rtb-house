const insertElement = document.querySelector('.offers')

// GET 4 OFFERS
fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json')
  .then(res => res.json())
  .then(data => {
    let offers = data.offers
    offers.slice(0, 4).forEach((offer, index) => {
      // HTML
      insertElement.insertAdjacentHTML('beforeend', 
      `<div class="offer ${index}" onmouseover="frame(this)" onmouseout="unframe(this)">
        <img src=${offer.imgURL} alt="">
        <strong>${offer.price} ${offer.currency}</strong>
      </div>`
      )
    })

    // SLIDE
    redFrameAdvance()    
  })
  .catch(error => console.log(error))


let offers = document.getElementById("offers")
let offersArray = offers.getElementsByClassName("offer")
let currentIndex = 0;

//FRAME ANIMATION
function redFrame() {
  for (let i = 0; i < offersArray.length; i++) {
    if (i === currentIndex) {
      offersArray[i].style.border = "3px solid #ED4136";
    } else {
      offersArray[i].style.border = "1px solid gray";
    }
  }

  currentIndex = (currentIndex + 1) % offersArray.length;
}

let animationPaused = false;
let timerId = null;

const banner = document.querySelector('.banner');

banner.addEventListener('mouseover', () => {
  animationPaused = true;
  clearTimeout(timerId);
});

banner.addEventListener('mouseout', () => {
  animationPaused = false;
  timerId = setTimeout(redFrameAdvance, 2000);
});

function redFrameAdvance(){
  if (!animationPaused) {
    redFrame();
    timerId = setTimeout(redFrameAdvance, 2000);
  }
}

// HOVERING AN OFFER
function frame(div) {
  animationPaused = true;
  for (let element of offersArray) {
    element.style.border = "1px solid gray";
  }
  div.style.border = "3px solid #ED4136";
}

function unframe(div) {
  div.style.border = "1px solid gray";
  currentIndex = parseInt(div.className[div.className.length - 1])
  animationPaused = false;
}




