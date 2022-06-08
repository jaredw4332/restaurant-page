export default function buildMenu() {

    const content = document.getElementById("content")

    const menuContainer = document.createElement('div')
    menuContainer.setAttribute("id", "menuContainer")
    content.appendChild(menuContainer)

    buildMenuItem("Everything Bowl", "Not sure what to get? Get the Everything Bowl! It has everything you could ever want, and more!", "foodmixbowl.jpg", "A bowl of various meats and vegetables")
    buildMenuItem("Green Eggs on Toast", "Delicious avocado spread on your bread of choice, toasted and topped by a sunny side up egg.", "eggtoast.jpg", "Toast with avocado spread and a fried egg on top")
    buildMenuItem("Springfield Steamed Ham", "With bacon and lettuce prepared under the rare midwestern northern lights, this sandwich is sure to please.", "burger.jpg", "A burger")
    buildMenuItem("Reggie's Pizza", "Guy named Reggie walks into a restaurant. Offers to make pizza. We let him. It's delicious. We hire him full time.", "pizza.jpg", "A pizza topped with various vegetables")
}

function buildMenuItem(name, description, imgname, imgdesc) {

    let menuItem = document.createElement('div')
    menuItem.classList.add("menuItem")
    menuContainer.appendChild(menuItem)

    let menuImg = document.createElement('img')
    menuImg.src = `../src/media/${imgname}`
    menuImg.alt = imgdesc
    menuImg.classList.add("menuImg")
    menuItem.appendChild(menuImg)

    let menuItemName = document.createElement('p')
    menuItemName.textContent = name
    menuItemName.classList.add("menuItemName")
    menuItem.appendChild(menuItemName)

    let menuItemDesc = document.createElement('p')
    menuItemDesc.textContent = description
    menuItemDesc.classList.add("menuItemDesc")
    menuItem.appendChild(menuItemDesc)
}