const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

function toggleMobileMenu() {
  header.classList.toggle("show-mobile-menu");
}

function closeMobileMenu() {
  hamburgerBtn.click();
}

hamburgerBtn.addEventListener("click", toggleMobileMenu);
closeMenuBtn.addEventListener("click", closeMobileMenu);


//FAQ

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



// script contact 
const form = document.getElementById("inscription-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const cin = document.getElementById("cin").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

  
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

    alert("Inscription réussie !");
    form.reset();
});


// carpusel
const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    leftButton = document.querySelector(".wrapper i.left"),
    rightButton = document.querySelector(".wrapper i.right");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    leftButton.style.display = carousel.scrollLeft == 0 ? "none" : "block";
    rightButton.style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

leftButton.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; 

    carousel.scrollLeft -= firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
});

rightButton.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; 
    carousel.scrollLeft += firstImgWidth;
    setTimeout(() => showHideIcons(), 60); 
});
