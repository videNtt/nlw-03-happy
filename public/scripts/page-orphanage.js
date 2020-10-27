const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-21.1986118,-50.531232], 13);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker
// posso usar o shorthand e colocar o parametro só como icon: icon

L.marker([-21.1986118,-50.531232], { icon })
.addTo(map)

function selectImage(event) {

  // remover todas as classes .active
  const button = event.currentTarget
  const buttons = document.querySelectorAll(".images button")

  buttons.forEach((button) => {
    button.classList.remove("active")
  })
  
  // selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // atualizar o container da imagem
  imageContainer.src = image.src

  // adicionar a classe .active para este botão
  button.classList.add("active")
}