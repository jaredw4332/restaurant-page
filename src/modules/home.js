import createThing from "./../index.js"

export default function buildHome() {
    
    const content = document.getElementById("content")

    const homeContainer = document.createElement('div')
    homeContainer.setAttribute("id", "homeContainer")
    content.appendChild(homeContainer)

    const restaurantNameContainer = document.createElement('div')
    restaurantNameContainer.classList.add("restaurantNameContainer")
    restaurantNameContainer.setAttribute("id", "restaurantNameContainerHome")
    homeContainer.appendChild(restaurantNameContainer)

    const restaurantNameTop = createThing("restaurantNameSidebarTop", "h1", "Mmm Borgor", "restaurantNameTop", restaurantNameContainer)
    const restaurantNameBottom = createThing("restaurantNameSidebarBottom", "h1", "Classic Eatery", "restaurantNameBottom", restaurantNameContainer)

    const slogan = createThing("slogan", "p", "You're already full", 0, homeContainer)

    const buttonContainer = document.createElement('div')
    buttonContainer.setAttribute("id", "homeButtonContainer")
    homeContainer.appendChild(buttonContainer)

    const pickupButton = createThing("pickupButton", "button", "Order Pickup", "orderButtons", buttonContainer)
    const deliveryButton = createThing("deliveryButton", "button", "Order Delivery", "orderButtons", buttonContainer)
}