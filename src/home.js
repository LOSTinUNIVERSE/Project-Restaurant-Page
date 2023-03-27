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
        menu.id = 'menu'
        contact.id = 'contact'
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
}