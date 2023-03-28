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

    function boxAmountSwitcher(amount) {
        const innerBlock = document.getElementById("innerBlock")
        innerBlock.style.gridTemplateRows = `${amount}`
    }

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
            boxAmountSwitcher("repeat(4, 1fr)")
        }
        else if (this.id == "menu") {
            remove(homeBoxes)
            remove(contactBoxes)
            cleanItem = menuBoxes
            boxAmountSwitcher("repeat(8, 1fr)")
        }
        else if (this.id == "contact") {
            remove(homeBoxes)
            remove(menuBoxes)
            cleanItem = contactBoxes
            boxAmountSwitcher("repeat(6, 1fr)")
        }
        showMenuBoxes()
    }
    menuBtn.addEventListener("click", cleaner)
    homeBtn.addEventListener("click", cleaner)
    contactBtn.addEventListener("click", cleaner)

}
myModule()


