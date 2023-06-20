const insertElement = document.querySelector('.offers')

// GET 4 OFFERS
fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json')
  .then(res => res.json())
  .then(data => {
    let offers = data.offers
    offers.slice(0, 4).forEach((offer, index) => {
      // HTML
      insertElement.insertAdjacentHTML('beforeend', 
      `<div class="offer ${index}">
        <img src=${offer.imgURL} alt="">
        <strong>${offer.price} ${offer.currency}</strong>
      </div>`
      )
    })

    // SLIDE
    autoAdvance();
  })
  .catch(error => console.log(error))