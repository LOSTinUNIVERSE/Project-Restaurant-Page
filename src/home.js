// import './style.css';
export const home = () => {
    const content = document.getElementById("content")
    const header = document.createElement('header')
    const main = document.createElement('main')
    const footer = document.createElement('footer')
    const innerBlock = document.createElement('div')
    const appending = (() => {
        innerBlock.id = 'innerBlock'
        content.appendChild(header)
        content.appendChild(main)
        content.appendChild(footer)
        main.appendChild(innerBlock)
    })()
    const headerBoxes = (() => {
        const home = document.createElement('button')
        const menu = document.createElement('button')
        const contact = document.createElement('button')

        header.appendChild(home)
        header.appendChild(menu)
        header.appendChild(contact)

        home.id = 'home'
        home.textContent = "home"
        menu.id = 'menu'
        menu.textContent = "menu"
        contact.id = 'contact'
        contact.textContent = "contact"

    })()
    const insideBlock = function () {
        for (let i = 1; i < 5; i++) {
            const block = document.createElement('div')
            innerBlock.appendChild(block)
            block.id = `block${i}`
            block.classList = "boxes"
        }
    }
    insideBlock()
    const textStyle = () => {
        const block1 = document.getElementById("block1")
        const block2 = document.getElementById("block2")
        const block3 = document.getElementById("block3")
        const block4 = document.getElementById("block4")

        const pBlock1 = document.createElement("h1")


        const p1Block2 = document.createElement("p")
        const p2Block2 = document.createElement("h3")

        const p1Block3 = document.createElement("h1")
        const p2Block3 = document.createElement("p")

        const p1Block4 = document.createElement("h1")
        const p2Block4 = document.createElement("p")

    }
}