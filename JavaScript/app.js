document.addEventListener("DOMContentLoaded", function() {
    let images = ["images/1.PNG", "images/2.PNG", "images/3.PNG"];
    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length;
        document.querySelector(".background-img").src = images[index];
    }, 5000);
});