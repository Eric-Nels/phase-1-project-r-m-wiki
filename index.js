const container = document.createElement('div');
container.classList.add('container');

function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  const imgCard = document.createElement('div');
  imgCard.classList.add('imgCard');

  const hiddenText = document.createElement('ul');
  hiddenText.classList.add('hidden-text');

  const li1 = document.createElement('li');
  li1.classList.add('status');
  const li2 = document.createElement('li');
  li2.classList.add('gender');
  const li3 = document.createElement('li');
  li3.classList.add('origin');
  
  li1.textContent = item.status;
  li2.textContent = item.gender;
  li3.textContent = item.origin.name;
  
  hiddenText.appendChild(li1);
  hiddenText.appendChild(li2);
  hiddenText.appendChild(li3); 

  const img = document.createElement('img');
  img.classList.add('img')
  
  img.src = item.image;
  img.alt = item.name;

  const heading = document.createElement('h2');
  heading.textContent = item.name;

  const paragraph = document.createElement('p');
  paragraph.textContent = item.species;

  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');
  likeButton.textContent = 'Like';

  const heart = document.createElement('span');
  heart.classList.add('heart-icon');

  imgCard.appendChild(img);
  imgCard.appendChild(hiddenText);
  card.appendChild(imgCard);
  card.appendChild(heading);
  card.appendChild(paragraph);
  card.appendChild(likeButton);
  card.appendChild(heart);
  container.appendChild(card);

  likeButton.addEventListener('click', () => {
    heart.classList.toggle('filled');
  });

  imgCard.addEventListener('mouseover', () => {
    img.style.opacity = 0;
  });
    
  imgCard.addEventListener('mouseleave', () => {
    img.style.opacity = 1;
  });
};

function displayAPIInfo() {
  const url = 'https://rickandmortyapi.com/api/character';
  const infoDiv = document.getElementById('card-container');
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(item => {
        createCard(item);     
      });
      infoDiv.appendChild(container);
    })
    .catch(error => console.error(error));           
};

document.addEventListener('DOMContentLoaded', displayAPIInfo);

function filterCardsBySpecies(species) {
  const cards = document.querySelectorAll('.card');
  const humanCheckbox = document.getElementById('human');
  const alienCheckbox = document.getElementById('alien');
  cards.forEach(card => {
    const speciesParagraph = card.querySelector('p');

      if (humanCheckbox.checked === false && alienCheckbox.checked === false) {
          card.style.display = '';
      } else if (humanCheckbox.checked === true && alienCheckbox.checked === true) {
          card.style.display = ''
      } else if (speciesParagraph.textContent !== species) {
      card.style.display = 'none';
    } else {
      card.style.display = '';
    }
  });
};

document.addEventListener('DOMContentLoaded', filterCardsBySpecies);

function filterEvent() {
  const humanCheckbox = document.getElementById('human');
  const alienCheckbox = document.getElementById('alien');
  console.log(humanCheckbox)
  
  humanCheckbox.addEventListener('change', () => {
    filterCardsBySpecies('Human');
  });
  
  alienCheckbox.addEventListener('change', () => {
    filterCardsBySpecies('Alien');
  });
}

document.addEventListener('DOMContentLoaded', filterEvent)

