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

    const restaurantNameTop = createThing("restaurantNameHomeTop", "h1", "Mmm Borgor", "restaurantNameTop", restaurantNameContainer)
    const restaurantNameBottom = createThing("restaurantNameHomeBottom", "h1", "Classic Eatery", "restaurantNameBottom", restaurantNameContainer)

    const descriptionContainer = document.createElement('div')
    descriptionContainer.setAttribute('id', "descriptionContainer")
    homeContainer.appendChild(descriptionContainer)

    const descriptionTop = createThing("descriptionTop", "p", "Experience the unmatched flavour that the Mmm Borgor Classic Eatery has been providing since 1982, all in the heart of beautiful downtown Fakecity.", "description", descriptionContainer)
    const descriptionBottom = createThing("descriptionBottom", "p", "Dine in, pick up, or we can deliver!", "description", descriptionContainer)

    const buttonContainer = document.createElement('div')
    buttonContainer.setAttribute("id", "orderButtonContainer")
    homeContainer.appendChild(buttonContainer)

    const pickupButton = createThing("pickupButton", "button", "Order Pickup", "orderButtons", buttonContainer)
    const deliveryButton = createThing("deliveryButton", "button", "Order Delivery", "orderButtons", buttonContainer)
}
