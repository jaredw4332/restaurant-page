export default function buildHome() {

    const content = document.getElementById("content")

    const createThing = (name, type, text, group) => {
        name = document.createElement(type)
        name.setAttribute("id", name)
        if (text != 0) { name.textContent = text }
        if (group != 0) { name.classList.add(group) }
        content.appendChild(name)
    }

    const restaurantName = createThing("restaurantName", "h1", "Mmm Borgor Classic Eatery", 0)
    const homeButton = createThing("homeButton", "button", "Home", "navButtons")
    const menuButton = createThing("menuButton", "button", "Menu", "navButtons")
    const aboutButton = createThing("aboutButton", "button", "About", "navButtons")
}