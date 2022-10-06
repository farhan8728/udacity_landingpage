$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    autoplay:false,
    autoplayTimeout:1000,
    // stagePadding:50,
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
        toTop.classList.add('active123')
    }
    else{
        toTop.classList.remove('active123')
    }
}




var deadLine = new Date('October 9, 2022 23:59:00').getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var diff =  deadLine - now;

    var s = Math.floor(diff / 1000);

    var m = Math.floor(s/60);

    var h = Math.floor(m/60);

    var d = Math.floor(h/24);

    s %= 60;
    m %= 60;
    h %= 24;




    if(h < 10){
        h = '0' + h;
    }

    if(m < 10){
        m = '0' + m;
    }


    if(s < 10){
        s = '0' + s;
    }


    document.getElementById('days').innerText = `0${d}`;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = `${s}`;


    if(diff < 0 ){
        clearInterval(x);
        document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    }


},1000)
