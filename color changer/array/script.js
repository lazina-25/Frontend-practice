let item = document.getElementById("item");
let button = document.getElementById("add");
let result=document.getElementById("result");
let fruits = ["Apple", "Banana", "Mango", "Orange"]
let list="";
for (let i = 0; i < fruits.length; i++) {
list+=fruits[i]+"<br>";


}
result.innerHTML=list;
// display 
let student = {
    name: "Aaysha",
    age: 20,

    introduce: function() {
        console.log("Hello, my "+this.name+" is Aaysha and I am"+ this.age +"years old.")
    }
};
student.introduce();
let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Phone",
        price: 20000
    },
    {
        name: "Headphones",
        price: 3000
    }
];
console.log(products[1].name);
console.log(products[2].price);
for(let i=1;i<products.length();i++){
    console.log(products[i].name);
}
for(let i=1;i<products.length();i++){
    console.log(products[i].price);
}