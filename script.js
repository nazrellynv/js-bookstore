menuBtn=document.querySelector('#menu-button');

menuBtn.addEventListener("click", showMenu);

function showMenu(event) {
    event.preventDefault();
    popupWindow.style.display = "block";


}



searchBtn=document.querySelector('#search-button');
searchInput=document.querySelector('#search-input')


searchBtn.addEventListener("click", showInput);


function showInput() {
    searchInput.classList.toggle('active');
    searchBtn.classList.toggle('active');
    searchInput.focus()

}