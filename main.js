var orderForm = document.querySelector('[data-brains-order="form"]');

var nameList = document.querySelector(".order-list");

var emailList = document.querySelector(".order-list");

var gooeynessList = document.querySelector(".order-list");

var orders = []

var submitAndReceiveBrains = function (event) {
    
    event.preventDefault();

    var zombieNameInput = document.querySelector("[name=nameOfZombie]") 

    var zombEmailInput = document.querySelector("[name=zombEmailAddress]")

    var gooeynessInput = document.querySelector("[name=levelOfGooeyness]")

    var zombieName = zombieNameInput.value

    var zombEmail = zombEmailInput.value

    var gooeyness = gooeynessInput.value

    printOrder(zombieName, zombEmail, gooeyness)

    orders.push({name:zombieName, email:zombEmail, gooeyness:gooeyness});

    var brainStorage = JSON.stringify(orders)

    localStorage.setItem("orders", brainStorage)

}

var printOrder = function (zombieName, zombEmail, gooeyness) {
    
    var nameListItem = document.createElement('li')
    nameListItem.textContent = zombieName
    nameList.appendChild(nameListItem)
    
    var emailListItem = document.createElement('li')
    emailListItem.textContent = zombEmail
    emailList.appendChild(emailListItem)

    var gooeynessListItem = document.createElement('li')
    gooeynessListItem.textContent = gooeyness
    gooeynessList.appendChild(gooeynessListItem)

    var brainServingImageJello = document.createElement('img')
    brainServingImageJello.src = "http://cdn.shopify.com/s/files/1/1365/2497/products/zombie_brain_gelatin_mold_2_grande.jpg?v=1520534078"
    brainServingImageJello.classList.add('brainsImages')
    emailList.appendChild(brainServingImageJello)

    var brainServingImageFrapp = document.createElement('img')
    brainServingImageFrapp.src = "https://globalassets.starbucks.com/assets/d4dec9baeb6d49f893851ae0e921f6fa.jpg"
    brainServingImageFrapp.classList.add('brainsImages')
    emailList.appendChild(brainServingImageFrapp)
}

orderForm.addEventListener('submit', submitAndReceiveBrains);

