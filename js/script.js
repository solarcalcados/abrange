let i = 1;
let mobileMenu = 0;

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let a1 = document.querySelector(".left");
let a2 = document.querySelector(".right");
let info = document.getElementById("info");
let navMob = document.querySelector(".nav-list-mobile");;

var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

console.log(navMob);


box2.style.opacity = 0;
box3.style.opacity = 0;

function mobMenuPlay()  {
    navMob.classList.toggle("active")
    console.log("navMob");
}


function right() {
    
    if (i == 0) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        i++
    }
    else if (i == 2) {  
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        i = 0;
    }
    console.log("depois");
    console.log(i);
}

function left() {
    
    console.log("agora:");
    console.log(i);
    if (i == 0) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        i = 2
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        i = 0
    }
    else if (i == 2) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        i = 1;
    }
    console.log("depois");
    console.log(i);
}
