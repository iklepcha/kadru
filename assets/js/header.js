// Получаем элементы из html
let navHoverLi = document.querySelector(".link_sotrodniki");
let navHoverBlock = document.querySelector(".block_link_sotrodniki");

// При наведении на сотрудники появится выпадающий список
navHoverLi.addEventListener("mouseover", function () {
  navHoverBlock.style.display = 'flex'
  navHoverLi.classList.add('onMouseActive')
});
navHoverBlock.addEventListener("mouseover", function () {
  navHoverBlock.style.display = 'flex'
  navHoverLi.classList.add('onMouseActive')
});

// При удалении курсора с вкладки сотрудники или выпадающего списка - список изчезнет
navHoverLi.addEventListener("mouseleave", function () {
  navHoverBlock.style.display = 'none'
  navHoverLi.classList.remove('onMouseActive')
});
navHoverBlock.addEventListener("mouseleave", function () {
  navHoverBlock.style.display = 'none'
  navHoverLi.classList.remove('onMouseActive')
});



// Адаптивное меню
let menuNav = document.querySelector('.menuNav')
let adaptive_menu = document.querySelector('.adaptive_menu')

menuNav.addEventListener('click', function() {
  adaptive_menu.classList.toggle('adaptive_menu_on')
})