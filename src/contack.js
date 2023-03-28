
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
    const contactTextStyle = () => {
        const contactBlock1 = document.getElementById("contactBlock1")
        const contactBlock2 = document.getElementById("contactBlock2")
        const contactBlock3 = document.getElementById("contactBlock3")
        const contactBlock4 = document.getElementById("contactBlock4")

        const hBlock1 = document.createElement("h1")
        contactBlock1.appendChild(hBlock1)
        hBlock1.textContent = "Lorem ipsum dolor sit amet"


        const p1Block2 = document.createElement("p")
        p1Block2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        const p2Block2 = document.createElement("h3")
        p2Block2.textContent = "Lorem ipsum dolor sit amet, "
        contactBlock2.appendChild(p1Block2)
        contactBlock2.appendChild(p2Block2)
        // 
        const p1Block3 = document.createElement("h1")
        p1Block3.textContent = "Lorem ipsum dolor sit amet,"
        const p2Block3 = document.createElement("p")
        p2Block3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        contactBlock3.appendChild(p1Block3)
        contactBlock3.appendChild(p2Block3)
        // 
        const p1Block4 = document.createElement("h1")
        p1Block4.textContent = "Lorem ipsum dolor "
        const p2Block4 = document.createElement("p")
        p2Block4.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        contactBlock4.appendChild(p1Block4)
        contactBlock4.appendChild(p2Block4)

    }
    contactTextStyle()
}
