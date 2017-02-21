
const $ = require('jquery');
/* Animate the site header */
const wrapper = $('.wrapper');
wrapper.animate({
  opacity: 1,
  marginTop: 0,
}, 700);

// Cache selectors
const nav = $('.nav-right-collapse, .nav-right');
const navHeight = 60;
// all list items
const links = nav.find('a');

// anchors corresponding to menu items
function mapLinks() {
  const link = $($(this).attr('href'));
  if (link.length) { return link; }
  return null;
}
const scrollLinks = links.map(mapLinks);

/* Easing scroll animation to the correct part of the page */
function scrollAnim(e) {
  const href = $(this).attr('href');
  const offsetTop = (href === '#') ? 0 : ($(href).offset().top + 10) - navHeight;
  $('html, body').stop().animate({
    scrollTop: offsetTop,
  }, 300);
  e.preventDefault();
}
links.on('click', scrollAnim);

/* Fix navbar to top */
function navTopFix() {
  const scrollTop = $(document).scrollTop();
  if (scrollTop > 60) {
    $('nav').addClass('fixed');
  } else {
    $('nav').removeClass('fixed');
  }
}
$(document).on('scroll', navTopFix);

/* Highlight current nav item */
function highLightNav() {
  let lastId;
  // Get container scroll position
  const fromTop = $(this).scrollTop() + navHeight + 25;

  // Get id of current scroll item
  function getScrollId() {
    const linkTop = $(this).offset().top;
    const sectionHeight = $(this).height();
    // 2nd check is to unselect the last item if we keep
    // scrolling past it. Give it leeway of 125 to account for padding
    if (linkTop < fromTop && fromTop < (linkTop + sectionHeight + 100)) {
      return this;
    }
    return 0;
  }
  let cur = scrollLinks.map(getScrollId);
  // Get the id of the current element
  cur = cur[cur.length - 1];
  const id = cur && cur.length ? cur[0].id : '';
  if (lastId !== id) {
    lastId = id;
    links.removeClass('active');
    // TODO, add active class to navs
    // links.filter('[href=#'+id+']').addClass('active');
  }
}
$(document).on('scroll', highLightNav);

/* Submit contact form submit button functionality */
function contactSubmit() {
  $(this).submit();
}
$('.contact-submit-btn').on('click', contactSubmit);

// esc hit - close form or close nav-collapse
function escHitCloseForm(e) {
  if (e.keyCode === 27) { // escape key maps to keycode `27`
    if ($('.subscribe-form').css('display') === 'block') {
      $('.subscribe-close').click();
    } else {
      $('.nav-right-hamburger, .nav-right-collapse').removeClass('on');
    }
  }
}
$(document).keyup(escHitCloseForm);

// subscribe clicked - show subscribe form
function showSubscribeForm() {
  $('.subscribe-overlay').show();
  $('.subscribe-form').show().animate({
    top: '30%',
  }, 200);
}
$('.subscribe-btn').on('click', showSubscribeForm);

// subscribe-close or outside of form is clicked - exit form
function exitSubscribeForm() {
  $('.subscribe-overlay').hide();
  $('.subscribe-form').css('top', '28%');
  $('.subscribe-form').hide();
}
$('.subscribe-overlay, .subscribe-close').on('click', exitSubscribeForm);

// hamburger nav clicked - toggle nav-collapse
function collapseHamburger() {
  $('.nav-right-hamburger').toggleClass('on');
  $('.nav-right-collapse').toggleClass('on');
}
$('.nav-right-hamburger, .nav-right-collapse a').on('click', collapseHamburger);

