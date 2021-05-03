console.log("done");
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const contact = document.querySelector('.contact-link');
    const hide = document.querySelector('.hide');

    burger.addEventListener("click" , () => {
        contact.classList.toggle("nav-active");
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        hide.classList.toggle("active-burger");
    });
};

navSlide();