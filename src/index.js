import { home } from "./home";
import './style.css'
import { menu } from "./menu";
import { contact } from "./contack";
home()
menu()
contact()

const myModule = () => {
    const menuBtn = document.getElementById("menu")
    const homeBtn = document.getElementById("home")
    const contactBtn = document.getElementById("contact")
    const homeBoxes = document.getElementsByClassName("boxes")
    const menuBoxes = document.getElementsByClassName("menuBox")
    const contactBoxes = document.getElementsByClassName("contactBoxes")
    let cleanItem = homeBoxes



    function showMenuBoxes() {
        for (const item of cleanItem) {
            item.style.display = "grid"
        }
    }
    const cleaner = function () {
        function remove(group) {
            for (const item of group) {
                item.style.display = "none"
            }
        }
        if (this.id == "home") {
            remove(menuBoxes)
            remove(contactBoxes)
            cleanItem = homeBoxes
        }
        else if (this.id == "menu") {
            remove(homeBoxes)
            remove(contactBoxes)
            cleanItem = menuBoxes
        }
        else if (this.id == "contact") {
            remove(homeBoxes)
            remove(menuBoxes)
            cleanItem = contactBoxes
        }
        showMenuBoxes()
    }
    menuBtn.addEventListener("click", cleaner)
    homeBtn.addEventListener("click", cleaner)
    contactBtn.addEventListener("click", cleaner)

}
myModule()


