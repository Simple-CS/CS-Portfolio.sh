var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    //Done in ordrer to add two values together. 
    
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;  
    }
    //Done in order to subtract one value from another. 
    
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value); 
        display.innerHTML = answer; 
    }
    //Done in order to multiply to numbers together. 
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer; 
    }
    //Done in order to divide two numbers. 
    if  (dropdown.value == "^"){
        answer = Math.pow(parseInt(input1.value),parseInt(input2.value));
        display.innerHTML = answer; 
    }
    //Done to find the value when an integer is raised to the nth power
    
    if(dropdown.value == "sqrt"){
        answer = Math.sqrt (parseInt(input2.value));
     display.innerHTML = answer;    
    }
    //Done to find the Squareroot of a given value
    
    if(dropdown.value == "cbrt"){
        answer = Math.cbrt (parseInt(input2.value));
        display.innerHTML = answer; 
    }
}// JavaScript File 