let countElement = document.getElementById("count");
let decrementButton = document.getElementById("decrement");
let incrementButton = document.getElementById("increment");
let resetButton = document.getElementById("reset");

let count=0;
 
decrementButton.addEventListener("click",function(){
    count--;
    countElement.textContent=count;}
    );
    incrementButton.addEventListener("click",function(){
    count++;
    countElement.textContent=count;}
    );
    resetButton.addEventListener("click",function(){
    count=0;
    countElement.textContent=count;}
    );
    //function greet(name){
    //    return "Hello, " + name + "!";
    //}
    console.log(greet("Alice"));
    function multiply(a ,b){
        return a*b;
    }
    console.log(multiply(5,7));
    function checkAge(age) {
         if(age>=18){
    return "You are an adult.";
}else{
    return "You are a minor.";}
}
console.log(checkAge(20));