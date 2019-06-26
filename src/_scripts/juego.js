'use strict';

var Game = function() {
  var modal = $('.juego__modal');
  
  if (modal) {
    var modalTriggers = $('[data-modal]');

    modalTriggers.on('click', function() {
      var actionType = $(this).data('modal');

      if (actionType === 'open') {
          openModal();
      } else {
          closeModal();
      }
    });

    function openModal() {
      modal.addClass('-active');
      $('body').addClass('-hideOverflow');
    }

    function closeModal() {
      modal.removeClass('-active');
      $('body').removeClass('-hideOverflow');
    }
  }

  var splash = $('.juego__start-wrapper');
  var splashMobile = $('.juego__modal__start-wrapper-mobile');
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  
  if (width > 760) {
    splash.addClass('-active');
  } else{
    splashMobile.addClass('-active');
  }

  var sidebar = $('.juego__sidebar');
  var sideBarOpen = $('.juego__sidebar__open');
  var sideBarClose = $('.juego__sidebar__close');

  sideBarOpen.on('click', function() {
    sidebar.addClass('-active');
  });

  sideBarClose.on('click', function() {
    sidebar.removeClass('-active');
  });
}

module.exports = Game;