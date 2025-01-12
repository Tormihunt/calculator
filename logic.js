
//all querySelectors
const numberContainer = document.querySelector("#numberContainer")
const display = document.querySelector("#display")
const operatorContainer = document.querySelector("#operatorContainer")
const equalSign = document.querySelector("#equals")
const resetButton = document.querySelector("#resetButton")
const leftContainer = document.querySelector("#leftContainer")
const zero = document.querySelector("#zero")
const changeSign = document.querySelector("#changeSign")
const comma = document.querySelector("#comma")

let var1 = null
let isVar1Float = false
let operator = null
let var2 = null
let isVar2Float = false

display.textContent = var1


//clicking concats a number
numberContainer.addEventListener("click", (event) => {
    if (operator === null) {
        var1 = ""
        source = event.target
        var1 += source.textContent
        display.textContent = var1
    }
    else {
        var2 = ""
        source = event.target
        var2 += source.textContent
        display.textContent = var2
    }
})
zero.addEventListener("click", (event) => {
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

changeSign.addEventListener("click", () => {
    if (operator === null) {
        var1 *= -1
        display.textContent = var1
    }
    else {
        var2 *= -1
        display.textContent = var2
    }
})

comma.addEventListener("click", () => {
    if (operator === null) {
        //toggles
        isVar1Float = !isVar1Float
        var1 += "."
        display.textContent = var1
    }
    else {
        isVar2Float = !isVar2Float
        var2 += "."
        display.textContent = var2
    }
})

operatorContainer.addEventListener("click", (event) => {
    source = event.target
    operator = source.textContent
})

//evaluate and assign answer to var1
equalSign.addEventListener("click", (event) => {
    if (isVar1Float) {
        var1 = parseFloat(var1)
        console.log(var1)
    }
    else if (isVar2Float) {
        var2 = parseFloat(var2)
        console.log(var2)
    }
    const addition = parseFloat(var1) + parseFloat(var2)
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
                if (var2 != 0) {
                    var1 = division;
                    display.textContent = var1
                    }
                else {display.textContent = "Can't divide by zero"}
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
    var1 = null
    isVar1Float = false
    operator = null
    var2 = null
    isVar2Float = false
    display.textContent = var1
})