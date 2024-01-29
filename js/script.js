// // Toggle class active
// const navbarNav = document.querySelector('.navbar-nav');
// // saat hamburger diklik
// document.querySelector('#hamburger-menu').onclick = (e) => {
//     navbarNav.classList.toggle('active');
//     e.preventDefault();
// };

// // klik luar element

// const hamburger = document.querySelector('#hamburger-menu');
// const sb = document.querySelector('#search-btn');
// const sc = document.querySelector('#shopping-cart-button')

// document.addEventListener('click', function(e) {
//     if ( !hamburger.contains(e.target) && !navbarNav.contains(e.target) ) {
//         navbarNav.classList.remove('active');
        
//     }
//     if ( !sb.contains(e.target) && !searchForm.contains(e.target) ) {
//         searchForm.classList.remove('active');
   
//     }

//     if ( !sc.contains(e.target) && !shoppingCart.contains(e.target) ) {
//         shoppingCart.classList.remove('active');
        
//     }
// });

// // search toggle
// const searchBox = document.querySelector('#search-box');
// const searchForm = document.querySelector('.search-form');

// document.querySelector('#search-button').onclick = (e) => {
//     searchForm.classList.toggle('active');
//     searchBox.focus();
//     e.preventDefault();
// }

// // Shopping cart
// const shoppingCart = document.querySelector('.shopping-cart');
// document.querySelector('#shopping-cart-button').onclick = (e) => {
//     shoppingCart.classList.toggle('active');
//     e.preventDefault();
// } 

// // modal toggle class active

// const itemdetailModal = document.querySelector('#item-detail-modal');

// const itemdetailButton = document.querySelectorAll('.item-detail-button');

// itemdetailButton.forEach((btn) => {
//     btn.onclick = (e) => {
//         itemdetailModal.style.display = 'flex';
//         e.preventDefault();
//     }
// });



// // klik close modalbox

// document.querySelector('.modal .close-icon').onclick = (e) => {
//     itemdetailModal.style.display = 'none';
//     e.preventDefault();
// }

// // klik diluar modal {

// window.onclick = (e) => {
//     if (e.target === itemdetailModal) {
//         itemdetailModal.style.display = 'none';
//         e.preventDefault();
//     }
// }


// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
   
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
    
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
    
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};