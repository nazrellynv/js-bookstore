menuBtn=document.querySelector('.link-button');
closeBtn=document.querySelector('#close-Menu')

menuBtn.addEventListener("click", showMenu);

function showMenu(event) {
    event.preventDefault();
    popupWindow.style.display = "block";


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