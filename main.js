 let tl=gsap.timeline(({
  scrollTrigger:{
    trigger:"section",
    start:"center center",
    end:"bottom top",
    scrub:true,
    markers:true,
    pin:true,
  }
})
   )
tl.to(".text", {scale:0})
.from(".box1",{x:innerWidth*-1})
.from(".box2",{x:innerWidth*-1})
.from(".box3",{x:innerWidth*-1})
.from(".box4",{x:innerWidth*-1})
.from(".box5",{opacity:0});