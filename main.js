let value = "";
let displayValue = "";

const button = (item) => {
    if (item == "+" || item == "-" || item == "x" || item == "/" || item == "%" || item == "=") {
        equal();
    }

    value+=item;
    displayValue+=item;
    

    if (/^-?[0-9]\d*(\.\d+)?$/.test(value[value.length-1]) || value[value.length-1] == ".") {
        document.getElementById("displayText").innerHTML = displayValue;
    }
    else if (item == "AC") {
        value = "";
        displayValue = "";
        document.getElementById("displayText").innerHTML = displayValue;
    }
    console.log(value);
}

const equal = () => {

    displayValue = "";

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
    else if (value.includes("%")) {
        const expression = value.split("%");
        value = parseFloat(expression[0]/100);
    }
    else if (value.includes("=")) {
        const expression = value.split("=");
        value = parseFloat(expression[0]);
    }
    document.getElementById("displayText").innerHTML = value;
}