const games = [

{
name:"Golazo!",
genre:"Sports",
size:"100 MB",
image:"imagenes/golazo.jpg",
link:"https://www.mediafire.com/file/bazmi9aqeq7lta9/Golazo_-_ONLY_GAMER.rar/file"
},

{
name:"Fifa 14",
genre:"Sports",
size:"6 GB",
image:"imagenes/fifa14.jpg",
link:"https://www.mediafire.com/file/11wsu4hpq8zp0sv/F14.rar/file"
},

{
name:"Papers, Please",
genre:"Indie",
size:"30 MB",
image:"imagenes/papers.jpg",
link:"https://www.mediafire.com/file/sws4hela7g82irx/PrsPls_ByDerek107.rar/file"
},

{
name:"Wall of Insanity",
genre:"Shooter / Indie",
size:"1.5 GB",
image:"imagenes/wall.jpg",
link:"https://www.mediafire.com/file/0vsdyn3bb87q3d1/Wall_Of_Insanity_-_ONLY_GAMER.rar/file"
},

{
name:"Manhunt",
genre:"Action and Stealth / Survival Horror",
size:"1.4 GB",
image:"imagenes/manhunt.jpg",
link:"https://www.mediafire.com/file/yzkpqo8xnyow985/Manhunt-_ONLYGAMER.rar/file"
},

{
name:"S.T.A.L.K.E.R.: Shadow of Chernobyl",
genre:"Shooter / Survival Horror",
size:"3 GB",
image:"imagenes/stalker.jpg",
link:"https://www.mediafire.com/file/31zb69ukq6vg3co/S.T.A.L.K.E.R.Shadow.of.Chernobyl_ONLY_GAMER.rar/file"
},

{
name:"The Walking Dead: Survival Instinct",
genre:"Shooter / Action",
size:"4 GB",
image:"imagenes/walking.jpg",
link:"https://www.mediafire.com/file/pnwjldfwh8sms6c/TWDSI-_ONLY_GAMER.rar/file"
},

{
name:"Grand Theft Auto: San Andreas",
genre:"Action / Open World",
size:"3.3 GB",
image:"imagenes/gta.jpg",
link:"https://www.mediafire.com/file/7c8w6njg5vfdkye/GTA_San_Andreas.rar/file"
},

{
name:"Need For Speed Underground 2",
genre:"Racing / Action",
size:"2 GB",
image:"imagenes/underground.jpg",
link:"https://www.mediafire.com/file/ap4ij8rivyasn88/NFS_Underground_2.rar/file"
},

{
name:"Need For Speed Carbon",
genre:"Racing / Action",
size:"3 GB",
image:"imagenes/carbon.jpg",
link:"https://www.mediafire.com/file/hsifjy693vi5z6y/NFS_Carbono_-_ONLY_GAMER.rar/file"
},

{
name:"Scarface",
genre:"Action",
size:"2 GB",
image:"imagenes/scarface.jpg",
link:"https://www.mediafire.com/file/w7mfeazkcmxfqc5/Scarface_ONLY_GAMER.rar/file"
},

{
name:"El Padrino II",
genre:"Action / Open World",
size:"5 GB",
image:"imagenes/padrino.jpg",
link:"https://www.mediafire.com/file/wnf0nnly4ib11st/El_Padrino_II_-_ONLY_GAMER.rar/file"
},

{
name:"Obscure",
genre:"Terror",
size:"2 GB",
image:"imagenes/obscure.jpg",
link:"https://www.mediafire.com/file/qf3qsia5wnuudfw/OBSCURE-_Only_Gamer.rar/file"
}

]

function displayGames(list){

const grid = document.getElementById("gameGrid")

grid.innerHTML=""

list.forEach(game =>{

const card = document.createElement("div")
card.className="card"

card.innerHTML = `

<img src="${game.image}">

<div class="card-content">

<div class="game-title">${game.name}</div>

<div class="game-info">
${game.genre}<br>
${game.size}
</div>

<button onclick="window.open('${game.link}')">
Open Backup
</button>

</div>
`

grid.appendChild(card)

})

}

displayGames(games)



/* BUSCADOR */

document.getElementById("search").addEventListener("input",function(){

const text = this.value.toLowerCase()

const filtered = games.filter(game =>
game.name.toLowerCase().includes(text)
)

displayGames(filtered)

})