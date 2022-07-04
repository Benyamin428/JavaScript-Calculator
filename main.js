const calcButton = document.querySelectorAll(".calculator__buttons-btn");
const displayArea = document.querySelector("#displayText");

//value stores the expression
let value = "";
let displayValue = "";

const handleButton = (event) => {

    if (event.target.value == "plus" || event.target.value == "minus" || event.target.value == "multiply" || event.target.value == "divide" || event.target.value == "percent" || event.target.value == "=") {
        equal();
    }
    
    //switch between + or - 
    if (event.target.value == "switch") {
        //check if last element in string has an "=" so that we only substring the number
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
        //append the target value onto the value variable
        value+=event.target.value;
        displayValue+=event.target.value ;
    }

    //use Regex to check last value of string is a number or dot as we only want these to appear for the user
    //we dont wan't operators to be seen 
    if (/^-?[0-9]\d*(\.\d+)?$/.test(value[value.length-1]) || value[value.length-1] == ".") {
        displayArea.innerHTML = displayValue;
    }
    else if (event.target.value == "AC") {
        //clear the value
        value = "";
        displayValue = "";
        displayArea.innerHTML = displayValue;
    }
    else {
        displayValue = "";
    }
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
    displayArea.innerHTML = value;
}

calcButton.forEach(button => {
    button.addEventListener('click', handleButton);
});