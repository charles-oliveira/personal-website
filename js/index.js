const menuLinks = document.querySelectorAll('.menu-links a')
const scrollNav = document.getElementById('scroll-nav')
const navLinks = document.querySelectorAll('.nav-links a')
const themeToggle = document.getElementById('theme-toggle')
const textElement = document.querySelector('.section__text__p2')
const typingAnimationElement = document.getElementById('typing-animation')

// Hamburguer Menu
function toggleMenu() {
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburguer-icon')
  menu.classList.toggle('open')
  icon.classList.toggle('open')
}

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    toggleMenu()
    const target = document.querySelector(link.getAttribute('href'))
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    scrollNav.classList.add('scroll-active')
  } else {
    scrollNav.classList.remove('scroll-active')
  }
})

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const target = document.querySelector(link.getAttribute('href'))
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})

// Dark Mode
function changeColorScheme(newColorScheme) {
  localStorage.colorScheme = newColorScheme
  document.body.dataset.theme = newColorScheme
}

function toggleColorScheme() {
  const newColorScheme = localStorage.colorScheme === 'dark' ? 'light' : 'dark'
  changeColorScheme(newColorScheme)
}

themeToggle.addEventListener('click', toggleColorScheme)

if (localStorage.colorScheme) {
  document.body.dataset.theme = localStorage.colorScheme
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  changeColorScheme('dark')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const newColorScheme = e.matches ? 'dark' : 'light'
  changeColorScheme(newColorScheme)
})

// Animando texto
const text = '_Software Developer'
let index = 0

function startTypingAnimation() {
  if (index < text.length) {
    typingAnimationElement.textContent += text.charAt(index)
    index++
    setTimeout(startTypingAnimation, 100) // Ajuste a velocidade da digitação aqui (em milissegundos)
  } else {
    // Reiniciar a animação
    setTimeout(() => {
      typingAnimationElement.textContent = ''
      index = 0
      startTypingAnimation()
    }, 2000); // Tempo de espera antes de reiniciar a animação (em milissegundos)
  }
}

startTypingAnimation()
