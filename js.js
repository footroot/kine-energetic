
// This code is for a sticky header that becomes fixed at the top of the viewport when scrolled past a certain point.
const stickyElement = document.getElementById('stickyElement');
const stickyOffset = 100; // The scroll distance after which it becomes sticky

window.addEventListener('scroll', () => {
  if (window.scrollY >= stickyOffset) {
    stickyElement.classList.add('sticky');
  } else {
    stickyElement.classList.remove('sticky');
  }
});



const checkpoint = 100;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".hero_picture").style.opacity = opacity;
    document.querySelector(".title").style.opacity = opacity;
});


// document.addEventListener('DOMContentLoaded', function () {
//     const p = document.querySelector('.title');

//     window.addEventListener('scroll', function () {
//         const scroll = window.scrollY; 

//         if (scroll >= 250) {
//             p.classList.add('shrink');
//         } else if (scroll === 0) {
//             p.classList.remove('shrink');
//         }
//     })
// });


