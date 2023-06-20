// function gsapInitFirstPage() {

//     var tl = gsap.timeline();

//     tl
//         .from("#text h1 span", {
//             stagger: .1,
//             filter: "blur(2px)",
//             scale: 1.5,
//             duration: 2,
//             color: "red",
//             opacity: 0,
//             ease: Expo
//         })
//         .from(".navpart a", {
//             stagger: .1,
//             duration: 2,
//             y: 20,
//             opacity: 0,
//             ease: Expo
//         }, "-=2")
//         .from("#ncenter h2", {
//             duration: 2,
//             y: 20,
//             opacity: 0,
//             ease: Expo
//         }, "-=2")
//         .from("#circleline", {
//             duration: 2,
//             scale: 1.5,
//             filter: "blur(1px)",
//             ease: Expo
//         }, "-=2")
//         .from(".hbtmpartelm", {
//             duration: 2,
//             opacity: 0,
//             y: 10,
//             stagger: .2,
//             ease: Expo
//         }, "-=2")
//         .from("#rightsmcircle", {
//             duration: 1,
//             rotate: "270deg",
//             opacity: 0,
//             ease: Expo
//         }, "-=2")



// }

// function gsapSecondPage() {
//     var tl2 = gsap.timeline({
//         scrollTrigger: {
//             markers: true,
//             trigger: "#second",
//             start: "top 50%",
//             scrub: 4
//         }
//     });

//     tl2
//         .from("#photoseries", {
//             x: "100%",
//             ease: Circ
//         }, "maakda")
//         .to("#second h1", {
//             x: "-100%",
//             ease: Circ,
//             duration: 5
//         }, "maakda")
// }

// function thirdPage() {
//     document.querySelector("#third")
//         .addEventListener("click", function (dets) {
//             if (isNaN(Number(dets.target.id))) {
                
//                 var elem = ".strcnt"+dets.target.id.split("-")[0];

//                 gsap.to(elem, {
//                     opacity: 0,
//                     ease: Expo.easeInOut,
//                     duration: 1.5,
//                 })

//                 gsap.to(".cors", {
//                     opacity: 0
//                 })

//                 gsap.to(dets.target.offsetParent, {
//                     width: 4+"%",
//                     ease: Expo.easeInOut,
//                     duration: 1.5,
//                     delay: .5
//                 })
//             }
//             else {
//                 var dec = 100 - (4 - dets.target.id) * 4;
//                 var elem = document.querySelector(".strcnt" + dets.target.id);

//                 console.log(elem);

//                 gsap.to(dets.target, {
//                     width: dec + "%",
//                     ease: Expo.easeInOut,
//                     duration: 1.5
//                 })

//                 gsap.to(".cors", {
//                     opacity: 1
//                 })

//                 gsap.to(elem, {
//                     opacity: 1,
//                     ease: Expo.easeInOut,
//                     duration: 1.5,
//                     delay: 1
//                 })
//             }

//             console.log("slide clicked !");

//         })
// }

// function fourthPage(){
//     document.querySelectorAll(".elem")
//     .forEach(function(elem){
//         elem.addEventListener("mousemove", function(dets){
//             dets.target.children[1].style.opacity = 1;
//             dets.target.children[1].style.transform = `translate(-50%, -50%) translate(${dets.screenX*.5}px, -${dets.screenY*.02}px) rotate(${dets.screenX*.05}deg)`;
//         });

//         elem.addEventListener("mouseleave", function(dets){
//             dets.target.children[1].style.opacity = 0;
//         });

//     })
// }

// function convertMainScreenTextToChars() {
//     document.querySelectorAll("#text h1")
//         .forEach(function (h1) {

//             var clutter = "";
//             h1.textContent.split("")
//                 .forEach(function (charc) {
//                     clutter += `<span>${charc}</span>`;
//                 })
//             h1.innerHTML = clutter;
//         })
// }

// convertMainScreenTextToChars();
// gsapInitFirstPage();
// gsapSecondPage();
// thirdPage();
// fourthPage();