export default function buildHome() {
    const content = document.getElementById("content");
    const thing = content.createElement("p");
    thing.textContent = "Fcuk";
    content.appendChild(thing);
}