let ekle = document.querySelector(".sketch")
let pixel = document.getElementById("pixel")
let pixelX = document.getElementById("pixelX")

// Functions

function pixelTable(){
    let isOkay = false
    
    ekle.innerHTML = ""
    pixelX.textContent = `${pixel.value}x${pixel.value}`

    for (let i = 1; i <= pixel.value; i++) {

        let div = document.createElement("div")

        div.setAttribute("class", "row")

        for (let j = 1; j <= pixel.value; j++) {

            let div2 = document.createElement("div")

            div2.setAttribute("class", "column")

            div2.addEventListener("mousedown", () => {
                isOkay = true
                div2.style.backgroundColor = "red"
            })

            div2.addEventListener("mousemove", () => {
                if (isOkay) {
                    div2.style.backgroundColor = "red"
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

// For Beginning

pixelTable()

// Eent Listener
pixel.addEventListener("change", pixelTable)






