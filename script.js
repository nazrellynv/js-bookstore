menuBtn=document.querySelector('.link-button');
closeBtn=document.querySelector('#close-Menu');
navMenu1=document.querySelector('#nav-menu-1');
navMenu2=document.querySelector('#nav-menu-2');
text1=document.querySelector('.text-1');
text2=document.querySelector('.text-2');
icons=document.querySelector('#icons');
contactInfo=document.querySelector('#contact-info');



menuBtn.addEventListener("click", showMenu);

function showMenu(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
    navMenu1.classList.toggle('active');
    navMenu2.classList.toggle('active');
    text1.classList.toggle('active');
    text2.classList.toggle('active');
    icons.classList.toggle('active');
    contactInfo.classList.toggle('active');

}
closeBtn.addEventListener("click", closeMenu);

function closeMenu(event) {
    event.preventDefault();
    popupWindow.style.display = "none";
}




searchInput=document.querySelector('#search-input')
searchBtn=document.querySelector('#search-button');

searchBtn.addEventListener("click", ()=>{
  searchBtn.style.transform = "rotate(720deg)"
  searchBtn.style.opacity = "0"
  searchInput.style.display = "block"
})

// searchBtn.addEventListener("click", showInput);

function showInput() {
    searchInput.classList.toggle('active');
    searchBtn.classList.toggle('active');
    searchInput.focus()
}




card=document.querySelector("#card");
cardBack=document.querySelector("#cardBack")

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