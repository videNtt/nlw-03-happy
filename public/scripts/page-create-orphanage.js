// create map
const map = L.map('mapid').setView([-21.1986118,-50.531232], 13);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  // remover icon
  marker && map.removeLayer(marker)

  // add icon layer
  marker = L.marker([lat, lng], {icon})
  .addTo(map)
})

// add photo field

function addPhotoField() {
  // pegar o container de fotos id #images
  const container = document.querySelector('#images')

  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')

  // realização do clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  // verifica se o campo está vazio e não permitir clonar
  const input = newFieldContainer.children[0]
  if (input.value == "") {
    return
  }
    
  // limpar o campo antes de adicionar ao container de imagens
  input.value = ""

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deletePhotoField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length <= 1) {
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  // apagar o campo
  span.parentNode.remove()
}

// selecionar sim ou não

function toggleSelect(event) {
  // remover a class .active dos botões
  document.querySelectorAll(".button-select button")
  .forEach(button => button.classList.remove("active"))

  // colocar a class .active no botão clicado
  const button = event.currentTarget
  button.classList.add("active")

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector("[name=open_on_weekends]")

  // verificar se o botão é SIM ou NÃO
  input.value = button.dataset.value
}

function validate(event) {
  const inputLat = document.querySelector("[name=lat]");
  const inputLng = document.querySelector("[name=lng]");

  if (inputLat.value == "" || inputLng.value == "") {
    alert('Selecione um ponto no mapa');
    event.preventDefault();
  }
}