// var arr = [
//     { dp: 'https://images.unsplash.com/photo-1657033259001-46d081b66e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' , image: 'https://images.unsplash.com/photo-1656982181984-55eb09be7485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'},
//     { dp: 'https://images.unsplash.com/photo-1657033259001-46d081b66e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' , image: 'https://images.unsplash.com/photo-1656982181984-55eb09be7485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'},
//     { dp: 'https://images.unsplash.com/photo-1657033259001-46d081b66e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' , image: 'https://images.unsplash.com/photo-1656982181984-55eb09be7485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'},
//     { dp: 'https://images.unsplash.com/photo-1657033259001-46d081b66e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' , image: 'https://images.unsplash.com/photo-1656982181984-55eb09be7485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'}
// ]
// var clutter = " ";
// arr.forEach(function(elem,idx){
//    clutter += ` <div class="story">
//    <div id="0" class="overlay"></div>
//    <img id="${idx}" src="${elem.dp}" alt="">
//   </div>`
// })

// document.querySelector("#stories").innerHTML = clutter;
// var grow = 0;

// document.querySelector("#stories").addEventListener("click",function(dets){
//         // console.log(arr[dets.target.id])
//         document.querySelector("fullpreview").style.display = "initial";
//         document.querySelector("fullpreview").style.backgroundImage = `url(${arr[dets.target.id].image})`;

//         setTimeout(function(){
//             document.querySelector("fullpreview").style.display = "initial";
//         },2500)
//         if(grow <= 100){
//         setInterval(function(){
//             document.querySelector("#growth").style.width = `${grow++}%`
//         },25)
//     }else{
//         grow = 0;
//     }
// }
