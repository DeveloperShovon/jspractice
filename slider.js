
// var photos = ["image/1.jpg" ,"image/2.jpg" ,"image/3.jpg"]
// var img = document.querySelector("img");

// count = 0
// function next(){
//     count++;
//     if(count >= photos.length){
//         count = 0
//         img.src= photos[count];

//     }
//     else{
//         img.src= photos[count];
//     }

// }
// count = 0
// function previous(){
//     count--
//     if(count < 0){
//         count = photos.length -1
//         img.src = photos [count];
//     }else{
//         img.src = photos [count];
//     }
// }

























var allImg = [ "image/1.jpg", "image/2.jpg" ,"image/3.jpg"];
var img = document.querySelector("img");

 var count = 0


function rightButton(){
    count++
    if (count >= allImg.length){
        count = 0
        img.src = allImg[count] 
    }
    else {
        img.src = allImg[count] 
    }

}

function leftButton(){
    count--
    if (count < 0){
        count = allImg.length -1;
        img.src = allImg[count]
    }
    else{
        img.src = allImg[count]
    }
}

