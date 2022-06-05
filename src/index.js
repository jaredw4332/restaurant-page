import buildHeader from "./modules/header.js"

export default function createThing (name, type, text, group) {
    name = document.createElement(type)
    name.setAttribute("id", name)
    if (text != 0) { name.textContent = text }
    if (group != 0) { name.classList.add(group) }
    content.appendChild(name)
}

buildHeader()