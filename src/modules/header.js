import createThing from "./../index.js"

export default function buildHeader() {

    const content = document.getElementById("content")

    const headerContainer = document.createElement('div')
    headerContainer.setAttribute("id", "headerContainer")
    content.appendChild(headerContainer)

    const restaurantName = createThing("restaurantNameHeader", "h1", "Mmm Borgor Classic Eatery", "restaurantName", headerContainer)
    const homeButton = createThing("homeButton", "button", "Home", "navButtons", headerContainer)
    const menuButton = createThing("menuButton", "button", "Menu", "navButtons", headerContainer)
    const aboutButton = createThing("aboutButton", "button", "About", "navButtons", headerContainer)
}