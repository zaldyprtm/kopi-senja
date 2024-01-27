// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// saat hamburger diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik luar close hamburger

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if ( !hamburger.contains(e.target) && !navbarNav.contains(e.target) ) {
        navbarNav.classList.remove('active');
    }
});