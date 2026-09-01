let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Headphones", price: 3000 },
    { name: "Tablet", price: 25000 }
];
let button=document.getElementById("filterButton");
let resultDiv=document.getElementById("result");
button.addEventListener("click",function(){
    let filteredPrice=products.filter(function(product){
return product.price>20000;
    })
   let list = "";

filteredPrice.forEach(function(product) {
    list += product.name + " - ₹" + product.price + "<br>";
});

resultDiv.innerHTML = list;
})