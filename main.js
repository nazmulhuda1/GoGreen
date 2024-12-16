// SHOW MENU

let line = document.querySelector('.navbar .ri-menu-line');
let menu = document.querySelector('.navbar ul');

line.addEventListener('click',()=>{
    menu.classList.toggle('showmenu')
})

window.addEventListener('scroll',()=>{
    let nav = document.querySelector('.navbar');
    if(scrollY > 50){
        nav.classList.add('navbarSticky')
    }
    else{
        nav.classList.remove('navbarSticky')
    }
})


// SERVICE SLIDER

var swiper = new Swiper('.ServicesSwiper',{
    loop:true,
    autoplay:{
        delay:3000,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
            spaceBetween:10,
        },
        640:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1024:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1400:{
            slidesPerView:4,
            spaceBetween:10,
        },
    }
});

// project slider
var swiper = new Swiper('.projectSwiper',{
    slidesPerView:3,
    spaceBetween:10,
    loop:true,
    autoplay:{
        delay:2000,
    },
    breakpoints:{
        1400:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:3,
        },
        900:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        500:{
            slidesPerView:1,
        },
        0:{
            slidesPerView:1,
            spaceBetween:10,
        },
    },
});

// TESTIMONIAL SLIDER
var swiper = new Swiper('.testimonialSwiper',{
    slidesPerView:2,
    spaceBetween:40,
    loop:true,
    autoplay:{
        delay:2000,
    },
    breakpoints:{
        1400:{
            slidesPerView:2,
        },
        1200:{
            slidesPerView:2,
        },
        900:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:1,
        },
        500:{
            slidesPerView:1,
        },
        0:{
            slidesPerView:1,
            spaceBetween:10,
        },
    },
});

// BRANDS SLIDER
var swiper = new Swiper('.brandSwiper',{
    slidesPerView:6,
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2000,
    },
    breakpoints:{
        1400:{
            slidesPerView:6,
        },
        1200:{
            slidesPerView:5,
        },
        900:{
            slidesPerView:5,
        },
        768:{
            slidesPerView:4,
        },
        500:{
            slidesPerView:3,
        },
        0:{
            slidesPerView:2,
            spaceBetween:10,
        },
    },
});
// TEAM SLIDER
var swiper = new Swiper ('.teamSwiper',{
    slidesPerView:3,
    spaceBetween:50,
    loop:true,
    autoplay:{
        delay:5000,
    },
    breakpoints:{
        1400:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:3,
        },
        900:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        500:{
            slidesPerView:1,
        },
        0:{
            slidesPerView:1,
            spaceBetween:10,
        },
    },
});