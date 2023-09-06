let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 

// scroll section
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                // document.querySelector(`header nav a[href*="#${id}"]`).classList.add('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};




const close_chat = document.querySelector('.fa-xmark');
const box = document.querySelector('#box');
const bouton_chat = document.querySelector('.fa-comments');
const form = document.querySelector('form');
const input = document.querySelector('input');
const box_message = document.querySelector('#box_message');


// Par défaut le tchat est cacher
box.style.display = 'none';

// Ferme le tchat
close_chat.addEventListener('click', () => {
    box.style.display = 'none';
    bouton_chat.style.display = 'block';
});

// Quand je clic sur le bouton tchat sa me ouvre la box tchat et sa me ferme le bouton chat
bouton_chat.addEventListener('click', () => {
    box.style.display = 'block';
    bouton_chat.style.display = 'none';
});

// Récupère les informations saisis par l'utilisateur et affiche dans le tchat
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let message;

    message = input.value;
    box_message.innerHTML += '<p>'+message+'</p>';

    input.value = '';
});

