var minus_A = document.querySelector("#product_A_form .btn-minus");
var add_A = document.querySelector("#product_A_form .btn-add");
var quantity_A = document.querySelector("#product_A_form .item-quantity");

// Function to ensure the value is always displayed as 2 digits
function formatQuantity(value) {
    return String(value).padStart(2, '0');
}

minus_A.addEventListener("click", function(){
    var currentQuantity = parseInt(quantity_A.value);
    if (currentQuantity > 1) {
        quantity_A.value = formatQuantity(currentQuantity - 1);
    }
});

add_A.addEventListener("click", function() {
    var currentQuantity = parseInt(quantity_A.value);
    if (currentQuantity < 10) {
        quantity_A.value = formatQuantity(currentQuantity + 1);
    }
});

// Ensure the initial value is formatted correctly
quantity_A.value = formatQuantity(quantity_A.value);