//header
let head=document.createElement("h1")
head.textContent="Aurélien's Collection"
main=document.getElementsByTagName("main")[0]
container=document.getElementsByClassName("container")[0]
main.insertBefore(head,container)


//boucle 
const request = fetch("collection.json");
const response= request.then((response)=>response.json())
response.then((json)=>{
  var collection=json["liste"];
  i=0
  for (let elem of collection) {
    let carte=document.createElement("div")
    carte.className="carte"
    //image
    let container_image=document.createElement("div")
    carte.appendChild(container_image)
    container_image.className="carte_image"
    let image=document.createElement("img")
    image.className="carte__img"
    image.src=elem["picture"]
    container_image.appendChild(image)
    //carte.appendChild(image)

    //genre+date
    let list=document.createElement("ul")
    list.className="carte__list"
    carte.appendChild(list)
    for (let k of elem["genre"]){
      let item=document.createElement("li")
      item.textContent=k
      item.className="carte__list--genre"
      list.appendChild(item)
    }
    date=document.createElement("li")
    date.textContent=elem["releaseYear"]
    date.className="carte__list--date"
    list.appendChild(date)
      

    //titre
    let titre=document.createElement("h2")
    titre.textContent=elem["name"]
    titre.className="carte__titre"
    carte.appendChild(titre)

    //plot
    let plot=document.createElement("p")
    plot.textContent=elem["plot"]
    plot.className="carte__plot"
    carte.appendChild(plot)

    //auhtor
    let author=document.createElement("h3")
    author.textContent=elem["director"]
    author.className="carte__author"
    carte.appendChild(author)

    //footer
    let line=document.createElement("hr")
    carte.appendChild(line)
    let list_icon=document.createElement("ul")
    list_icon.className="carte__list_icon"
    let item_icon1=document.createElement("li")
    let item_icon2=document.createElement("li")
    let item_icon3=document.createElement("li")
    list_icon.appendChild(item_icon1)
    list_icon.appendChild(item_icon2)
    list_icon.appendChild(item_icon3)
    let link_icon1=document.createElement("a")
    let link_icon2=document.createElement("a")
    let link_icon3=document.createElement("a")
    link_icon1.setAttribute('target', '_blank');
    link_icon2.setAttribute('target', '_blank');
    link_icon3.setAttribute('target', '_blank');
    link_icon1.href=elem["trailer"]
    link_icon2.href=elem["wiki"]
    link_icon3.href=elem["critic"]
    item_icon1.appendChild(link_icon1)
    item_icon2.appendChild(link_icon2)
    item_icon3.appendChild(link_icon3)
    let img_icon1=document.createElement("img")
    let img_icon2=document.createElement("img")
    let img_icon3=document.createElement("img")
    link_icon1.appendChild(img_icon1)
    link_icon2.appendChild(img_icon2)
    link_icon3.appendChild(img_icon3)
    img_icon1.src="assets/youtube.png"
    img_icon2.src="assets/wikipedia.png"
    img_icon3.src="assets/pop-corn.png"
    img_icon2.className="card__list_icon--wiki"
    carte.appendChild(list_icon)
    document.getElementsByClassName("container")[0].appendChild(carte)
}})