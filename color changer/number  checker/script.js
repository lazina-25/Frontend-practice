let box=document.getElementById("container");
let number=document.getElementById("numberinput");
let checkButton=document.getElementById("checkButton");
let result = document.getElementById("result");
checkButton.addEventListener("click", function() {
    let number1=Number(number.value);
    if(number1>0){
        result.textContent="The number is positive";
        if(number1%2==0){
            result.textContent+=" and even";
        }else{
            result.textContent+=" and odd";
        }
    } else if(number1<0){
        result.textContent="The number is negative";
        if(number1%2==0){
            result.textContent+=" and even";
        }else{
            result.textContent+=" and odd";
        }
    }
    else {
    result.textContent = "The number is zero";
}
})