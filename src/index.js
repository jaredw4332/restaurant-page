import './style.css'
import buildHeader from "./modules/header.js"
import buildHome from "./modules/home.js"
import buildMenu from "./modules/menu.js"
import buildAbout from "./modules/about.js"

export default function createThing (name, type, text, group, parent) {
    let id = name
    name = document.createElement(type)
    name.setAttribute("id", id)
    if (text != 0) { name.textContent = text }
    if (group != 0) { name.classList.add(group) }
    parent.appendChild(name)
}

const page = (() => {

    const content = document.getElementById("content")

    function loadHome () {
        let removed = checkContent()
        content.removeChild(removed)
        homeButton.disabled = true
        menuButton.disabled = false
        aboutButton.disabled = false
        buildHome()
    }

    function loadMenu () {
        let removed = checkContent()
        content.removeChild(removed)
        homeButton.disabled = false
        menuButton.disabled = true
        aboutButton.disabled = false
        buildMenu()
    }

    function loadAbout () {
        let removed = checkContent()
        content.removeChild(removed)
        homeButton.disabled = false
        menuButton.disabled = false
        aboutButton.disabled = true
        buildAbout()
    }

    function addButtonEvents(){
        getValues()
        homeButton.addEventListener("click", loadHome)
        menuButton.addEventListener("click", loadMenu)
        aboutButton.addEventListener("click", loadAbout)
    }

    function getValues() {
        let menuContainer = document.getElementById("menuContainer")
        let homeContainer = document.getElementById("homeContainer")
        let aboutContainer = document.getElementById("aboutContainer")
    
        let homeButton = document.getElementById("homeButton")
        let menuButton = document.getElementById("menuButton")
        let aboutButton = document.getElementById("menuButton")
    }

    function checkContent() {
        getValues()
        if (typeof homeContainer !== 'undefined') {
            return homeContainer
        }
        if (typeof menuContainer !== 'undefined') {
            return menuContainer
        }
        if (typeof aboutContainer !== 'undefined') {
            return aboutContainer
        }
    }

    buildHeader()
    buildHome()
    addButtonEvents()
    homeButton.disabled = true

})()
