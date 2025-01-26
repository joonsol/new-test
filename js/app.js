const section1 = document.querySelector('.section1')
// 적용
document.addEventListener('DOMContentLoaded', function () {

    section1.classList.add('ui-ani-appear')

});


const s3_slide = new Swiper(".s3_slide", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".s3_slide .swiper-button-next",
        prevEl: ".s3_slide .swiper-button-prev",
    },
});
const s5_slide = new Swiper(".s5_slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.s5_slide .swiper-pagination',
        clickable: true,

    },
    navigation: false,
    loop: true,


});


window.addEventListener('scroll', (event) => {
    scrollFunc()


})


const scrollFunc = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const qrCode = document.querySelector('.landing-qr')
    const section03 = document.querySelector('.section3');
    const section04 = document.querySelector('.section4');

    if (qrCode) {

        if (scrollTop > 10) {
            qrCode.classList.add('fix')
        }
        else {

            qrCode.classList.add('fix')
        }
    }
    if (scrollTop >= section03.offsetTop - 100) {
        section04.classList.add('ui-ani-appear')
    }

}
