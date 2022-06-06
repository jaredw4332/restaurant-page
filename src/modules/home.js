import createThing from "./../index.js"

export default function buildHome() {
    
    const content = document.getElementById("content")

    const homeContainer = document.createElement('div')
    homeContainer.setAttribute("id", "homeContainer")
    content.appendChild(homeContainer)

    const restaurantName = createThing("restaurantNameHome", "h1", "Mmm Borgor Classic Eatery", "restaurantName", homeContainer)
    const slogan = createThing("slogan", "p", "You're already full", 0, homeContainer)
    const pickupButton = createThing("pickupButton", "button", "Order Pickup", "orderButtons", homeContainer)
    const deliveryButton = createThing("deliveryButton", "button", "Order Delivery", "orderButtons", homeContainer)
}