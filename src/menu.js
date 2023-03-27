export const menu = () => {
    const innerBlock = document.getElementById('innerBlock')
    const insideBlock = (() => {
        for (let i = 1; i < 8; i++) {
            const menuBlock = document.createElement('div')
            innerBlock.appendChild(menuBlock)
            menuBlock.id = `menuBlock${i}`
            menuBlock.classList.add('menuBox')
            menuBlock.style.display = "none"
        }
    })()
}