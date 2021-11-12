
let burgerMenu=document.querySelector(".burger-menu");
let menuList=document.querySelector(".menu-list");
let projectList=document.querySelectorAll(".project");
let hoverProjects=document.querySelectorAll(".hover-project-info");

burgerMenu.addEventListener("click",showHideMenu);

 function showHideMenu() {
  if(menuList.classList.contains('menuToggler')){
     menuList.classList.remove('menuToggler')
  }
  else
   menuList.classList.add('menuToggler')
  
}
 

projectList.forEach((project,index)=>{
  project.addEventListener('mouseenter',setBackground);
  project.addEventListener('mouseleave',removeBackground);
  
})

function setBackground(e) {
 e.target.children[1].classList.add('hov-cover')
 }

function removeBackground(e) {
  e.target.children[1].classList.remove('hov-cover');
 }



let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "flex"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}


setInterval(() => {
  next()
}, 6000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})
