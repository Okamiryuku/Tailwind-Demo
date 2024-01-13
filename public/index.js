const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

if(document.URL.includes('index.html')) {
    document.querySelector('#home-li').classList.add('font-bold')
    home.classList.remove('border-white')
    home.classList.add('border-primary')
}

if(document.URL.includes('about.html')) {
    document.querySelector('#about-li').classList.add('font-bold')
    about.classList.remove('border-white')
    about.classList.add('border-primary')
}

if(document.URL.includes('contact.html')) {
    document.querySelector('#contact-li').classList.add('font-bold')
    contact.classList.remove('border-white')
    contact.classList.add('border-primary')
}