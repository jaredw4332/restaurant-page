import createThing from "./../index.js"

export default function buildAbout() {
    const content = document.getElementById("content")

    const aboutContainer = document.createElement('div')
    aboutContainer.setAttribute("id", "aboutContainer")
    content.appendChild(aboutContainer)

    const aboutBioContainer = document.createElement('div')
    aboutBioContainer.setAttribute("id", "aboutBioContainer")
    aboutContainer.appendChild(aboutBioContainer)

    const aboutBioHeader = createThing("aboutBioHeader", "h2", "Our Story", "aboutHeader", aboutBioContainer)

    const aboutBioTop = createThing("aboutBioTop", "p", "Mmm Burger was established in 1982, by Henry M.M.M. Borgor, who believed that all the residents of Fakecity should have access to a classic eatery experience.", "aboutBio", aboutBioContainer)
    const aboutBioBottom = createThing("aboutBioBottom", "p", "Since then, we've maintained that the most important thing about preparing food is the knowledge that people might eat it, so we strive to do our very best.", "aboutBio", aboutBioContainer)

    const aboutHoursContainer = document.createElement('div')
    aboutHoursContainer.setAttribute("id", "aboutHoursContainer")
    aboutContainer.appendChild(aboutHoursContainer)

    const aboutHoursHeader = createThing("aboutHoursHeader", "h2", "Hours", "aboutHeader", aboutHoursContainer)
    const aboutHoursOne = createThing("aboutHoursOne", "p", "Mon-Wed: 7:00AM - 8:00PM", "aboutHours", aboutHoursContainer)
    const aboutHoursTwo = createThing("aboutHoursTwo", "p", "Thurs-Sat: 7:00AM - 9:30PM", "aboutHours", aboutHoursContainer)
    const aboutHoursThree = createThing("aboutHoursThree", "p", "Sunday: Closed", "aboutHours", aboutHoursContainer)
}   