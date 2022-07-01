let value = "";
let displayValue = "";

const button = (item) => {
    if (item == "+" || item == "-" || item == "x" || item == "/" || item == "=") {
        equal();
    }
    value+=item;
    displayValue+=item;

    if (/^[0-9]$/.test(value[value.length-1])) {
        document.getElementById("displayScreen").innerHTML = displayValue;
    }
    else {
        displayValue = "";
    }
    console.log(value);
}

const equal = () => {
    if (value.includes("+")) {
        const expression = value.split("+");
        value = parseFloat(expression[0]) + parseFloat(expression[1]);
    }
    else if (value.includes("-")) {
        const expression = value.split("-");
        value = parseFloat(expression[0]) - parseFloat(expression[1]);
    }
    else if (value.includes("x")) {
        const expression = value.split("x");
        value = parseFloat(expression[0]) * parseFloat(expression[1]);        
    }
    else if (value.includes("/")) {
        const expression = value.split("/");
        value = parseFloat(expression[0]) / parseFloat(expression[1]);        
    }
    else if (value.includes("=")) {
        const expression = value.split("=");
        value = parseFloat(expression[0]);
    }
    document.getElementById("displayScreen").innerHTML = value;
}