$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 3,

        responsive:[
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow:2
                },
               
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
})

let btn = document.querySelector('.toggle-btn'),
    text = document.querySelector('.nav'),
    ul = document.querySelector('.ul'),
    img = document.querySelector('.images'),
    title = document.querySelector('.title'),
    menu_li = document.querySelectorAll('.elem'),
    menu_img = document.querySelectorAll('.bg');


btn.addEventListener('click', function() {
    if (text.classList.contains('width_nav') === true) {
        text.classList.remove('width_nav');
        text.classList.add('back_nav');

    } else if (text.classList.contains('width_nav') === false){
        text.classList.add('width_nav');
        text.classList.remove('back_nav');

    }

    ul.classList.toggle('opacity');

})