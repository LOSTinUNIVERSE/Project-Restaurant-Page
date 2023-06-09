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

    function boxAmountSwitcher(amount, size) {
        const innerBlock = document.getElementById("innerBlock")
        const main = document.getElementById("main")
        innerBlock.style.gridTemplateRows = `${amount}`
        main.style.backgroundSize = `${size}`
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
            boxAmountSwitcher("repeat(4, 1fr)", "170vh")
        }
        else if (this.id == "menu") {
            remove(homeBoxes)
            remove(contactBoxes)
            cleanItem = menuBoxes
            boxAmountSwitcher("repeat(6, 1fr)", "250vh")
        }
        else if (this.id == "contact") {
            remove(homeBoxes)
            remove(menuBoxes)
            cleanItem = contactBoxes
            boxAmountSwitcher("repeat(4, 1fr)", "170vh")
        }
        showMenuBoxes()
    }
    menuBtn.addEventListener("click", cleaner)
    homeBtn.addEventListener("click", cleaner)
    contactBtn.addEventListener("click", cleaner)

}
myModule()


