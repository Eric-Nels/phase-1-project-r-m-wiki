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
          console.log(item)

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