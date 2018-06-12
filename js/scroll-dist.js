"use strict";

var scroll = function scroll(e) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  var el = document.getElementById(e.target.hash.slice(1));

  // Check if the element exists
  if (el) {

    //  scrollTop fix
    var _scroll = document.body.scrollTop || document.scrollingElement.scrollTop,
        initial = function initial() {
      return _scroll;
    },
        final = function final() {
      return Math.floor(el.getBoundingClientRect().y + initial() - height);
    },
        acceleration = Math.ceil((final() - initial()) / 250),
        animate = setInterval(function () {

      window.scrollBy(0, acceleration);

      if (acceleration > 0) {
        if (initial() > final() - acceleration) {
          clearInterval(animate);
        }
      } else {
        if (initial() < final()) {
          clearInterval(animate);
        }
      }
    }, 1);
  } else {
    // NUll
    console.log(el);
  }
};