let item = document.getElementById("item");
let button = document.getElementById("add");
let result = document.getElementById("result");

let shoppinglist = [];

// Add item
button.addEventListener("click", function() {

    let newitem = item.value;

    // Input validation
    if (newitem.trim() === "") {
        result.textContent = "Please enter an item";
        return;
    }

    // Add item to array
    shoppinglist.push(newitem);

    // Clear input
    item.value = "";

    displayList();
});


// Display shopping list
function displayList() {

    let list = "";

    for (let i = 0; i < shoppinglist.length; i++) {

        list += "<li>" 
             + shoppinglist[i] 
             + ' <button onclick="deleteItem(' + i + ')">Delete</button>'
             + "</li>";
    }

    result.innerHTML = list;
}


// Delete item
function deleteItem(index) {

    shoppinglist.splice(index, 1);

    displayList();
}