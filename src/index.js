import './style.css'
import buildHeader from "./modules/header.js"
import buildHome from "./modules/home.js"
import buildMenu from "./modules/menu.js"

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
        getValues()
        content.removeChild(menuContainer)
        document.querySelector("#homeButton").disabled = true
        document.querySelector("#menuButton").disabled = false
        buildHome()
    }

    function loadMenu () {
        getValues()
        content.removeChild(homeContainer)
        document.querySelector("#homeButton").disabled = false
        document.querySelector("#menuButton").disabled = true
        buildMenu()
    }

    function addButtonEvents(){
        getValues()
        homeButton.addEventListener("click", loadHome)
        menuButton.addEventListener("click", loadMenu)
    }

    function getValues() {
        let menuContainer = document.getElementById("menuContainer")
        let homeContainer = document.getElementById("homeContainer")
    
        let homeButton = document.getElementById("homeButton")
        let menuButton = document.getElementById("menuButton")
    }


    buildHeader()
    buildHome()
    addButtonEvents()


})()
