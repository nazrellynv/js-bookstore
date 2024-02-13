
 const menuBtn=document.querySelector('.link-button');
 const closeBtn=document.querySelector('#close-Menu');
 const navMenu1=document.querySelector('#nav-menu-1');
 const navMenu2=document.querySelector('#nav-menu-2');
 const text1=document.querySelector('.text-1')
 const text2=document.querySelector('.text-2');
 const icons=document.querySelector('#icons');
 const contactInfo=document.querySelector('#contact-info');


menuBtn.addEventListener("click", showMenu);

function showMenu() {
    popupWindow.style.display = "block";
    navMenu1.classList.toggle('active');
    navMenu2.classList.toggle('active');
    text1.classList.toggle('active');
    text2.classList.toggle('active');
    icons.classList.toggle('active');
    contactInfo.classList.toggle('active');

}
closeBtn.addEventListener("click", closeMenu);

function closeMenu() {
    popupWindow.style.display = "none";
}





const searchInput=document.querySelector('#search-input')
const searchBtn=document.querySelector('#search-button');
const searchBox=document.querySelector('#search-container');
const arrowRight=document.querySelector('.fa-arrow-right');
let isActive=false;

searchBtn.addEventListener("click", ()=>{
  if(!isActive) {
  searchBtn.classList.add('active');
  searchBox.classList.add('active');
  arrowRight.classList.add('active');
  searchInput.classList.add('active');
  }
  else {
  searchBtn.classList.remove('active');
  searchBox.classList.remove('active');
  arrowRight.classList.remove('active');
  searchInput.classList.remove('active');
  }
  isActive = !isActive;


})





const card=document.querySelector("#card");
const cardBack=document.querySelector("#cardBack")

card.addEventListener("mouseenter",  showBack);
function showBack() {
card.style.transform= "rotateY(180deg)";
card.style.
cardBack.style.display="block"



}
card.addEventListener("mouseleave", showFront);
function showFront() {
card.style.transform= "rotateY(0)";
cardBack.style.display="none"


}

