"use strict";

var scroll = function scroll(e) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  var el = document.getElementById(e.target.hash.slice(1));

  // Check if the element exists
  if (el) {
    var tf = true;
    var initial = function initial() {
      return document.body.scrollTop;
    },
        final = function final() {
      return Math.floor(el.getBoundingClientRect().y + initial() - height);
    },
        y = 10,
        animate = setInterval(function () {
      if (tf) {
        if (initial() < final()) {
          window.scrollBy(0, y);
          if (initial() > final()) {
            tf = false;
            clearInterval(animate);
          }
        } else {
          window.scrollBy(0, -y);
          if (initial() < final()) {
            tf = false;
            clearInterval(animate);
          }
        }
      }
    }, 1);
  } else {
    // NUll
    console.log(el);
  }
};