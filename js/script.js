var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var advantagesItems = document.querySelectorAll('.advantages__item');
var advantagesItemsBread = document.querySelectorAll('.advantages .breadcrumbs__item');

for (let i = 0; i < advantagesItems.length; i++) {

  advantagesItems[i].addEventListener('touchstart', handleTouchStart, false);
  advantagesItems[i].addEventListener('touchmove', handleTouchMove, false);

  let xDown = null;
  let yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  };

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        if (i + 1 < advantagesItems.length) {
          advantagesItems[i + 1].classList.remove('advantages__item--hide');
          advantagesItems[i + 1].classList.add('advantages__item--show');
          advantagesItems[i].classList.remove('advantages__item--show');
          advantagesItems[i].classList.add('advantages__item--hide');
          console.log(i);
          advantagesItemsBread[i].classList.remove('breadcrumbs__item--active');
          advantagesItemsBread[i+1].classList.add('breadcrumbs__item--active');

        }
      } else {
        if (i > 0) {
          advantagesItems[i - 1].classList.remove('advantages__item--hide');
          advantagesItems[i - 1].classList.add('advantages__item--show');
          advantagesItems[i].classList.remove('advantages__item--show');
          advantagesItems[i].classList.add('advantages__item--hide');
          advantagesItemsBread[i-1].classList.add('breadcrumbs__item--active');
          advantagesItemsBread[i].classList.remove('breadcrumbs__item--active');
        }
      }
    }
  }
}
