//all querySelectors
const numberContainer = document.querySelector("#numberContainer")
const display = document.querySelector("#display")

for (let i = 9; i > 0; i--) {
    let btn = document.createElement("btn")
    btn.setAttribute("id", `div${i}`)
    btn.textContent = i
    numberContainer.appendChild(btn)
}

numberContainer.addEventListener("click", (event) => {
    source = event.target
    display.textContent = source.textContent
})