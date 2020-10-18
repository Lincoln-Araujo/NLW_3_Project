// create map
const map = L.map("mapid").setView([-15.7765187,-47.8874646], 11.2);


// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
  
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    // remover icon 
    marker && map.removeLayer(marker)

    // add icon tileLayer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})



//  adicionar campo de foto

function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo está vazio, se sim, não adicionar ao conatiner de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #image
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove()
}

// select yes or no

function toggleSelect(event) {   

    // retirar a class. active dos botões
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'))

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // pegar o botão clicado


    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

    
    // verificar se sim ou não


}



function validate(event) {
    const form = event.currentTarget;
    const lat = form.querySelector("[name=lat]").value;
    
    // validar se lat e lng está vazio  
    if (lat == null || lat == undefined || lat == "") {
      event.preventDefault();
      document.querySelector(".map-container").classList.add('invalid');       
      alert("Clique em um ponto no mapa");   
      window.scrollTo(0,0); 
    }
  }