const collection = [
    {
      name: "Gladiator",
      director: "Ridley Scott",
      releaseYear:"2000" ,
      picture: "assets/gladiator.jpg",
      genre: ["Péplum","drame"],
      cast: [
        "Russell Crowe",
        "Joaquin Phoenix",
        "Connie Nielsen",
        "Oliver Reed",
      ],
      trailer: "https://youtu.be/P5ieIbInFpg",
    },

    {
    name: "Spider-Man: Homecoming",
    director: "	Jon Watts",
    releaseYear:"2017" ,
    picture: "assets/spider-man.jpg",
    genre: ["Super-héros"],
    cast: [
      "Tom Holland",
      "Michael Keaton",
      "Robert Downey Jr.",
      "Zendaya",
    ],
    trailer: "https://youtu.be/rk-dF1lIbIg",
    },
    
    {
    name: "Harry Potter à l'école des sorciers",
    director: "Chris Columbus",
    releaseYear:"2001" ,
    picture: "assets/harry.jpg",
    genre: ["fantastique"],
    cast: [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson",
      "Robbie Coltrane",
    ],
    trailer: "https://youtu.be/P1BGgqhVGAI",
    },

    {
    name: "Whiplash",
    director: "	Damien Chazelle",
    releaseYear:"2014" ,
    picture: "assets/whiplash.jpg",
    genre: ["Drame"],
    cast: [
      "Miles Teller",
      "J. K. Simmons",
      "Paul Reiser",
      "Melissa Benoist",
    ],
    trailer: "https://youtu.be/7d_jQycdQGo",
    },

    {
    name: "Lost in Translation",
    director: "	Sofia Coppola",
    releaseYear:"2003" ,
    picture: "assets/Lost.jpg",
    genre: ["Comédie dramatique"],
    cast: [
      "Bill Murray",
      "Scarlett Johansson",
    ],
    trailer: "https://youtu.be/W6iVPCRflQM",

    },


    {
    name: "Eternal Sunshine of the Spotless Mind",
    director: "	Michel Gondry",
    releaseYear:"2004" ,
    picture: "assets/Eternal.jpg",
    genre: ["Drame","Romance","Science-fiction"],
    cast: [
      "Jim Carrey",
      "Kate Winslet",
      "Kirsten Dunst",
      "Mark Ruffalo",
    ],
    trailer: "https://youtu.be/07-QBnEkgXU",
    },

    {
    name: "Le Voyage de Chihiro",
    director: "Hayao Miyazaki",
    releaseYear:"2001" ,
    picture: "assets/Chihiro.jpg",
    genre: ["animation"],
    cast: [
      "Rumi Hiiragi",
      "Miyu Irino",
      "Mari Natsuki",
      "Bunta Sugawara",
    ],
    trailer: "https://youtu.be/EhIZrZQoHuA",
    },
 
    {
    name: "5 Centimètres par seconde",
    director: "Makoto Shinkai",
    releaseYear:"2007" ,
    picture: "assets/centimetre.jpg",
    genre: ["animation"],
    cast: [
        "Ayaka Onoue",
        "Kenji Mizuhashi",
        "Satomi Hanamura",
        "Yoshimi Kondou",
    ],
    trailer: "https://youtu.be/wdM7athAem0",
      },

      {
      name: "Rogue One: A Star Wars Story",
      director: "	Gareth Edwards",
      releaseYear:"2016" ,
      picture: "assets/rogue.jpg",
      genre: ["	Science-fiction"],
      cast: [
        "Felicity Jones",
        "Diego Luna",
        "Ben Mendelsohn",
        "Forest Whitaker",
      ],
      trailer: "https://youtu.be/frdj1zb9sMY",
      },

      {
      name: "Les Choristes",
      director: "	Christophe Barratier",
      releaseYear:"2004" ,
      picture: "assets/choriste.jpg",
      genre: ["Comédie dramatique","musical"],
      cast: [
        "Gérard Jugnot",
        "François Berléand",
        "Jean-Baptiste Maunier",
        "Kad Merad",
      ],
      trailer: "https://youtu.be/qhYtVMoWFNQ",
        },
  
  ];
i=0
for (let elem of collection) {
  let carte=document.createElement("div")
  carte.className="carte"
  //image
  let image=document.createElement("img")
  image.src=elem["picture"]
  carte.appendChild(image)

  //genre+date
  let list=document.createElement("ul")
  list.className="carte__genre"
  carte.appendChild(list)
  for (let k of elem["genre"]){
    let item=document.createElement("li")
    item.textContent=k
    list.appendChild(item)
  }
  date=document.createElement("li")
  date.textContent=elem["releaseYear"]
  list.appendChild(date)
    
  

  //titre
  let titre=document.createElement("h2")
  titre.textContent=elem["name"]
  carte.appendChild(titre)

  //auhtor
  let author=document.createElement("h3")
  author.textContent=elem["director"]
  carte.appendChild(author)

  //footer
  let line=document.createElement("hr")
  carte.appendChild(line)
  let list_icon=document.createElement("ul")
  list_icon.className="carte__list_icon"
  let item_icon1=document.createElement("li")
  let item_icon2=document.createElement("li")
  list_icon.appendChild(item_icon1)
  list_icon.appendChild(item_icon2)
  let link_icon1=document.createElement("a")
  let link_icon2=document.createElement("a")
  link_icon1.href=elem["trailer"]
  item_icon1.appendChild(link_icon1)
  item_icon2.appendChild(link_icon2)
  let img_icon1=document.createElement("img")
  let img_icon2=document.createElement("img")
  link_icon1.appendChild(img_icon1)
  link_icon2.appendChild(img_icon2)
  img_icon1.src="assets/youtube.png"
  carte.appendChild(list_icon)




  document.getElementsByClassName("container")[0].appendChild(carte)
}