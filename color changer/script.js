let changecolor=document.getElementById("change");
let colorvalue=document.getElementById("colorvalue");

changecolor.addEventListener("click",function(){
   
    let color="rgb("+Math.floor(Math.random()*12)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";  
     document.body.style.backgroundColor=color;
    colorvalue.textContent=color;
});