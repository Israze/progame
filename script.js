document.addEventListener('click', function(event) {
    const checkbox = document.querySelector('.hamburger .checkbox');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
  
    // Check if the click is outside the nav menu and hamburger container
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      checkbox.checked = false; // Uncheck the checkbox to close the menu
    }
  });
  
  window.addEventListener('scroll', function() {
    const checkbox = document.querySelector('.hamburger .checkbox');
    checkbox.checked = false; // Uncheck the checkbox to close the menu
  });
  
  document.addEventListener('scroll', function() {
    const section4 = document.getElementById('section4');
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
  
    // Get the position of section 4 relative to the viewport
    const section4Rect = section4.getBoundingClientRect();
    const section4Top = section4Rect.top;
    const section4Bottom = section4Rect.bottom;
  
    // Check if the top of section 4 is at the top of the viewport
    // and if its bottom is still within the viewport.
    if (section4Top <= 0 && section4Bottom >= 0) {
      // User is strictly in section 4
      header.classList.add('nav-link.hidden');
      hamburger.classList.add('inactive');
      
    } else {
      // User is not strictly in section 4
      header.classList.remove('nav-link.hidden');
      hamburger.classList.remove('inactive');
    }
  });
  

// href routing

document.getElementById('project-button').addEventListener('click', function() {
    window.location.href = 'projects.html';
  });


  document.addEventListener('DOMContentLoaded', function() {
    const roleElement = document.querySelector('.role');
    const roles = ["Web Developer", "Software Engineer", "AI Enthusiast"]; // Array of roles
    const typingSpeed = 50; // Faster typing speed for smoothness
    const erasingSpeed = 30; // Faster erasing speed for smoothness
    const delayBetweenRoles = 1500; // Delay before starting to erase
    const delayAfterErasing = 300; // Shorter delay after erasing before starting to type next role
    let roleIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function typeAndErase() {
        const currentRole = roles[roleIndex];

        if (!isErasing && charIndex < currentRole.length) {
            roleElement.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeAndErase, typingSpeed);
        } else if (isErasing && charIndex > 0) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeAndErase, erasingSpeed);
        } else if (!isErasing && charIndex === currentRole.length) {
            setTimeout(() => {
                isErasing = true;
                setTimeout(typeAndErase, erasingSpeed);
            }, delayBetweenRoles);
        } else if (isErasing && charIndex === 0) {
            isErasing = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeAndErase, delayAfterErasing);
        }
    }

    typeAndErase(); // Start the typing/erasing loop
});
