gsap.registerPlugin(ScrollTrigger)

//Nav Bar//

const navbar = document.getElementById('nav-bar');

const navbarYpos = navbar.offsetHeight;


function displayNavBar() {
    if (window.pageYOffset > 150) {
        navbar.style.boxShadow = '0px 0px 20px rgba(0,0,0,0.90)';
    } else {
        navbar.style.boxShadow = ''    
    }
}

window.addEventListener('scroll', displayNavBar);

//Subtitle//

const subtitleEnglish = document.getElementById('subtitle-english')
const subtitleSpanish = document.getElementById('subtitle-spanish')

subtitleSpanish.addEventListener('mouseenter', showSubtitle)
subtitleSpanish.addEventListener('mouseleave', hideSubtitle)

function showSubtitle(){
    subtitleEnglish.style.opacity = "0";
    subtitleSpanish.style.opacity = "1";
}

function hideSubtitle(){
    subtitleEnglish.style.opacity = "1";
    subtitleSpanish.style.opacity = "0";
}

//Card background

const cardBackgroundAll = document.querySelectorAll('.card-background');

function changeCardBackgroundDimensions(){
    cardBackgroundAll.forEach(cardBackground=>{
    let cardRect = cardBackground.parentElement.getBoundingClientRect()
    cardBackground.style.width = `${cardRect.width}px`;
    cardBackground.style.height = `${cardRect.height}px`;
    })   
}

changeCardBackgroundDimensions()


//Title//

const contentTitle = document.querySelector('.content-title');
const tilde = document.getElementById('tilde');
const titleContainer = document.querySelector('.intro-container')

let titleRect = contentTitle.getBoundingClientRect();
let bottom = titleContainer.getBoundingClientRect().bottom;

window.addEventListener('resize', ()=>{
    titleRect = contentTitle.getBoundingClientRect();
    bottom = titleContainer.getBoundingClientRect().bottom;
    changeCardBackgroundDimensions()
})
window.addEventListener('scroll', ()=>{
    titleRect = contentTitle.getBoundingClientRect();
    bottom = titleContainer.getBoundingClientRect().bottom;
    
})


let y = 100;
let x = 500;

let moveX = 1;
let moveY = -1;

tilde.style.left = `${x}px`;
tilde.style.top = `${y}px`;

let moveTilde = ()=>{
    
    if (y >= bottom - 30 || y <= 40){
        moveY = -moveY
    } else {
        moveY = moveY;
    };
    
    if (x >= window.innerWidth-30 || x <= 0){
        moveX = -moveX
    } else {
        moveX = moveX;
    };

    x = x + moveX;
    y = y + moveY;

    tilde.style.left = `${x}px`;
    tilde.style.top = `${y}px`;
}

let moveTildeInterval = setInterval(moveTilde, 5);

contentTitle.addEventListener('mouseenter', ()=>{
    clearInterval(moveTildeInterval);
    tilde.style.transition = "all 0.5s";
    moveX = 1;
    moveY = -1;
    x = titleRect.right - 55;
    y = titleRect.top - 3;
    tilde.style.left = `${x}px`;
    tilde.style.top = `${y}px`;
    showSubtitle();
});

contentTitle.addEventListener('mouseleave', ()=>{
    tilde.style.transition = 'none';
    moveTildeInterval = setInterval(moveTilde, 5);
    hideSubtitle();
});


//Down arrow

const downArrow = document.getElementById('down-arrow')
document.addEventListener('DOMContentLoaded', ()=>{
    gsap.to('.down-arrow',{duration:0.75, y:10, yoyo:true, repeat:-1, delay:1, ease:'power1.inOut'})
    changeCardBackgroundDimensions();
}, false);



//Card Gallery

const allSlidesComedy = document.querySelectorAll('#comedy-img');
const allSlidesRcg = document.querySelectorAll('#rcg-img');
const allSlidesZuck = document.querySelectorAll('#zuck-img')
const allSlidesItem = document.querySelectorAll('#item-img')
let currentIndexComedy = 0;
let currentIndexRcg = 0;
let currentIndexZuck = 0;
let currentIndexItem = 0;


function moveSlideRight(allSlides, container){
    let currentIndex
    switch (container) {
        case "#slides-comedy":
            currentIndex = currentIndexComedy;
            break;
        case "#slides-rcg":
            currentIndex = currentIndexRcg;
            break
        case "#slides-zuck":
            currentIndex = currentIndexZuck;
            break
        case "#slides-item":
            currentIndex = currentIndexItem;
            break
        default:
            currentIndex = 0;
            break;
    }

    if (currentIndex === allSlides.length-1){
        currentIndex = 1;
        gsap.to(container, {duration: 1, x:currentIndex * -260})
        gsap.set(container, {x:0});
    } else {
        currentIndex = currentIndex + 1
        gsap.to(container, {duration: 1, x:currentIndex * -260})
    }

    switch (container) {
        case "#slides-comedy":
            currentIndexComedy = currentIndex;
            break;
        case "#slides-rcg":
            currentIndexRcg = currentIndex;
            break
        case "#slides-zuck":
            currentIndexZuck = currentIndex;
            break
        case "#slides-item":
            currentIndexItem = currentIndex;
            break
        default:
            currentIndex = 0;
            break;
    }
}


window.setInterval(()=>{
    moveSlideRight(allSlidesComedy, "#slides-comedy" );
    moveSlideRight(allSlidesRcg, "#slides-rcg")
    moveSlideRight(allSlidesZuck, "#slides-zuck")
    moveSlideRight(allSlidesItem, "#slides-item")
}, 3000);

//Scroll Animations

const leftContainer = gsap.utils.toArray('.left-container');
const rightContainer = gsap.utils.toArray('.right-container');

rightContainer.forEach( container =>{
    gsap.from(container,{
        scrollTrigger:{
            trigger:container,
            
            start:"center bottom"
        },
        duration: 1.5,
        opacity:0,
        x:"50",
        ease: "powe1.in"
    })
})


leftContainer.forEach( container =>{
    gsap.from(container,{
        scrollTrigger:{
            trigger:container,
           
            start:"center bottom"
        },
        duration: 1.5,
        opacity:0,
        x:"-50",
        ease: "powe1.in"
    })
})


gsap.from('#march-left-container',{
    scrollTrigger:{
        trigger:'#march',
        // markers: true,
        start:'top center',
        end: "+=100",
    },
    duration: 2,
    opacity:0,
    x:"-50",
    ease: "powe1.in"
})

gsap.from('.survival-container', {
    scrollTrigger:{
        trigger:'.survival-container',
        //markers: true,
        start:'top bottom',
        end: "+=100",
    },
    duration: 4,
    opacity:0,
    ease: "power1.in"
})