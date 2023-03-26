// import './style.css';
const home = () => {
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
}
home()