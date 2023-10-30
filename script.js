const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

//

let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow")) {
            clickedLi = e.target.parentElement;
        } else {
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}

// 


// script contact 
const form = document.getElementById("inscription-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const cin = document.getElementById("cin").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Les expressions régulières pour la validation
    const nomPrenomRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;
    const cinRegex = /^[A-Za-z0-9]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

    if (!nomPrenomRegex.test(nom)) {
        alert("Le nom n'est pas valide");
        return;
    }

    if (!nomPrenomRegex.test(prenom)) {
        alert("Le prénom n'est pas valide");
        return;
    }

    if (!cinRegex.test(cin)) {
        alert("Le numéro de CIN n'est pas valide");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("L'adresse e-mail n'est pas valide");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Le numéro de téléphone n'est pas valide");
        return;
    }

    // Si toutes les validations passent, vous pouvez soumettre le formulaire ou effectuer d'autres actions
    alert("Inscription réussie !");
    form.reset();
});


// 
const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    leftButton = document.querySelector(".wrapper i.left"),
    rightButton = document.querySelector(".wrapper i.right");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    leftButton.style.display = carousel.scrollLeft == 0 ? "none" : "block";
    rightButton.style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

leftButton.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left
    carousel.scrollLeft -= firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
});

rightButton.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is right, add width value to the carousel scroll left
    carousel.scrollLeft += firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);





