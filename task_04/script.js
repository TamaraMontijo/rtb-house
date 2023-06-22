const timeline = gsap.timeline({ defaults: {duration: 0.5}})

timeline
  .from('.yellow-background', { y: '100%'})
  .from('.logo', { x: '-50%'})
  .to('.logo', { y: '-715%'})
  .add(
    timeline.to('.yellow-background', { y: '-100%' }),
    gsap.to('.white-background', { y: '-100%' })
  )
  .to('.warsaw', {scale: 1.2, duration: 3})
  