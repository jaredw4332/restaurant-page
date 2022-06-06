import createThing from "./../index.js"

export default function buildSidebar() {

    const content = document.getElementById("content")

    const sidebarContainer = document.createElement('div')
    sidebarContainer.setAttribute("id", "sidebarContainer")
    content.appendChild(sidebarContainer)

    const restaurantNameContainer = document.createElement('div')
    restaurantNameContainer.classList.add("restaurantNameContainer")
    restaurantNameContainer.setAttribute("id", "restaurantNameContainerSidebar")
    sidebarContainer.appendChild(restaurantNameContainer)

    const restaurantNameTop = createThing("restaurantNameSidebarTop", "h1", "Mmm Borgor", "restaurantNameTop", restaurantNameContainer)
    const restaurantNameBottom = createThing("restaurantNameSidebarBottom", "h1", "Classic Eatery", "restaurantNameBottom", restaurantNameContainer)
    const homeButton = createThing("homeButton", "button", "Home", "navButtons", sidebarContainer)
    const menuButton = createThing("menuButton", "button", "Menu", "navButtons", sidebarContainer)
    const aboutButton = createThing("aboutButton", "button", "About", "navButtons", sidebarContainer)
}