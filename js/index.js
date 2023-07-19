// Hamburguer Menu
function toggleMenu() {
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburguer-icon')

  menu.classList.toggle('open')
  icon.classList.toggle('open')
}

window.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu-links a')

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
})

window.addEventListener('scroll', () => {
  const scrollNav = document.getElementById('scroll-nav')
  if (window.scrollY > 0) {
    scrollNav.classList.add('scroll-active')
  } else {
    scrollNav.classList.remove('scroll-active')
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.nav-links a')

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
})

// Dark Mode

function changeColorScheme(newColorScheme) {
  localStorage.colorScheme = newColorScheme

  document.body.dataset.theme = newColorScheme
  return
}

function toggleColorScheme() {
  const newColorScheme = localStorage.colorScheme === 'dark' ? 'light' : 'dark'
  return changeColorScheme(newColorScheme)
}

const themeToggle = document.getElementById('theme-toggle')

if (themeToggle) {
  themeToggle.addEventListener('click', e => {
    toggleColorScheme()
  })
}

if (localStorage.colorScheme) {
  document.body.dataset.theme = localStorage.colorScheme
} else if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  changeColorScheme('dark')
}

// Listen for changes to the users preferences
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light'
    changeColorScheme(newColorScheme)
  })

// Animando texto

const textElement = document.querySelector('.section__text__p2')
const typingAnimationElement = document.getElementById('typing-animation')

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
    }, 2000) // Tempo de espera antes de reiniciar a animação (em milissegundos)
  }
}

startTypingAnimation()
