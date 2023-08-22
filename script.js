// Geting Elements

let ekle = document.querySelector(".sketch")
let pixelValue = document.getElementById("pixel")
let pixelSpan = document.getElementById("pixelX")
let colorChoice = document.getElementById("color")
let colorButton = document.getElementById("colorBtn")
let rainbowButton = document.getElementById("rainbowBtn")
let eraseButton = document.getElementById("eraseBtn")
let bgColor = colorChoice.value
let rgbColor 

// Functions

function pixelTable(color) {
    let isOkay = false

    ekle.innerHTML = ""
    pixelSpan.textContent = `${pixel.value}x${pixel.value}`

    for (let i = 1; i <= pixel.value; i++) {

        let div = document.createElement("div")

        div.setAttribute("class", "row")

        for (let j = 1; j <= pixel.value; j++) {

            let div2 = document.createElement("div")

            div2.setAttribute("class", "column")

            div2.addEventListener("mousedown", () => {
                isOkay = true
                if(rgbColor !== bgColor){
                    div2.style.backgroundColor = bgColor
                }else{
                    div2.style.backgroundColor = rgb()
                }
            })

            div2.addEventListener("mousemove", () => {
                if (isOkay) {
                    
                    if(rgbColor !== bgColor){
                        div2.style.backgroundColor = bgColor
                    }else{
                        div2.style.backgroundColor = rgb()
                    }
                }
            })

            div2.addEventListener("mouseup", () => {
                isOkay = false
            })

            div.appendChild(div2)
        }

        ekle.appendChild(div)
    }
}

function colorChange() {
    bgColor = colorChoice.value

    colorChoice.addEventListener("change", () => {
        bgColor = colorChoice.value
    })
}

function rgb() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
}

function erase(){
    bgColor= "white"
}

// For Beginning

pixelTable()

// Eent Listener

pixelValue.addEventListener("change", pixelTable)

colorButton.addEventListener("click", colorChange)

rainbowButton.addEventListener("click", () => {
    rgbColor = rgb()
    bgColor = rgbColor
})

eraseButton.addEventListener("click", erase)





