'use strict'

// elements DOM =====================================================
let $navbar_menu_toggler = document.querySelector('.navbar-toggler'),
  $navbar_menu_collapse = document.querySelector('.navbar_collapse'),
  $navbar_button_line = document.querySelectorAll('.navbar-toggler span');

 // function call =================================================
$navbar_menu_toggler.onclick = menu_mobile_toggler;

//function show menu button mobile ==================================
function menu_mobile_toggler(event) {
  $navbar_menu_collapse.classList.toggle('hidden_mobile_li');
  $navbar_button_line[0].classList.toggle("navbar_line_active_1");
  $navbar_button_line[3].classList.toggle("navbar_line_active_1");
  $navbar_button_line[1].classList.toggle("navbar_line_active_2");
  $navbar_button_line[2].classList.toggle("navbar_line_active_3");
  let $nav_li = document.querySelectorAll('.nav-item');
  for (let i = 0; i < $nav_li.length; ++i) {
    setTimeout(() => {
      $nav_li[i].classList.toggle('active_li_mobile_menu');
    }, i * 50);
  }
};

// вывод соц-иконок= ================================================
let $wrapper_social = document.querySelector('.wrapper'),
    $social_link = document.querySelectorAll(".wrapper a"),
    $social_button = document.querySelector(".social_media_button");

$social_button.onclick = social_toggler;

function social_toggler() {
  $wrapper_social.classList.toggle('wrapper_active');
  for (let i = 0; i < $social_link.length; ++i) {
    setTimeout(() => {
      $social_link[i].classList.toggle("social_link_active");
    }, i * 30);
  }
}




// посимвольный ввод текста ==========================================
const $sections = document.querySelectorAll('section');
// Перебираем все <section>
for (const $section of $sections) {
  // Вешаем событие на каждый <section>
  $section.onmouseenter = () => {
    const $source = $section.querySelector('.pageTextSource');
    const $visible = $section.querySelector('.pageText');
    showSectionLetters($source, $visible, 0);
  };
}
const showSectionLetters = ($source, $visible, marker) => {
  if ($visible.innerHTML.length === $source.innerHTML.length) return;
  // Добавляем 1 символ из $source в $visible
  // marker - текущая позиция символа
  $visible.innerHTML += $source.innerHTML[marker++];
  if ($visible.innerHTML.length < $source.innerHTML.length) {
    setTimeout(showSectionLetters, 50, $source, $visible, marker);
  }
};




// let target = $(".elem");
// let targetPos = target.offset().top;
// let winHeight = $(window).height();
// let scrollToElem = targetPos - winHeight;
// $(window).scroll(function () {
//   let winScrollTop = $(this).scrollTop();
//   if (winScrollTop > scrollToElem) {
//     //сработает когда пользователь доскроллит к элементу с классом .elem
//   }
// });






//slide page ======================================================
new fullpage('main', {});




// carousel project work ============================================
// let $btn_prev = document.querySelector('#gallery .buttons .prev');
// let $btn_next = document.querySelector('#gallery .buttons .next');
// let $images = document.querySelectorAll('#gallery .photos img');

// let i = 0;

// $btn_prev.onclick = function () {
//   $images[i].style.display = "none";
//   i--;
//   if (i < 0) {
//     i = $images.length - 1;
//   }
//   $images[i].style.display = "block";
// };
 
// $btn_next.onclick = function () {
//   $images[i].style.display = 'none';
//   i++;
//   if ( i >= $images.length ) {
//     i = 0;
//   }
//   $images[i].style.display = "block";
// };


















// const wrapper = document.querySelector('main');

// let direction = '';
// // Флаг, отвечающий за состояние скролинга
// let isScrolling = false;

// const scrollHeight = wrapper.scrollHeight;
// const elemHeight = wrapper.clientHeight;
// const lineHeight = scrollHeight - elemHeight;

// wrapper.onmousewheel = (e) => {
//   // если скролл идет, отменяем событие скролла и ничего не делаем
//   if (isScrolling) {
//     e.preventDefault();
//     return;
//   }
//   //console.log(wrapper.scrollTop)
//   // Определения направления скролла

//   if (e.deltaY > 0) {
//     direction = 'down';
//   } else if (e.deltaY < 0) {
//     direction = 'up';
//   }

//   // Прокрутка блока в зависимости от положения скролла и направления движения
//   if (wrapper.scrollTop === 0) {
//     direction === 'down' ? scrollAnimate(10) : () => {};
//   } else if (Math.floor(wrapper.scrollTop) === lineHeight) {
//     direction === 'up' ? scrollAnimate(-10) : () => {};
//   } else if (Math.floor(wrapper.scrollTop) < lineHeight) {
//     e.preventDefault();
//     direction === 'up' ? scrollAnimate(-10) : scrollAnimate(10);
//   }
// };

// function scrollAnimate(num) {
//   let counter = 1;
//   isScrolling = true;
//   const timer = setInterval(function () {
//     wrapper.scrollTop = wrapper.scrollTop + num;
//     counter++;
//     if (counter > 76) {
//       isScrolling = false;
//       clearInterval(timer);
//     }
//   }, 10);
// }





