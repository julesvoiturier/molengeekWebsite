import data from './../../json/dataMolengeek.json' assert {type: "json"}

export let burgerMenuButton = document.querySelector(".burgerMenu")
export let burgerMenu = document.querySelector(".actualBurgerMenu")

burgerMenuButton.addEventListener("click", () => {
    burgerMenu.classList.toggle("toggleDisplay")
})


export let molengeekContact = data.molengeekInfo
export let  contactText = document.querySelector(".contactText")

molengeekContact.name = "<b>MOLENGEEK</b>"

for (const key in molengeekContact) {
    if (Object.hasOwnProperty.call(molengeekContact, key)) {
        let element = molengeekContact[key];
        contactText.innerHTML += element
        contactText.innerHTML += "<br></br>"
    }
}




export let sect4Home = document.querySelector(".s4page1")
export let carousel = document.querySelector(".carousel")
export let logos = data.partenaires
console.log(logos);

// carousel.style.whiteSpace = "nowrap"
// carousel.style.overflow = "hidden"

for (const key in logos) {
    if (Object.hasOwnProperty.call(logos, key)) {
        const element = logos[key];
        let img = document.createElement("img")
        img.src = element.logo
        img.style.width = "200px"
        img.style.marginRight = "100px"
        carousel.appendChild(img)
    }
}

let carouselClone = carousel.cloneNode(true)
sect4Home.appendChild(carouselClone)



// for (let d = 0; d < array.length; d++) {
//     const element = array[d];
    
// }

// export let logo = data.molengeekLogo
// let footerLogo = document.querySelectorAll('.footerLogo');
// for (let i = 0; i < footerLogo.length; ++i) {
//     footerLogo[i].style.backgroundImage = `url(${logo})`
// }

// export let long = document.querySelector(".long")
// export let short = document.querySelector(".short")

// long.addEventListener("click", () => {
//     console.log("hello");
//     long.style.background = "rgb(140, 255, 171)"
//     short.style.background ="white"
// })

// short.addEventListener("click", () => {
//     short.style.background = "rgb(140, 255, 171)"
//     long.style.background ="white"
// })