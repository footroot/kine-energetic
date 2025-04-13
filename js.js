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


