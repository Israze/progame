// Select the button and overlay elements
const contactButton = document.querySelector('.contact-button');
const reachOutButton = document.querySelector('.reach-out-button')
const popupOverlay = document.getElementById('popupOverlay');

function closePopup() {
    popupOverlay.style.display = 'none';
  }

// Show the popup when the button is clicked
contactButton.addEventListener('click', () => {
    console.log("it clicks")
  popupOverlay.style.display = 'flex';
});

reachOutButton.addEventListener('click', () => {
    console.log("it clicks")
  popupOverlay.style.display = 'flex';
});


popupOverlay.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});

window.addEventListener("scroll", closePopup)