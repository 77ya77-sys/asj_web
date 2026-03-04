/**
 * CREATIVE.DEV — базовая интерактивность лендинга
 * Плавная прокрутка по якорям, форма (заглушка)
 */

(function () {
  'use strict';

  // Плавный скролл по якорным ссылкам
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      e.preventDefault();
      var el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Форма: пока только предотвращаем стандартную отправку (обработчик добавится позже)
  var form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: отправка на бэкенд / CRM
      console.log('Form submit placeholder');
    });
  }
})();
