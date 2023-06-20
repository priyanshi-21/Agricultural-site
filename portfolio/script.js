var t1 = gsap.timeline();
t1
  .to("#fs" , {
    height: 0,
    duration: 2,
    ease: Expo.easInOut
  })
  .to("#elem" , {
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easInOut
  })
  .to("#white" , {
    height: "100%",
    duration: 2,
    delay: -1.6,
    ease: Expo.easInOut
  })


  