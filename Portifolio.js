let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');
    
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    //remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


//Typed Js
const typed = new Typed('.multiple-text',{
    strings: ['Desenvolvedor Frontend', 'Desenvolvedor Backend','Estudante da Fatec'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById('enviar-mensagem-btn').addEventListener('click', function(e) {
    e.preventDefault();
    var nome = document.querySelector('#contact input[type="text"][placeholder="Nome Completo"]').value;
    var email = document.querySelector('#contact input[type="email"][placeholder="Endereço de E-mail"]').value;
    var celular = document.querySelector('#contact input[type="number"][placeholder="Número do celular"]').value;
    var assunto = document.querySelector('#contact input[type="text"][placeholder="Assunto do E-mail"]').value;
    var mensagem = document.querySelector('#contact textarea').value;

    var destinatario = 'igorabiezer08@gmail.com';

    var link = 'mailto: ' + destinatario +
               '?subject=' + encodeURIComponent(assunto) +
               '&body=' + encodeURIComponent('Nome: ' + nome + '\n' +
                                              'Email: ' + email + '\n' +
                                              'Celular: ' + celular + '\n' +
                                              'Assunto: ' + assunto + '\n' +
                                              'Mensagem: ' + mensagem);

    window.location.href = link;
});