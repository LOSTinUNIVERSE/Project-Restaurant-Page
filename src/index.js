import { home } from "./home";
import './style.css'
// import { menu } from "./menu";

home()

const boxes = document.querySelectorAll('.boxes')
let number = 1
const disappear = function () {
    console.log(boxes);
    for (const item of boxes) {
        item.style.display = "none"
        console.log(item);
    }
}
const appear = function () {
    console.log(boxes);
    for (const item of boxes) {
        item.style.display = "grid"
        console.log(item);
    }
}

function shower() {
    const innerBlock = document.querySelector('#innerBlock')
    console.log(innerBlock);
    if (number == 1) {
        disappear()
        number = 0

    }
    else if (number == 0) {
        appear()
        number = 1
    }
}

function switcher() {
    const home = document.querySelector("#home")
    home.addEventListener("click", shower)
}
switcher()



