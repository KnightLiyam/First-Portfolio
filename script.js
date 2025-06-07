

AOS.init();

window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.classList.add('nav-visible');
        nav.classList.remove('nav-hidden');
    } 
    else 
    {
        nav.classList.remove('nav-visible');
        nav.classList.add('nav-hidden');
    }
});

