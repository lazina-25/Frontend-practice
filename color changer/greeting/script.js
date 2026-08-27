let Name=document.getElementById("name");
let greet=document.getElementById("greet");
let message=document.getElementById("message")

greet.addEventListener("click", function(){
    let name=Name.value;
    message.innerHTML="Hello "+name+"!";
})