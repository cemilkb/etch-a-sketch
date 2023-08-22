// Geting Elements

let ekle = document.querySelector(".sketch")
let pixelValue = document.getElementById("pixel")
let pixelSpan = document.getElementById("pixelX")
let colorChoice = document.getElementById("color")
let colorButton = document.getElementById("colorBtn")
let bgColor = colorChoice.value

// Functions

function pixelTable() {
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
                div2.style.backgroundColor = bgColor
            })

            div2.addEventListener("mousemove", () => {
                if (isOkay) {
                    div2.style.backgroundColor = bgColor
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

// For Beginning

pixelTable()

// Eent Listener

pixelValue.addEventListener("change", pixelTable)

colorButton.addEventListener("click", colorChange)






