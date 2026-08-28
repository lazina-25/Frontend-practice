let number=document.getElementById("number");
let multiply=document.getElementById("multiply");
let result=document.getElementById("result");

    

multiply.addEventListener("click",function(){
let num=Number(number.value);
let table="";
    for(let i=1;i<=10;i++){
        table+=num+"X"+i+"="+(num*i)+"<br>";
    }

result.innerHTML="the table of"   +   num  +  "is:<br> "   +table;
});