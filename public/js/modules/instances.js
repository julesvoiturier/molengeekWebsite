import data from './../../json/dataMolengeek.json' assert {type: "json"}

// let seanceInfoCard = document.createElement("div")



// console.log(data.fileName);

export let seanceInfo = data.seancesInfos
export let seanceInfoDate = document.querySelectorAll(".date")

for (let i = 0; i < seanceInfoDate.length; i++) {
    seanceInfoDate[i].innerText = seanceInfo.date[i]
}

// let pokemon = data.pokemon
// let li 

// let pokemonMakeList = () => {
//  li = document.createElement("li")
//  for (let i = 0; i < array.length; i++) {
//     li.innerText = pokemon[i].name
//     document.querySelector("#pokemonList").appendChild(li)
//     console.log(li.innerText);
//  }   
// }

// pokemonMakeList()


