const calcButton = document.querySelectorAll(".calculator__buttons-btn");

let value = "";
let displayValue = "";

const handleButton = (event) => {

    console.log(value);

    if (event.target.value == "plus" || event.target.value == "minus" || event.target.value == "multiply" || event.target.value == "divide" || event.target.value == "percent" || event.target.value == "=") {
        equal();
    }
    
    if (event.target.value == "switch") {
        if (value.includes("=")) {
            value = parseFloat(value.substring(0, value.length-1)*-1).toString();
            displayValue = value;
        }
        else {
            value = parseFloat(value*-1).toString();
            displayValue = value;
        }
    }
    else {
        value+=event.target.value;
        displayValue+=event.target.value ;
    }

    if (/^-?[0-9]\d*(\.\d+)?$/.test(value[value.length-1]) || value[value.length-1] == ".") {
        document.getElementById("displayText").innerHTML = displayValue;
    }
    else if (event.target.value == "AC") {
        value = "";
        displayValue = "";
        document.getElementById("displayText").innerHTML = displayValue;
    }
    else {
        displayValue = "";
    }
   // console.log(value);
}

const equal = () => {

    if (value.includes("plus")) {
        const expression = value.split("plus");
        value = parseFloat(expression[0]) + parseFloat(expression[1]);
    }
    else if (value.includes("minus")) {
        console.log(value)
        const expression = value.split("minus");
        value = parseFloat(expression[0]) - parseFloat(expression[1]);
    }
    else if (value.includes("multiply")) {
        const expression = value.split("multiply");
        value = parseFloat(expression[0]) * parseFloat(expression[1]);        
    }
    else if (value.includes("divide")) {
        const expression = value.split("divide");
        value = parseFloat(expression[0]) / parseFloat(expression[1]);        
    }
    else if (value.includes("percent")) {
        const expression = value.split("percent");
        value = parseFloat(expression[0]/100);
    }
    else if (value.includes("=")) {
        const expression = value.split("=");
        value = parseFloat(expression[0]);
    }
    document.getElementById("displayText").innerHTML = value;
    return;
}

calcButton.forEach(button => {
    button.addEventListener('click', handleButton);
});