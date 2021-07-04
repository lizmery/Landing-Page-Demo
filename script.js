const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const menu_item = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#0a121b';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

/* Accordion */
const accordionQuestions = document.querySelectorAll('.question');

accordionQuestions.forEach(question => {
    question.addEventListener('click', event => {
        question.classList.toggle('active');

        const accordionAnswer = question.nextElementSibling;
        if (question.classList.contains('active')) {
            accordionAnswer.style.maxHeight = accordionAnswer.scrollHeight + 'px';
        } else {
            accordionAnswer.style.maxHeight = 0;
        }
    });
});
