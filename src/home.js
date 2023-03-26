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
    const insideBlock = (() => {
        const block1 = document.createElement('div')
        const block2 = document.createElement('div')
        const block3 = document.createElement('div')
        const block4 = document.createElement('div')

        innerBlock.appendChild(block1)
        innerBlock.appendChild(block2)
        innerBlock.appendChild(block3)
        innerBlock.appendChild(block4)

        block1.id = 'block1'
        block2.id = 'block2'
        block3.id = 'block3'
        block4.id = 'block4'
    })()
}