
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





const card=document.querySelector(".card");
const cardBack=document.querySelector(".cardBack");
const imgBcg=document.querySelector(".bg")

card.addEventListener("mouseenter",  showBack);
function showBack() {
card.classList.add('animate');
cardBack.classList.add('animate');
imgBcg.classList.add('animate');


}

card.addEventListener("mouseleave", showFront);
function showFront() {
  card.classList.remove('animate');
  cardBack.classList.remove('animate');
  imgBcg.classList.remove('animate');

}



const newBooks = document.querySelectorAll(".new-books");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-20px",
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inverse');
    } else {
      entry.target.classList.remove('inverse');
    }
  });
}, options);
 newBooks.forEach(newBooks => {
  observer.observe(newBooks);

 });
 

const saleLeftBook = document.querySelector(".leftBook");
const options2 = {
  root: null,
  threshold: 0,
  rootMargin: "-20px",
};

const observer2= new IntersectionObserver(function(entries,observer){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inverse');
    } else {
      entry.target.classList.remove('inverse');
    }
  });

},options);


  observer2.observe(saleLeftBook);
  const saleRightBook = document.querySelector(".rightBook");
  const options3 = {
    root: null,
    threshold: 0,
    rootMargin: "-20px",
  };


  const observer3= new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inverse');
      } else {
        entry.target.classList.remove('inverse');
      }
    });
  
  },options);
  
  
    observer.observe(saleRightBook);

   