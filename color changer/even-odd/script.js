let number=document.getElementById("number");
let checkButton=document.getElementById("check");
let result=document.getElementById("result");

checkButton.addEventListener("click",function(){
    let numbervalue=number.value;
    if(numbervalue%2==0){
        result.textContent="the number is even";
    
    }else{
        result.textContent="the number is odd";
    }

})