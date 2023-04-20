let menu = document.querySelector("#menu-btn");
let navbarList = document.querySelector(".header .navbar .navlist");
let navbar = document.querySelector(".header .navbar");
let contactInfo = document.querySelector(".header .contact-info");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarList.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbarList.classList.remove("active");

  if (window.scrollY > 60) {
    navbar.classList.add("active");
    contactInfo.style = "transform: translateY(-100%)";
    if (window.innerWidth >= 880) {
      navbar.style = "transform: translateY(-100%)";
    } else {
      navbar.style = "transform: translateY(0)";
    }
  } else {
    navbar.classList.remove("active");
    contactInfo.style = "transform: translateY(0)";
    navbar.style = "transform: translateY(0)";
  }
};
