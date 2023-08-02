import {menuArray} from './data.js'
let orderItems = [];
let isOrderDisplayed = false;

// Function to calculate the total price of the order items
function calculateTotal() {
    const totalAmountElement = document.getElementById("totalAmount");
    const totalAmount = orderItems.reduce((total, item) => total + item.price, 0);
    totalAmountElement.textContent = totalAmount.toFixed(2);;
}
// add item to order//
document.addEventListener("click", function(e){
    if(e.target.dataset.addItemBtn) {
        handleAddClick(e.target.dataset.addItemBtn)
        console.log('I am clicked')
    }
})

document.addEventListener("click", function (e) {
    if (e.target.dataset.removeItemBtn) {
        handleRemoveClick(e.target.dataset.removeItemBtn);
    }
});

function updateOrderContainer() {
    const orderContainer = document.querySelector(".order");
    if (orderItems.length > 0) {
        orderContainer.classList.add("border-bottom");
    } else {
        orderContainer.classList.remove("border-bottom");
    }
}
function handleAddClick(menuId) {
    const targetMenuObj = menuArray.find(function(menu) {
        return menu.id == menuId;
    });

    if (targetMenuObj) {
        orderItems.push(targetMenuObj);
        console.log("Item added to order:", targetMenuObj);
        console.log("Current order:", orderItems);
    }
    displayOrderItems()
    calculateTotal()
     updateOrderContainer();
}

function handleRemoveClick(menuId) {
    const targetIndex = orderItems.findIndex((item) => item.id == menuId);

    if (targetIndex !== -1) {
        orderItems.splice(targetIndex, 1); // Remove the item from the order
    }
    displayOrderItems()
    calculateTotal();
     updateOrderContainer();
}
 
function generateOrderItemsHtml(menuArray) {
    let orderHtml = 
// generates the HTML markup for the order items and stores it in the orderHtml variable//
            `<div class="order">
                <span><b> Your order</b></span>
            </div>
                `
                    
                menuArray.forEach(function(item) {
                 orderHtml += `
                    <div class = "order-item">
                    <div class = "order-details">
                    <div class="name-and-remove">
                    <p class="name">${item.name}</p>
                <button class="remove-btn" data-remove-item-btn="${item.id}">Remove</button>
                </div>
             <p class="price">${item.price.toFixed(2)}</p>
             </div>
             </div>
        `;
             
    })
// the orderItems array and create the markup for each order item inside the forEach loop.
//update the innerHTML of the element with the class "order" to display the order items using the orderHtml//
// Calculate the total amount
    const totalAmount = orderItems.reduce((total, item) => total + item.price, 0);

    // Add the total amount to the template literal
    orderHtml += `
    <div class= "order-details">
        <p class="total"><b>Total: $<span id="totalAmount">${totalAmount.toFixed(2)}</b></span></p>
        </div>
        </div>
    `;
    
    return orderHtml;
}


// Function to display the order items on the web page
function displayOrderItems() {
    const orderSection = document.querySelector(".order");
    const orderHtml = generateOrderItemsHtml(orderItems);
    orderSection.innerHTML = orderHtml;
    
    if (orderItems.length > 0) {
        orderSection.classList.add("border-bottom");
    } else {
        orderSection.classList.remove("border-bottom");
    }
}

// Call the function to display the order items
displayOrderItems();

// Call the function to calculate and display the total initially
calculateTotal();

 // needs to be able to be incremented and decremented by clicking
 
 // your order rendering //
 
 
//payment modal//

//user's name used to say thankyou for order//
   








