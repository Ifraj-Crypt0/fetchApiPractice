const hamburgerIcon = document.getElementById('hamburger')

const hamburgerContainer= document.getElementById('hamburger-container')

const navbar = document.getElementById('navbar')

const hamburger = () => {
    hamburgerContainer.classList.remove('hidden')
    hamburgerIcon.classList.add('hidden')
    navbar.classList.remove('px-16')  
}