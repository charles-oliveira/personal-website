// ============ Menu Show and Hidden ============

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

// ========== Menu Show ============
// Validate if constants exists
if (navToggle) {
  navToggle.addEventListener('click', (e) => {
    e.preventDefault()
    navMenu.classList.add('show-menu')
  })
}

// ========== Menu Show ============
// Validate if constants exists
if (navClose) {
  navClose.addEventListener('click', (e) => {
    e.preventDefault()
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))
