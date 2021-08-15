
// export function users(){
//    let user = {
//       x: 20,
//       y: 30,
//       w: 50,
//       h: 20,
//       steps: 50
//    }
   
//    let continuousLeft = false;
//    let continuousRight = false;
//    let continuousDown = false;
//    let continuousUp = false;
   
//    document.addEventListener("keydown", keyDowns);
//    document.addEventListener("keyup", keyUps);
   
   
//    function keyDowns(){
//       if (event.code ==='ArrowLeft'){
//          continuousLeft = true      
//          console.log(event.code)
//       } else if (event.code ==='ArrowRight'){
//          continuousRight = true
//          console.log(event.code)
//       }
//       if (event.code ==='ArrowDown'){
//          continuousDown = true      
//          console.log(event.code)
//       } else if (event.code ==='ArrowUp'){
//          continuousUp = true
//          console.log(event.code)
//       }
//    }
   
//    function keyUps(){
//       if (event.code ==='ArrowLeft'){
//          continuousLeft = false
//          console.log(event.code)
//       } else if (event.code ==='ArrowRight'){
//          continuousRight = false
//          console.log(event.code)
//       }
//       if (event.code ==='ArrowDown'){
//          continuousDown = false
//          console.log(event.code)
//       } else if (event.code ==='ArrowUp'){
//          continuousUp = false  
//          console.log(event.code)
//       }
//    }
   
//    function moveUser(){
//       if (continuousLeft === true && user.x - user.steps > 0){
//          user.x -= user.steps;
//       }
//       if (continuousRight === true && user.x + user.steps < window.innerWidth){
//          user.x += user.steps;
//       }
//       if (continuousDown === true && user.y + user.steps < window.innerHeight){
//          user.y += user.steps;
//       }
//       if (continuousUp === true && user.y - user.steps > 0){
//          user.y -= user.steps;
//       }
//    }
// }
