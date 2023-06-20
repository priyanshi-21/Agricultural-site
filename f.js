// var arr = [
//     {image:'https://images.ctfassets.net/ooa29xqb8tix/3vblSsaeKMBynRZ0LI1iLP/2a8779562a2924b30b9dca640c389517/DarkInterfaces_01.png' , backgroundColour:'rgb(17, 18, 65)' , color:'blue'},
//     {image:'https://cdn.dribbble.com/users/610636/screenshots/15755294/media/3effd6d8595d54665385706730fd3b41.png?compress=1&resize=400x300&vertical=top', backgroundColour:'rgb(113, 185, 111)' , color:'rgb(96, 226, 137)'},
//     {image:'https://cdn.dribbble.com/users/1615730/screenshots/9338617/media/51112759db8509332c3bac5e490bb1a3.png?compress=1&resize=400x300' , backgroundColour:'rgb(26, 26, 26)' , color:'rgb(14, 11, 11)'},
//     {image:'https://i.pinimg.com/736x/d4/08/0f/d4080fbda215d58b4fcbba0b8c09449d.jpg' , backgroundColour:'rgb(244, 112, 112)',color:'rgb(206, 83, 83)'},
//     {image:'https://i.pinimg.com/originals/6d/8d/ff/6d8dffaf36041d54f21604daac97ab51.png' , backgroundColour:'rgb(241, 250, 73)',color:'rgb(246, 224, 33)'}
// ]
// var clutter = " ";
// arr.forEach(function(elem,){
//    clutter += `<div id="bg">
//    <div id="image">
//        <img src= "${elem.image}" alt="">
//    </div>
//    <div id="leftnum">
//        <h1>08</h1>
//    </div>
//    <div id="rightnum">
//        <h1>22</h1>
//    </div>
//    <div id="text">
//        <h3>DESIGN</h3>
//        <h3>VISUAL</h3>
//    </div>
//    <div id="text2">
//        <h3>DRY</h3>
//    </div>`
// })
// document.querySelector("#bg").innerHTML = clutter;
// document.querySelector("#bg").addEventListener("click",function(dets){
//     console.log(arr.dets.target)
// })

var tl = gsap.timeline();
tl
.from("#image",{ 
    opacity:0,
    y:40,
    scale:1.5
})
.from("#leftnum",{
    opacity:0,
    x:50,
    duration:2
})
.from("#rightnum",{
    opacity:0,
    x:20,
    // duration:1
})
.from("#text",{
    opacity:0,
    x:20,
    // duration:2
})
.from("#text2   ",{
    opacity:0,
    x:20,
    // duration:2
})