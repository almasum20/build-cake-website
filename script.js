const menuBar = document.querySelector("#menu-bar");
const closeMenuBar = document.querySelector("#close-bar");
const navItems = document.querySelector(".nav-items");
const navItemsli = document.querySelectorAll(".nav-items li");


for(let i = 0; i < navItemsli.length; i++) {
    navItemsli[i].addEventListener("click", () => {
        navItems.classList.remove("active");
    });
}

// show nav items 
menuBar.addEventListener("click", () => {
    navItems.classList.toggle("active");
});

// close nav items 
closeMenuBar.addEventListener("click", () => {
    navItems.classList.remove("active");
});




const showPopupBtn = document.querySelector("#login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .button-link a");
// show form popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// hide form popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
            "show-signup"
        );
    });
});