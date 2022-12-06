// Nhấn để chuyển slide

var backGround =  document.querySelector ('#slider')
var nextSlide = document.querySelector('.slider-ar-left')
var previousSlide = document.querySelector('.slider-ar-right')



// Chuyển sang trái 
function changeSlide() {
    backGround.style.transform = 'translateX(0%)'
}

// Chuyển sang phải 
