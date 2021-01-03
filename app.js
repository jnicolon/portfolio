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

//Title//

const contentTitle = document.querySelector('.content-title');
const tilde = document.getElementById('tilde');
const titleContainer = document.querySelector('.intro-container')

let titleRect = contentTitle.getBoundingClientRect();
let bottom = titleContainer.getBoundingClientRect().bottom;

window.addEventListener('resize', ()=>{
    titleRect = contentTitle.getBoundingClientRect();
    bottom = titleContainer.getBoundingClientRect().bottom;
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

}, false);

