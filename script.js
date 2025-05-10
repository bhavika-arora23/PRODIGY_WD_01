// Navbar color on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  // Typing effect
  const texts = ["Push Your Limits", "Train Like a Beast", "Be Your Best"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
  
    document.querySelector('.typed-text').textContent = letter;
    if (letter.length === currentText.length) {
      setTimeout(() => {
        erase();
      }, 2000);
    } else {
      setTimeout(type, 100);
    }
  }
  function erase() {
    letter = currentText.slice(0, --index);
    document.querySelector('.typed-text').textContent = letter;
    if (letter.length === 0) {
      count++;
      setTimeout(type, 500);
    } else {
      setTimeout(erase, 50);
    }
  }
  type();
  