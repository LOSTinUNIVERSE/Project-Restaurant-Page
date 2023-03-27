export const contact = () => {
    const innerBlock = document.getElementById('innerBlock')
    const insideBlock = (() => {
        for (let i = 1; i < 5; i++) {
            const contactBlock = document.createElement('div')
            innerBlock.appendChild(contactBlock)
            contactBlock.id = `contactBlock${i}`
            contactBlock.classList.add('contactBoxes')
            contactBlock.style.display = "none"
        }
    })()
}