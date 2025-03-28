///სლაიდერი/////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    let images = ["images/1.PNG", "images/2.PNG", "images/3.PNG"];
    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length;
        document.querySelector(".background-img").src = images[index];
    }, 5000);
});
///მეტი ინფორმაცია თქვენზე////////////////////////////////////////////////////////////////////
        function fillProgressBars() {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight - 50 && !bar.classList.contains('filled')) {
                    bar.style.width = bar.getAttribute('data-percent') + '%';
                    bar.classList.add('filled');
                }
            });
        }

        window.addEventListener('scroll', fillProgressBars);
        window.addEventListener('load', fillProgressBars);;
///რეკომენდაციები//////////////////////////////////////////////////////////////////////////////
const slides = [
    {
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore..",
        image: "images/mau.png",
        name: "Mau Thomas",
        profession: "Graphic Designer"
    },
    {
        text: "if you want your son high level wrestling send him 2-3 years to dagestan and forget, six months one time you can call him.",
        image: "images/islam.PNG",
        name: "Islam Makhachev",
        profession: "MMA Fighter"
    },
    {
        text: "The trick to catching a liar, my dear friend, is not to confront them directly. No, no. Instead, you let them believe they have fooled you… until they are too comfortable to maintain the illusion",
        image: "images/hans.PNG",
        name: "Hans Landa",
        profession: "Standartenführer"
    }
];
let currentSlide = 0;

function updateSlide() {
    document.querySelector(".recommendation-text").innerText = slides[currentSlide].text;
    document.querySelector(".person").src = slides[currentSlide].image;
    document.querySelector(".recommendator-names").innerText = slides[currentSlide].name;
    document.querySelector(".profesions").innerText = slides[currentSlide].profession;
    
    document.querySelectorAll(".button").forEach((button, index) => {
        button.style.borderColor = index === currentSlide ? "#E93656" : "white";
    });
}
document.querySelectorAll(".button").forEach((button, index) => {
    button.addEventListener("click", () => {
        currentSlide = index;
        updateSlide();
    });
});
updateSlide();
/ბოლო პროექტები//////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".a-filter");
    const projects = document.querySelectorAll(".div-project");
    const cardContainer = document.querySelector(".card-projects");

    const categoryMap = {
        "work ideas": "word ideas design",
        "mockup": "3d mockup design",
        "psd design": "psd design",
        "logo": "3d logo",
        "presentation": "3d presentation",
        "icons": "3d icon"
    };

    filters.forEach(filter => {
        filter.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            
            const category = this.textContent.trim().toLowerCase();
            let firstVisible = null;
            
            projects.forEach(project => {
                const projectTitle = project.querySelector(".h4-hover-LP").textContent.trim().toLowerCase();
                
                if (category === "all" || projectTitle === categoryMap[category]) {
                    project.style.display = "block";
                    if (!firstVisible) {
                        firstVisible = project;
                    }
                } else {
                    project.style.display = "none";
                }
            });
            
            if (firstVisible) {
                cardContainer.prepend(firstVisible);
            }
        });
    });
});