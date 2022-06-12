import createThing from "./../index.js"
import phone from "../media/phone.svg"
import location from "../media/location.svg"
import mail from "../media/mail.svg"

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


    const aboutContactContainer = document.createElement('div')
    aboutContactContainer.setAttribute("id", "aboutContactContainer")
    aboutContainer.appendChild(aboutContactContainer)

    const aboutContactHeader = createThing("aboutContactHeader", "h2", "Contact Us", "aboutHeader", aboutContactContainer)

    const aboutContactLocationContainer = document.createElement('div')
    aboutContactLocationContainer.classList.add("contactInfoContainer")
    aboutContactContainer.appendChild(aboutContactLocationContainer)

    const aboutContactLocationImg = document.createElement('img')
    aboutContactLocationImg.classList.add("contactIcon")
    aboutContactLocationImg.setAttribute("id", "locationImg")
    aboutContactLocationImg.src = location
    aboutContactLocationImg.alt = "Location marker"
    aboutContactLocationContainer.appendChild(aboutContactLocationImg)
    
    const aboutContactLocationAddress = createThing("aboutContactLocationAddress", "p", "123 Fake St. E, Fakecity", "aboutContactInfo", aboutContactLocationContainer)

    const aboutContactPhoneContainer = document.createElement('div')
    aboutContactPhoneContainer.classList.add("contactInfoContainer")
    aboutContactContainer.appendChild(aboutContactPhoneContainer)

    const aboutContactPhoneImg = document.createElement('img')
    aboutContactPhoneImg.classList.add("contactIcon")
    aboutContactPhoneImg.src = phone
    aboutContactPhoneImg.alt = "Telephone"
    aboutContactPhoneContainer.appendChild(aboutContactPhoneImg)

    const aboutContactPhoneNumber = createThing("aboutContactPhoneNumber", "p", "(123) 456-7890", "aboutContactInfo", aboutContactPhoneContainer)

    const aboutContactEmailContainer = document.createElement('div')
    aboutContactEmailContainer.classList.add("contactInfoContainer")
    aboutContactContainer.appendChild(aboutContactEmailContainer)

    const aboutContactEmailImg = document.createElement('img')
    aboutContactEmailImg.classList.add("contactIcon")
    aboutContactEmailImg.src = mail
    aboutContactEmailImg.alt = "Letter"
    aboutContactEmailContainer.appendChild(aboutContactEmailImg)
    
    const aboutContactEmailAddress = createThing("aboutContactEmailAddress", "p", "mmmborgor@fakemail.com", "aboutContactInfo", aboutContactEmailContainer)
}   