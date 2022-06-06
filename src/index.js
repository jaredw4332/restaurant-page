import './style.css'
import buildSidebar from "./modules/sidebar.js"
import buildHome from "./modules/home.js"

export default function createThing (name, type, text, group, parent) {
    let id = name
    name = document.createElement(type)
    name.setAttribute("id", id)
    if (text != 0) { name.textContent = text }
    if (group != 0) { name.classList.add(group) }
    parent.appendChild(name)
}

buildSidebar()
buildHome()