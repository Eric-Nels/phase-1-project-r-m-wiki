/* function displayAPIInfo() {
    // Access the info div
    const infoDiv = document.getElementById('card-container');
  
    // API endpoint
    const url = 'https://rickandmortyapi.com/api/character';
  
    // Fetch data from the API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Create a container for each card
        const container = document.createElement('div');
        container.classList.add('container');
  
        // Iterate through the data and create a card for each item
        data.results.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('card');

          const imgCard = document.createElement('div');
          imgCard.classList.add('imgCard')

          const hiddenText = document.createElement('ul');
          hiddenText.classList.add('hidden-text');
          hiddenText.textContent = [
            item.status,
            item.gender,
            item.origin.name
          ];
  
          // Create an image element and set its src attribute
          const img = document.createElement('img');
          img.src = item.image;
          img.alt = item.name;
  
          // Create a heading element and set its text content
          const heading = document.createElement('h2');
          heading.textContent = item.name;
  
          // Create a paragraph element and set its text content
          const paragraph = document.createElement('p');
          paragraph.textContent = item.species;

        imgCard.addEventListener('mouseover', () => {
            img.style.opacity = 0;
          });

          imgCard.addEventListener('mouseleave', () => {
            img.style.opacity = 1;
        });

          // Create a like button element and set its text content
        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.textContent = 'Like';
  
          // Append the image, heading, and paragraph elements to the card
          imgCard.appendChild(img);
          imgCard.appendChild(hiddenText);
          card.appendChild(imgCard);
          card.appendChild(heading);
          card.appendChild(paragraph);
          card.appendChild(likeButton);
  
          // Append the card to the container
          container.appendChild(card);
        });
  
        // Append the container to the info div
        infoDiv.appendChild(container);
      })
      .catch(error => console.error(error));
  }
  
  // Call the displayAPIInfo function on page load
  window.addEventListener('load', displayAPIInfo); 
*/

function displayAPIInfo() {
    // Access the info div
    const infoDiv = document.getElementById('card-container');

    // API endpoint
    const url = 'https://rickandmortyapi.com/api/character';

    // Fetch data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a container for each card
            const container = document.createElement('div');
            container.classList.add('container');

            // Iterate through the data and create a card for each item
            data.results.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const imgCard = document.createElement('div');
                imgCard.classList.add('imgCard');

                const hiddenText = document.createElement('ul');
                hiddenText.classList.add('hidden-text');
                hiddenText.textContent = [
                    item.status,
                    item.gender,
                    item.origin.name
                ];

                // Create an image element and set its src attribute
                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.name;

                // Create a heading element and set its text content
                const heading = document.createElement('h2');
                heading.textContent = item.name;

                // Create a paragraph element and set its text content
                const paragraph = document.createElement('p');
                paragraph.textContent = item.species;

                // Create a like button element and set its text content
                const likeButton = document.createElement('button');
                likeButton.classList.add('like-button');
                likeButton.textContent = 'Like';

                const heart = document.createElement('span');
                heart.classList.add('heart-icon');

                // Append the image, heading, and paragraph elements to the card
                imgCard.appendChild(img);
                imgCard.appendChild(hiddenText);
                card.appendChild(imgCard);
                card.appendChild(heading);
                card.appendChild(paragraph);
                card.appendChild(likeButton);
                card.appendChild(heart);

               

                // Append the card to the container
                container.appendChild(card);
            });

            // Append the container to the info div
            infoDiv.appendChild(container);

            // Add event listeners to the checkboxes
            const humanCheckbox = document.getElementById('human');
            const alienCheckbox = document.getElementById('alien');

            humanCheckbox.addEventListener('change', () => {
                filterCardsBySpecies('Human');
            });

            alienCheckbox.addEventListener('change', () => {
                filterCardsBySpecies('Alien');
            });
        })
        .catch(error => console.error(error));


function filterCardsBySpecies(species) {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const speciesParagraph = card.querySelector('p');
  
      if (speciesParagraph.textContent !== species) {
        card.style.display = 'none';
      } else {
        card.style.display = '';
      }
    });
  }
  
  const form = document.getElementById('filter-form');
  const checkboxes = form.querySelectorAll('input[type=checkbox]');
  
  // Add event listener to each checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // Get checked status of all checkboxes
      const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
  
      // If no checkboxes are checked, show all cards
      if (checkedCheckboxes.length === 0) {
        showAllCards();
        return;
      }
  
      // Get selected species
      const selectedSpecies = checkedCheckboxes.map(checkbox => checkbox.value);
  
      // Show cards matching selected species
      showCardsBySpecies(selectedSpecies);
    });
  })
};


// Call the displayAPIInfo function on page load
window.addEventListener('load', displayAPIInfo);

