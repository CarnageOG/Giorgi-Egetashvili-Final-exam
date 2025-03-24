// ///.1.////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//     let images = ["images/1.PNG", "images/2.PNG", "images/3.PNG"];
//     let index = 0;
//     setInterval(() => {
//         index = (index + 1) % images.length;
//         document.querySelector(".background-img").src = images[index];
//     }, 5000);
// });
// ///.2.////////////////////////////////////////////////////////////////////
//         function fillProgressBars() {
//             const progressBars = document.querySelectorAll('.progress');
//             progressBars.forEach(bar => {
//                 const rect = bar.getBoundingClientRect();
//                 const windowHeight = window.innerHeight;
//                 if (rect.top < windowHeight - 50 && !bar.classList.contains('filled')) {
//                     bar.style.width = bar.getAttribute('data-percent') + '%';
//                     bar.classList.add('filled');
//                 }
//             });
//         }

//         window.addEventListener('scroll', fillProgressBars);
//         window.addEventListener('load', fillProgressBars);;
// //////////////////////////////////////////////////////////////////////////

