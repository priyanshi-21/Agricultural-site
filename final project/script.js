function gsapInitFirstPage(){
    var tl = gsap.timeline;
tl 
//     .to("#nleft",{
//             stagger: .1,
//             filter: "blur(2px)",
//             scale: 1.5,
//             duration: 2,
//             color: "red",
//             opacity: 0,
//             ease: Expo
// })
.to(".hbtmpartelm", {
                duration: 2,
                opacity: 0,
                x: 10,
                stagger: .2,
                ease: Expo
            }, "-=2")
}

    
