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
        main.id = "main"

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

        const hBlock1 = document.createElement("h1")
        block1.appendChild(hBlock1)
        hBlock1.textContent = "Lorem ipsum dolor sit amet"

        const p1Block2 = document.createElement("p")
        p1Block2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        const p2Block2 = document.createElement("h3")
        p2Block2.textContent = "Lorem ipsum dolor sit amet, "
        block2.appendChild(p1Block2)
        block2.appendChild(p2Block2)

        const p1Block3 = document.createElement("h1")
        p1Block3.textContent = "Lorem ipsum dolor sit amet,"
        const p2Block3 = document.createElement("p")
        p2Block3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        block3.appendChild(p1Block3)
        block3.appendChild(p2Block3)

        const p1Block4 = document.createElement("h1")
        p1Block4.textContent = "Lorem ipsum dolor "
        const p2Block4 = document.createElement("p")
        p2Block4.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        block4.appendChild(p1Block4)
        block4.appendChild(p2Block4)
    }
    textStyle()
}