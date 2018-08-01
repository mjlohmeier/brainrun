var orderForm = document.querySelector('[data-brains-order="form"]');

var nameListContainer = document.querySelector(".order-list");

var emailListContainer = document.querySelector(".order-list");

var gooeynessListContainer = document.querySelector(".order-list");

var orders = []

var submitAndReceiveBrains = function (event) {
    
    event.preventDefault();

    var zombieNameInput = document.querySelector("[name=coffee]") 

    var zombEmailInput = document.querySelector("[name=email]")

    var gooeynessInput = document.querySelector("[name=strength]")

    var zombieName = zombieNameInput.value

    var zombEmail = zombEmailInput.value

    var gooeyness = gooeynessInput.value

    printOrder(zombieName, zombEmail, gooeyness)

    var orderForBrains = {coffee:zombieName, emailAddress:zombEmail, strength:gooeyness};

    orders.push(orderForBrains)

    var brainStorage = JSON.stringify(orders)

    localStorage.setItem("orders", brainStorage)

    $.ajax('https://dc-coffeerun.herokuapp.com/api/coffeeorders', {method: 'POST', data: orderForBrains
})


}

var printOrder = function (zombieName, zombEmail, gooeyness) {
    
    var nameListItem = document.createElement('li')
    nameListItem.textContent = zombieName
    nameListContainer.appendChild(nameListItem)
    
    var emailListItem = document.createElement('li')
    emailListItem.textContent = zombEmail
    emailListContainer.appendChild(emailListItem)

    var gooeynessListItem = document.createElement('li')
    gooeynessListItem.textContent = gooeyness
    gooeynessListContainer.appendChild(gooeynessListItem)

    var brainServingImageJello = document.createElement('img')
    brainServingImageJello.src = "http://cdn.shopify.com/s/files/1/1365/2497/products/zombie_brain_gelatin_mold_2_grande.jpg?v=1520534078"
    brainServingImageJello.classList.add('brainsImages')
    emailListContainer.appendChild(brainServingImageJello)

    var brainServingImageFrapp = document.createElement('img')
    brainServingImageFrapp.src = "https://globalassets.starbucks.com/assets/d4dec9baeb6d49f893851ae0e921f6fa.jpg"
    brainServingImageFrapp.classList.add('brainsImages')
    emailListContainer.appendChild(brainServingImageFrapp)
}

orderForm.addEventListener('submit', submitAndReceiveBrains);

$.ajax('https://dc-coffeerun.herokuapp.com/api/coffeeorders', {method: 'GET'})
.then(function(data) {
    for (var key in data) {
        addNewOrderToAJAX(data[key])
    }
})


var addNewOrderToAJAX = function (order) {
    var newOrder = document.createElement('div');
        newOrder.textContent = order._id
        var orderList = document.querySelector('.order-list')
        orderList.appendChild(newOrder)
}

