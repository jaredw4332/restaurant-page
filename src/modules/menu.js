import foodmixbowl from "../media/foodmixbowl.jpg"
import eggtoast from "../media/eggtoast.jpg"
import burger from "../media/burger.jpg"
import pizza from "../media/pizza.jpg"
import salad from "../media/salad.jpg"
import stew from "../media/stew.jpg"
import tentacle from "../media/tentacle.jpg"
import pasta from "../media/pasta.jpg"
import pepper from "../media/pepper.jpg"
import chicken from "../media/chicken.jpg"

export default function buildMenu() {

    const content = document.getElementById("content")

    const menuContainer = document.createElement('div')
    menuContainer.setAttribute("id", "menuContainer")
    content.appendChild(menuContainer)

    buildMenuItem("Everything Bowl", "Not sure what to get? Get the Everything Bowl! It has everything you could ever want, and more!", foodmixbowl, "A bowl of various meats and vegetables", "20.55")
    buildMenuItem("Green Eggs on Toast", "Delicious avocado spread on your bread of choice, toasted and topped by a sunny side up egg.", eggtoast, "Toast with avocado spread and a fried egg on top", "9.35")
    buildMenuItem("Springfield Steamed Ham", "With bacon and lettuce prepared under the rare midwestern northern lights, this sandwich is sure to please.", burger, "A burger", "14.50")
    buildMenuItem("Reggie's Pizza", "Guy named Reggie walks into a restaurant. Offers to make pizza. We let him. It's delicious. We hire him full time.", pizza, "A pizza topped with various vegetables", "15.75")
    buildMenuItem("Reckless Salad", "This salad is for the eccentric, the dangerous, the absolutely pants on head lunatics of our world.", salad, "Salad", "12.60")
    buildMenuItem("Golfer's Stew", "I'm not 100% sure what's in this but I'd say it looks pretty good, although I'm not even sure it's stew. Why not give it a try?", stew, "Some kind of meat and vegetable stew", "19.00")
    buildMenuItem("Squid's Delight", "This dish is a delight for you, and the squid! You get to enjoy the squid's delicious tentacle, and the squid will never know pain or suffering ever again.", tentacle, "Squid tentacle", "25.20")
    buildMenuItem("Broccoli Pasta", "Broccoli, bread, and pasta. Just imagine that. Broccoli, bread, and pasta! Crazy. That's just crazy.", pasta, "Pasta with broccoli and bread", "10.00")
    buildMenuItem("Bell Pepper", "Just a red bell pepper, ideally for all you red bell pepper lovers out there, but anyone can order it.", pepper, "Red bell pepper", "1.56")
    buildMenuItem("Artisan Chicken Roast", "The highest quality meat from the highest quality farm. However, we're still working on the roasted part.", chicken, "A live chicken", "45.99")
}

function buildMenuItem(name, description, imgname, imgdesc, price) {

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

    let menuItemPrice = document.createElement('p')
    menuItemPrice.textContent = price
    menuItemPrice.classList.add("menuItemPrice")
    menuItem.appendChild(menuItemPrice)
}