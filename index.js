function displayAPIInfo() {
    //access card container div
    const infoDiv = document.getElementById('card-container');

    //API endpoint
    const url = 'https://rickandmortyapi.com/api/character';

    //fetch data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //create a container for each card
            const container = document.createElement('div');
            container.classList.add('container');

            //iterate through the data and create a card for each item
            data.results.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                //create card for img and hidden text
                const imgCard = document.createElement('div');
                imgCard.classList.add('imgCard');

                //create ul for hidden text 
                const hiddenText = document.createElement('ul');
                hiddenText.classList.add('hidden-text');
                //create li for data
                const li1 = document.createElement('li');
                li1.classList.add('status');
                const li2 = document.createElement('li');
                li2.classList.add('gender');
                const li3 = document.createElement('li');
                li3.classList.add('origin');
                //set li text content
                li1.textContent = item.status;
                li2.textContent = item.gender;
                li3.textContent = item.origin.name;
                //append li to ul
                hiddenText.appendChild(li1);
                hiddenText.appendChild(li2);
                hiddenText.appendChild(li3); 
        

                //create an image element
                const img = document.createElement('img');
                //set its src and alt attribute
                img.src = item.image;
                img.alt = item.name;

                //create a heading element and set its text content
                const heading = document.createElement('h2');
                heading.textContent = item.name;

                //create a paragraph element and set its text content
                const paragraph = document.createElement('p');
                paragraph.textContent = item.species;

                //create a like button element and set its text content
                const likeButton = document.createElement('button');
                likeButton.classList.add('like-button');
                likeButton.textContent = 'Like';

                const heart = document.createElement('span');
                heart.classList.add('heart-icon');

                //append the image, heading, and paragraph elements to the card
                imgCard.appendChild(img);
                imgCard.appendChild(hiddenText);
                card.appendChild(imgCard);
                card.appendChild(heading);
                card.appendChild(paragraph);
                card.appendChild(likeButton);
                card.appendChild(heart);

                //toggle the filled class on the heart icon
                likeButton.addEventListener('click', () => {
                    heart.classList.toggle('filled');
                  });

                //add mouseover event to image
                imgCard.addEventListener('mouseover', () => {
                    img.style.opacity = 0;
                  });
        
                //add mouseleave event to image
                imgCard.addEventListener('mouseleave', () => {
                    img.style.opacity = 1;
                });

                //append the card to the container
                container.appendChild(card);
            });

            //append the container to the info div
            infoDiv.appendChild(container);

            

            //access checkboxes 
            const humanCheckbox = document.getElementById('human');
            const alienCheckbox = document.getElementById('alien');

            //add event listeners to the checkboxes
            humanCheckbox.addEventListener('change', () => {
                filterCardsBySpecies('Human');
            });

            alienCheckbox.addEventListener('change', () => {
                filterCardsBySpecies('Alien');
            });
        })
        .catch(error => console.error(error));

  //create filter function
  function filterCardsBySpecies(species) {
    //access cards and checkboxes
    const cards = document.querySelectorAll('.card');
    const humanCheckbox = document.getElementById('human');
    const alienCheckbox = document.getElementById('alien');
    //iterate through the data and display cards that meet the requirements 
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
};

// Call the displayAPIInfo function on page load
window.addEventListener('load', displayAPIInfo);