import createThing from "./../index.js"
import burgerIcon from "../media/burgericon.svg"

export default function buildHeader() {

    const content = document.getElementById("content")

    const headerContainer = document.createElement('div')
    headerContainer.setAttribute("id", "headerContainer")
    content.appendChild(headerContainer)

    const restaurantNameContainer = document.createElement('div')
    restaurantNameContainer.classList.add("restaurantNameContainer")
    restaurantNameContainer.setAttribute("id", "restaurantNameContainerHeader")
    headerContainer.appendChild(restaurantNameContainer)

    const restaurantNameTop = createThing("restaurantNameHeaderTop", "h1", "Mmm Borgor", "restaurantNameTop", restaurantNameContainer)
    const restaurantNameBottom = createThing("restaurantNameHeaderBottom", "h1", "Classic Eatery", "restaurantNameBottom", restaurantNameContainer)
    
    const buttonContainer = document.createElement('div')
    buttonContainer.setAttribute("id", "navButtonContainer")
    headerContainer.appendChild(buttonContainer)
    
    const homeButton = createThing("homeButton", "button", "Home", "navButtons", buttonContainer)
    const menuButton = createThing("menuButton", "button", "Menu", "navButtons", buttonContainer)
    const aboutButton = createThing("aboutButton", "button", "About", "navButtons", buttonContainer)

    const headTitle = document.querySelector('head');
    const icon = document.createElement('link');
    icon.setAttribute('rel','shortcut icon');
    icon.setAttribute('href',burgerIcon);
    headTitle.appendChild(icon);
}

