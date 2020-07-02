'use strict'

// elements DOM =====================================================
let navbar_menu_toggler = document.querySelector('.navbar-toggler'),
  navbar_menu_collapse = document.querySelector('.navbar_collapse'),
  navbar_menu_toggler_line = document.querySelectorAll('.navbar_toggler_line');
// function call =================================================
navbar_menu_toggler.onclick = menu_mobile_toggler;
//function show menu button mobile ==================================
function menu_mobile_toggler(event) {
  navbar_menu_collapse.classList.toggle('hidden_mobile_li');
  navbar_menu_toggler_line[0].classList.toggle('navbar_toggler_line_1_active');
  navbar_menu_toggler_line[3].classList.toggle('navbar_toggler_line_1_active');
  navbar_menu_toggler_line[1].classList.toggle('navbar_toggler_line_2_active');
  navbar_menu_toggler_line[2].classList.toggle('navbar_toggler_line_3_active');
  let nav_li = document.querySelectorAll('.nav-item');
  for (let i = 0; i < nav_li.length; ++i) {
    setTimeout(() => {
      nav_li[i].classList.toggle('active_li_mobile_menu');
    }, i * 50);
  }
};

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

//slide page ======================================================
new fullpage('main', {});

//======================================================

// const wrapper = document.querySelector("main");

// let direction = "";
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
//     direction = "down";
//   } else if (e.deltaY < 0) {
//     direction = "up";
//   }

//   // Прокрутка блока в зависимости от положения скролла и направления движения
//   if (wrapper.scrollTop === 0) {
//     direction === "down" ? scrollAnimate(10) : () => {};
//   } else if (Math.floor(wrapper.scrollTop) === lineHeight) {
//     direction === "up" ? scrollAnimate(-10) : () => {};
//   } else if (Math.floor(wrapper.scrollTop) < lineHeight) {
//     e.preventDefault();
//     direction === "up" ? scrollAnimate(-10) : scrollAnimate(10);
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





