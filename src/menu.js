export const menu = () => {
    const innerBlock = document.getElementById('innerBlock')
    const insideBlock = (() => {
        for (let i = 1; i < 7; i++) {
            const menuBlock = document.createElement('div')
            innerBlock.appendChild(menuBlock)
            menuBlock.id = `menuBlock${i}`
            menuBlock.classList.add('menuBox')
            menuBlock.style.display = "none"
        }
    })()
    const textStyle = () => {
        const menuBlock1 = document.getElementById("menuBlock1")
        const menuBlock2 = document.getElementById("menuBlock2")
        const menuBlock3 = document.getElementById("menuBlock3")
        const menuBlock4 = document.getElementById("menuBlock4")
        const menuBlock5 = document.getElementById("menuBlock5")
        const menuBlock6 = document.getElementById("menuBlock6")

        const hBlock1 = document.createElement("h1")
        menuBlock1.appendChild(hBlock1)
        hBlock1.textContent = "Lorem ipsum dolor sit amet"


        const p1Block2 = document.createElement("p")
        p1Block2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        const p2Block2 = document.createElement("h3")
        p2Block2.textContent = "Lorem ipsum dolor sit amet, "
        menuBlock2.appendChild(p1Block2)
        menuBlock2.appendChild(p2Block2)
        // 
        const p1Block3 = document.createElement("h1")
        p1Block3.textContent = "Lorem ipsum dolor sit amet,"
        const p2Block3 = document.createElement("p")
        p2Block3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        menuBlock3.appendChild(p1Block3)
        menuBlock3.appendChild(p2Block3)
        // 
        const p1Block4 = document.createElement("h1")
        p1Block4.textContent = "Lorem ipsum dolor "
        const p2Block4 = document.createElement("p")
        p2Block4.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        menuBlock4.appendChild(p1Block4)
        menuBlock4.appendChild(p2Block4)
        // 
        const p1Block5 = document.createElement("h1")
        p1Block5.textContent = "Lorem ipsum dolor "
        const p2Block5 = document.createElement("p")
        p2Block5.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        menuBlock5.appendChild(p1Block5)
        menuBlock5.appendChild(p2Block5)

        const p1Block6 = document.createElement("h1")
        p1Block6.textContent = "Lorem ipsum dolor "
        const p2Block6 = document.createElement("p")
        p2Block6.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        menuBlock6.appendChild(p1Block6)
        menuBlock6.appendChild(p2Block6)

    }
    textStyle()
}