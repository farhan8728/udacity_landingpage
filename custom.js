$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


let toTop = document.querySelector('.totop');

window.addEventListener('scroll',farhan)

function farhan(){
    if(window.pageYOffset > 300){
        toTop.classList.add('active')
    }
    else{
        toTop.classList.remove('active')
    }
}