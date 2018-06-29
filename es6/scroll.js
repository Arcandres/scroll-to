const scroll = (e,height = 20) => {
  const el = document.getElementById(e.target.hash.slice(1));

  // Check if the element exists
  if (el) {

    //  scrollTop fix
    const scroll       = document.body.scrollTop ||
                         document.scrollingElement.scrollTop,
          initial      = () => scroll,
          final        = () => Math.floor(el.getBoundingClientRect().y + initial() - height),
          acceleration = Math.ceil((final() - initial()) / 80);
    let      animation = requestAnimationFrame(animate);

    function animate() {
      window.scrollBy(0, acceleration);
      animation = requestAnimationFrame(animate);
      
      if (acceleration > 0) {
        if (initial() > final() - (acceleration)) {
          console.log('counter');
          cancelAnimationFrame(animation)
        }
      } else {
        if (initial() < final()) {
          cancelAnimationFrame(animation)
        }
      }

    }
  } else {
    // NUll
    console.log(el);
  }
  
};
