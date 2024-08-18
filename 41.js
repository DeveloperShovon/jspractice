var photos = ["image/1.jpg","image/2.jpg","image/3.jpg"];
var imgTag = document.querySelector("img")
count = 0
function next(){
    count ++
    if (count >= photos.length){
        count = 0
        imgTag.src = photos[count]

    }
    else{
        imgTag.src = photos[count];
    }
}

function perv() {
    count -- 
    if (count < 0) {
        count = photos.length - 1
        imgTag.src = photos[count]
    }
    else{
        imgTag.src = photos [count]

    }
}








var tap = document.querySelector("#tap");

function on() {
    tap.classList.add("custom")
}
function off() {
    tap.classList.remove("custom")
}