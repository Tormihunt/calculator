

//all querySelectors
const numberContainer = document.querySelector("#numberContainer")
const display = document.querySelector("#display")
const operatorContainer = document.querySelector("#operatorContainer")
const equalSign = document.querySelector("#equals")
const resetButton = document.querySelector("#resetButton")

let var1 = ""
let operator = null
let var2 = ""

display.textContent = var1



numberContainer.addEventListener("click", (event) => {
    if (operator === null) {
        source = event.target
        var1 += source.textContent
        display.textContent = var1
    }
    else {
        source = event.target
        var2 += source.textContent
        display.textContent = var2
    }
})

operatorContainer.addEventListener("click", (event) => {
    source = event.target
    operator = source.textContent
})

//evaluate and assign answer to var1
equalSign.addEventListener("click", (event) => {
    const addition = parseInt(var1) + parseInt(var2)
    const subtraction = var1 - var2
    const multiplication = var1 * var2
    const division = var1 / var2
    if (operator !== null && var2 !== null) {
        switch (operator) {
            case "+" :
                var1 = addition;
                display.textContent = var1
                break;
            case "-" :
                var1 = subtraction;
                display.textContent = var1
                break;
            case "*" :
                var1 = multiplication;
                display.textContent = var1
                break;
            case "/" :
                var1 = division;
                display.textContent = var1
                break;
        }
        operator = null
        var2 = ""
    }
    console.log("var1: " + var1)
    console.log("operator: " + operator)
    console.log("var2: " + var2)
})

resetButton.addEventListener("click", () => {
    var1 = ""
    operator = null
    var2 = ""
    display.textContent = var1
})