//all querySelectors
const numberContainer = document.querySelector("#numberContainer")

for (let i = 9; i > 0; i--) {
    let div = document.createElement("div")
    div.setAttribute("id", `div${i}`)
    div.textContent = i
    numberContainer.appendChild(div)
}