
// FIltro de Imóveis
function filterProperties() {
    const city = document.getElementById('city-input').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    const minBedrooms = parseInt(document.getElementById('min-bedrooms').value) || 0;
    const minBathrooms = parseInt(document.getElementById('min-bathrooms').value) || 0;
  
    const propertyCards = document.querySelectorAll('.property-card');
  
    propertyCards.forEach(card => {
      const price = parseFloat(card.getAttribute('data-price'));
      const location = card.getAttribute('data-location').toLowerCase();
  
      const bedrooms = parseInt(card.getAttribute('data-bedrooms')) || 0;
      const bathrooms = parseInt(card.getAttribute('data-bathrooms')) || 0;
  
      const matchesCity = location.includes(city);
      const matchesPrice = price >= minPrice && price <= maxPrice;
      const matchesBedrooms = bedrooms >= minBedrooms;
      const matchesBathrooms = bathrooms >= minBathrooms;
  
      if (matchesCity && matchesPrice && matchesBedrooms && matchesBathrooms) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  // Filtro de Imóveis


  //Carrossel de Depoimentos
  const carousel = document.querySelector('.carousel');
  let clone = carousel.innerHTML;
  carousel.innerHTML += clone;
  let index = 0;
  function moveCarousel() {
    index++;
    if (index >= 6) {
      index = 0;
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(0)`;
    } else {
      carousel.style.transition = 'transform 1.5s ease-in-out';
      carousel.style.transform = `translateX(-${index * 33.33}%)`;
    }
  }
  setInterval(moveCarousel, 5000);
  // Carrossel de Depoimentos

  
// Formulário Flutuante
document.addEventListener("DOMContentLoaded", function() {
  // Exibe o formulário e o overlay após o carregamento
  setTimeout(() => {
    document.getElementById("contactForm").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  }, 500);
});

function toggleForm() {
  let form = document.getElementById("contactForm");
  let overlay = document.getElementById("overlay");

  // Remover a classe 'show' para ocultar o formulário e o overlay
  form.classList.remove("show");
  overlay.classList.remove("show");

  // Espera o tempo da animação para definir o display como 'none'
  setTimeout(() => {
    form.style.display = "none";
  }, 500);

  // Redefinir a opacidade e a transformação do formulário para a animação de saída
  form.style.opacity = "0";
  form.style.transform = "scale(0.8) translateY(-50px)";
}

function submitForm() {
  // Coleta os valores dos campos
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;

  // Validação dos campos
  if (!name || !number || !email) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validação do número (deve ser um número válido)
  const phonePattern = /^[0-9]{10,11}$/; // Altere para o formato que desejar (ex: 10 ou 11 dígitos)
  if (!phonePattern.test(number)) {
    alert("Por favor, insira um número de telefone válido.");
    return;
  }

  // Validação do email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  // Caso a validação passe, envie os dados para o servidor
  const formData = {
    name: name,
    number: number,
    email: email
  };

  // Enviar os dados para o servidor via fetch
  fetch('YOUR_SERVER_URL_HERE', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Sucesso:', data);
    alert("Formulário enviado com sucesso!");
    toggleForm(); // Fecha o formulário após o envio
  })
  .catch((error) => {
    console.error('Erro:', error);
    alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
  });
}

function submitForm() {
  // Coleta os valores dos campos
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;

  // Validação dos campos
  if (!name || !number || !email) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validação do número (deve ser um número válido)
  const phonePattern = /^[0-9]{10,11}$/; // Altere para o formato que desejar (ex: 10 ou 11 dígitos)
  if (!phonePattern.test(number)) {
    alert("Por favor, insira um número de telefone válido.");
    return;
  }

  // Validação do email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  // Se os dados estiverem corretos, apenas feche o formulário sem enviar os dados
  alert("Formulário válido! Agora, fechando o formulário.");

  // Fechar o formulário (sem enviar os dados)
  toggleForm();
}

// Formulário Flutuante