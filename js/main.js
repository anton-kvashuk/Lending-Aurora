const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.head');
menuButton.addEventListener('click', function() {
  menu.classList.toggle('head-active');
  menuButton.classList.toggle('menu-btn-active');
})



var acc = document.getElementsByClassName('mob_acardion')
var i;
for(i=0; i<acc.length; i++){
  acc[i].onclick = function () {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show')
  }
}