let misc = $("#misc .button").height();
$(".button").css({
    "width": misc + "px"
});

function add() {
    let args = Array.from(arguments);
    let sum = 0;
    for (i in args) {
        sum += args[i];
    }
    return sum;
}

function subtract() {
    let args = Array.from(arguments);
    let subtraction = args[0];
    for (i = 1; i < args.length; i++) {
        subtraction -= args[i];
    }
    return subtraction;
}

function multiply() {
    let args = Array.from(arguments);
    let product = args[0];
    for (i = 1; i < args.length; i++) {
        product *= args[i];
    }
    return product;
}

function divide() {
    let args = Array.from(arguments);
    let division = args[0];
    for (i = 1; i < args.length; i++) {
        division /= args[i];
    }
    return division;
}

function operate(operator, x, y) {
    if (operator == "+") {
        return add(x, y);
    }
    else if (operator == "-") {
        return subtract(x, y);
    }
    else if (operator == "*") {
        return multiply(x, y);
    }
    else if (operate == "/") {
        return divide(x, y);
    }
    else {
        return "Choose a valid operator.";
    }
}