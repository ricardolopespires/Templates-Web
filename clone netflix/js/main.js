

const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.column');
let slideIndex = 0;
showSlide();
function showSlide(n){
    if(slideIndex > slides.length - 1){
        slideIndex = 0;
    }
    if (slideIndex < 0){
        slideIndex = slides.length - 1;
    }
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(let i=0; i<dots.length; i ++){
        dots[i].ClassName = dots[i].className.replace(' active', "");        
    }
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += " active";
}

dots.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        showSlide(slideIndex = index);
    })
});

const nav = document.querySelector('.nav');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
next.addEventListener('click', ()=>{
    nav.scrollLeft += dots[0].offsetWidth;
    showSlide(slideIndex += 1);
    if(slideIndex === 0){
        nav.scrollLeft = 0;
    }
    
})
prev.addEventListener('click', ()=>{
    nav.scrollLeft -= dots[0].offsetWidth;
    showSlide(slideIndex -= 1);
    if(slideIndex === slides.length -1){
        nav.scrollLeft = nav.scrollWidth;
    }
})

