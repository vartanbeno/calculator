let misc = $("#misc .button").height();
$(".button").css({
    "width": misc + "px"
});

function operate(operator) {
    array.push(Number(result.value));
    switch (operator) {
        case "division":
            array.push("/");
            break;
        case "multiplication":
            array.push("*");
            break;
        case "subtraction":
            array.push("-");
            break;
        case "addition":
            array.push("+");
            break;
        case "result":
            array.push("=");
            operation.value = array.join(" ").replace(/[*]/g, "x").replace(/[/]/g, "÷");
            result.value = eval(eval(array.join("").slice(0, -1)).toFixed(6));
            array = [];
        break;
    }
    if (operator != "result") {
        if (array[array.length - 1] == "=") {
            operation.value = "";
            array = [];
        }
            result.value = "0";
    }
}

function clearField() {
    array = [];
    operation.value = "";
    result.value = "0";
}

let operation = document.querySelector("#screen #operation input");
let result = document.querySelector("#screen #input input");
let valueBefore, valueAfter;
let lookForOperators = /[\*+-\/]/;

let clear = document.querySelector("#clear");
clear.addEventListener("click", clearField);

let changeSign = document.querySelector("#changeSign");
changeSign.addEventListener("click", () => {
    result.value *= -1;
})

let percentage = document.querySelector("#percentage");
percentage.addEventListener("click", () => {
    result.value /= 100;
})

let numbers = document.querySelectorAll("#numbers .button");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (array[array.length - 1] == "=") {
            operation.value = "";
            result.value = "";
        }
        if (result.value == "0") {
            if (number.textContent == ".") {
                result.value += number.textContent;
            }
            else {
                result.value = number.textContent;
            }
            return;
        }
        if (number.textContent == "." && result.value.includes(".")) {
            return false;
        }
        result.value += number.textContent;
    })
})

let array = [];

let operations = document.querySelectorAll("#operators .button");
operations.forEach(operation => {
    operation.addEventListener("click", () => { operate(operation.getAttribute("id")) });
})

window.addEventListener("keydown", (e) => {
    let key = document.querySelector(`[data-key="${e.keyCode}"]`)
    if (!key) return;
    key.click();
})