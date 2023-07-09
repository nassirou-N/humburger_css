
const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive = () => {
    console.log("hello");
    hamburgerMenu.classList.toggle('active');
};

hamburgerMenu.addEventListener('click',menuIsActive)