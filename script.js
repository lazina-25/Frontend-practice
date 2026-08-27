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