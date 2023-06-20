var tl = gsap.timeline();
tl
   .from("#inner",{
    opacity :0,
    y:40,
    // duration:4
   })
   .from("#nav",{
    opacity:0,
    // duration:1
   })
   .from("#b",{
    opacity:0,
    scale:2
   })