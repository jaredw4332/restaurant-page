import createThing from "./../index.js"

export default function buildAbout() {
    const content = document.getElementById("content")

    const aboutContainer = document.createElement('div')
    aboutContainer.setAttribute("id", "aboutContainer")
    content.appendChild(aboutContainer)
}