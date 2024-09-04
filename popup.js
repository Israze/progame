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

// Close the popup when the close button is clicked
// closePopupBtn.addEventListener('click', () => {
//   popupOverlay.style.display = 'none';
// });

// Close the popup when clicking outside the popup content
popupOverlay.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});

window.addEventListener("scroll", closePopup)