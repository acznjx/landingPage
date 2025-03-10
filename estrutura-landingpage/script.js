// Inicializa o mapa
var map = L.map('map').setView([-23.55052, -46.633308], 13); // São Paulo, Brasil

// Adiciona um tile layer gratuito (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona um marcador
L.marker([-23.55052, -46.633308]).addTo(map)
  .bindPopup('São Paulo, Brasil')
  .openPopup();
