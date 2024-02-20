document.addEventListener('scroll', () => {
  const header=document.querySelector("#header");
  if (window.scrollY>0) {
    header.classList.add('scrolled');
  }
  else {
    header.classList.remove('scrolled');
  }

})

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
    popupWindow.classList.add('active');
    navMenu1.classList.add('active');
    navMenu2.classList.add('active');
    text1.classList.add('active');
    text2.classList.add('active');
    icons.classList.add('active');
    contactInfo.classList.add('active');

}
closeBtn.addEventListener("click", closeMenu);
function closeMenu() {
    popupWindow.classList.remove('active');
    navMenu1.classList.remove('active');
    navMenu2.classList.remove('active');
    text1.classList.remove('active');
    text2.classList.remove('active');
    icons.classList.remove('active');
    contactInfo.classList.remove('active');
}

const bouncings =document.querySelectorAll('.bouncing')
const google=document.querySelector('.google');
const instagram=document.querySelector('.instagram');
const facebook=document.querySelector('.facebook');
const delayIns= 40;
const delay=30;
const delayGgl= 20;

instagram.addEventListener('mouseover', () => {
  instagram.classList.add('bounced');
  instagram.classList.remove('fall');
  bouncings.forEach((bouncing, index) => {
    if (bouncing.parentElement === instagram) {
      setTimeout(()=> {
        bouncing.classList.add('animate');
      }, index*delayIns);
    } 
  })
})
facebook.addEventListener('mouseover', () => {
  facebook.classList.add('bounced');
  facebook.classList.remove('fall');
  bouncings.forEach((bouncing, index) => {
    if (bouncing.parentElement === facebook) {
      setTimeout(()=> {
        bouncing.classList.add('animate');
      }, index*delay);
    } 
  })
})
google.addEventListener('mouseover', () => {
  google.classList.add('bounced');
  google.classList.remove('fall');
  bouncings.forEach((bouncing, index) => {
    if (bouncing.parentElement === google) {
      setTimeout(()=> {
        bouncing.classList.add('animate');
      }, index*delayGgl);
    } 
  })
})
instagram.addEventListener('mouseleave', () => {
  instagram.classList.add('fall');
  instagram.classList.remove('animate');
  bouncings.forEach((bouncing, index) => {
    if (bouncing.parentElement === instagram) {
      setTimeout(()=> {
        bouncing.classList.remove('animate');
      }, index*delayIns);
    } 
  })
})
facebook.addEventListener('mouseleave', () => {
  facebook.classList.add('fall');
  facebook.classList.remove('animate');
  bouncings.forEach((bouncing, index) => {
    if (bouncing.parentElement === facebook) {
      setTimeout(()=> {
        bouncing.classList.remove('animate');
      }, index*delay);
    } 
  })
})
google.addEventListener('mouseleave', () => {
  google.classList.add('fall');
  google.classList.remove('animate');
  bouncings.forEach((bouncing, index) => {
    if (bouncing.parentElement === google) {
      setTimeout(()=> {
        bouncing.classList.remove('animate');
      }, index*delayGgl);
    } 
  })
})

const searchInput=document.querySelector('#search-input')
const searchBtn=document.querySelector('#search-button');
const searchBox=document.querySelector('#search-container');
const arrowRight=document.querySelector('.fa-arrow-right');
let isActive=false;

searchBtn.addEventListener("click", ()=>{
  if (!isActive) {
    searchBox.style.transform = "rotate(360deg)";
    setTimeout(() => {
      searchBtn.classList.add('active');
      searchBox.classList.add('active');
      arrowRight.classList.add('active');
      searchInput.classList.add('active');
    }, 400);
  }
  else {
    searchBtn.classList.remove('active');
    searchBox.classList.remove('active');
    arrowRight.classList.remove('active');
    searchInput.classList.remove('active');
    setTimeout(() => {
      searchBox.style.transform = "rotate(-360deg)";   
    }, 400)
  }
  isActive = !isActive;
})


const cards = document.querySelectorAll(".card");
const cardBacks = document.querySelectorAll(".cardBack");
const imgBcgs = document.querySelectorAll(".bg");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.classList.add('animate');
        cards.forEach(otherCard => {
          if (otherCard !== card) {
              otherCard.classList.remove('animate');
          }
      });
        cardBacks.forEach(cardBack => {
            if (cardBack.parentElement === card) {
                cardBack.classList.add('animate');
             
            } else {
                cardBack.classList.remove('animate');
            }
        });
        imgBcgs.forEach(imgBcg => {
            if (imgBcg.parentElement.parentElement === card) {
                imgBcg.classList.add('animate');
            } else {
                imgBcg.classList.remove('animate');
            }
        });
    });
});



cards.forEach(card => {
  card.addEventListener("mouseleave", () => {
    card.classList.remove('animate');
    setTimeout(() => {
      cardBacks.forEach(cardBack => {
        cardBack.classList.remove('animate');
       })
    }, 500)
     imgBcgs.forEach(imgBcg => {
      imgBcg.classList.remove('animate');
     })
  })
})






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
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('inverse');
    }
  });
}, options);
 newBooks.forEach(newBook => {
  observer.observe(newBook);
 });
 

const saleLeftBook = document.querySelector(".leftBook");
const options2 = {
  root: null,
  threshold: 0,
  rootMargin: "-20px",
};

const leftBookScroll= new IntersectionObserver(function(entries,leftBookScroll){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inverse');
    } else {
      entry.target.classList.remove('inverse');
    
    }
  });

},options2);
leftBookScroll.observe(saleLeftBook);

  const saleRightBook = document.querySelector(".rightBook");
  const options3 = {
    root: null,
    threshold: 0,
    rootMargin: "-20px",
  };


  const rightBookScroll= new IntersectionObserver(function(entries,rightBookScroll){
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inverse');
      } else {
        entry.target.classList.remove('inverse');
      }
    });
  
  },options3);
  
  
    rightBookScroll.observe(saleRightBook);



   const categories= document.querySelectorAll('.category');
   const categoryContainer= document.querySelectorAll('.categories');
   const delayEachCategory=200;
   const categoryOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-20px",
   };

   const categoryonScroll= new IntersectionObserver(function(entries,categoryonScroll){
    entries.forEach((entry,index)=>{
        if (!entry.isIntersecting) {
         return
        }
        else {
          setTimeout(() => {
            entry.target.classList.add('appear');
        }, index * delayEachCategory);
       

        }
    })
   },categoryOptions);

   categories.forEach(category => {
    categoryonScroll.observe(category);
   });
  

