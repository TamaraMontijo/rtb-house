const timeline = gsap.timeline({ defaults: {duration: 0.5}})

timeline
  .from('.yellow-background', { y: '100%'})
  .from('.logo', { x: '-150%'})
  .to('.logo', { y: '-715%'})
  .add(
    timeline.to('.yellow-background', { y: '-100%' }),
    gsap.to('.white-background', { y: '-100%' })
  )

  // WARSAW

  .to('.warsaw', {scale: 1.2, duration: 3, delay: 0})

  .to('.country', { opacity: 1, delay: 0.5 }, "-=3")
  .from('#country-p', { opacity: 0, y: '100%', delay: 0.5 }, "-=2.9")
  
  .to('.city', { opacity: 1, delay: 1 }, "-=2.5")
  .from('#city-p', { opacity: 0, y: '100%', delay: 1 }, "-=2.4")

  .to('.book-now', { opacity: 1 }, "-=2.5")
  .from('.book-now', { x: '150%', delay: 1}, "-=2.5")
  .to('.price', { opacity: 1, delay: 1 }, "-=2.5")
  .from('.price', { y: '150%', delay: 1}, "-=2.5")

  // CLEAR INFOS
  .set('.country', { clearProps: 'all' })
  .set('.city', { clearProps: 'all' })
  .set('.book-now', { clearProps: 'all' })
  .set('.price', { clearProps: 'all' })
    
    
    
  // MADRID
  .to('.madrid', { opacity: 1 })
  .from('.madrid', { x: '100%' })

  // CHANGE TEXTS

  .to('#country-p', { textContent: "Spain" })
  .to('#city-p', { textContent: "Madrid" })
  .to('#price-strong', { textContent: "295 USD" })

  .to('.madrid', {scale: 1.2, duration: 3, delay: 0})

  .to('.country', { opacity: 1, delay: 0.5 }, "-=3")
  .from('#country-p', { opacity: 0, y: '-100%', delay: 0}, "-=2.9")
  .to('#country-p', { opacity: 1, y: '0%', delay: 0.5 }, "-=2.5")

  .to('.city', { opacity: 1, delay: 0.5 }, "-=2.5")
  .from('#city-p', { opacity: 0, y: '-100%', delay: 0 }, "-=2.3")
  .to('#city-p', { opacity: 1, y: '0%', delay: 0.5 }, "-=2.3")

  .from('.book-now', {opacity: 0, x: '150%', delay: 1}, "-=2.5")
  .to('.book-now', {opacity: 1, x: '0%', delay: 1}, "-=2.3")
  
  .from('.price', { opacity: 0, y: '150%', delay: 1}, "-=2.2")
  .to('.price', { opacity: 1, y: '0%', delay: 1 }, "-=2.2")

  // CLEAR INFOS
  .set('.country', { clearProps: 'all' })
  .set('.city', { clearProps: 'all' })
  .set('.book-now', { clearProps: 'all' })
  .set('.price', { clearProps: 'all' })

  // BERLIN
  .to('.berlin', { opacity: 1 })
  .from('.berlin', { x: '100%' })

  // CHANGE TEXTS

  .to('#country-p', { textContent: "Germany" })
  .to('#city-p', { textContent: "Berlin" })
  .to('#price-strong', { textContent: "350 USD" })

  .to('.berlin', {scale: 1.2, duration: 3, delay: 0})

  // INFOS

  .to('.country', { opacity: 1, marginRight: '172px', delay: 0.5 }, "-=3")
  .from('#country-p', { opacity: 0, y: '100%', delay: 0}, "-=2.9")
  .to('#country-p', { opacity: 1, y: '0%', delay: 0.5 }, "-=2.5")

  .to('.city', { opacity: 1, delay: 0.5 }, "-=2.5")
  .from('#city-p', { opacity: 0, y: '100%', delay: 0 }, "-=2.5")
  .to('#city-p', { opacity: 1, y: '0%', delay: 0.5 }, "-=2.5")

  .from('.book-now', {opacity: 0, x: '150%', delay: 1}, "-=2.5")
  .to('.book-now', {opacity: 1, x: '0%', delay: 1}, "-=2.3")
  
  .from('.price', { opacity: 0, y: '150%', delay: 1}, "-=2.2")
  .to('.price', { opacity: 1, y: '0%', delay: 1 }, "-=2.2")
  

  
  