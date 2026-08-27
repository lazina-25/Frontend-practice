let number1=document.getElementById("num1");
let number2=document.getElementById("num2");
let addButton=document.getElementById("addButton");   
let subtractButton=document.getElementById("subtractButton");
let multiplyButton=document.getElementById("multiplyButton");
let divideButton=document.getElementById("divideButton");
let result=document.getElementById("result");

    addButton.addEventListener("click", function() {
        let num1=Number(number1.value);
        let num2=Number(number2.value);
        let sum=num1+num2;
        result.textContent="The sum is: "+sum;
    });

    subtractButton.addEventListener("click", function() {
        let num1=Number(number1.value);
        let num2=Number(number2.value);
        let difference=num1-num2;
        result.textContent="The difference is: "+difference;
    });

    multiplyButton.addEventListener("click", function() {
        let num1=Number(number1.value);
        let num2=Number(number2.value);
        let product=num1*num2;
        result.textContent="The product is: "+product;
    });
    divideButton.addEventListener("click", function() {
        let num1=Number(number1.value);
        let num2=Number(number2.value);
        let quotient=num1/num2;
        if(num2===0){
            result.textContent="Cannot divide by zero";
            return;
        }
        result.textContent="The quotient is: "+quotient;
    });
