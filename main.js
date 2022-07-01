const calcButton = document.querySelectorAll(".calculator__buttons-btn");

let value = "";
let displayValue = "";

const handleButton = (event) => {

    console.log("1");

    if (event.target.value == "+" || event.target.value == "-" || event.target.value == "x" || event.target.value == "/" || event.target.value == "%" || event.target.value == "=") {
        equal();
    }

    value+=event.target.value;
    displayValue+=event.target.value ;
    

    if (/^-?[0-9]\d*(\.\d+)?$/.test(value[value.length-1]) || value[value.length-1] == ".") {
        document.getElementById("displayText").innerHTML = displayValue;
    }
    else if (event.target.value == "AC") {
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

calcButton.forEach(button => {
    button.addEventListener('click', handleButton);
});