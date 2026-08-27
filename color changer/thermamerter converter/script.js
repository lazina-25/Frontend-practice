let celsius=document.getElementById("celsius");
let convertButton=document.getElementById("convert");
let result=document.getElementById("result");

convertButton.addEventListener("click",function(){
    let celsiusvalue=celsius.value;
    let farienhirtvalue=(celsiusvalue*9/5)+32;
    result.textContent="Temperature in Fahrenheit: "+farienhirtvalue+"°F";

})