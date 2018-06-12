const scroll = (e,height = 20) => {
  const el = document.getElementById(e.target.hash.slice(1));

  // Check if the element exists
  if (el) {

    //  scrollTop fix
    const scroll       = document.body.scrollTop ||
                         document.scrollingElement.scrollTop,
          initial      = () => scroll,
          final        = () => Math.floor(el.getBoundingClientRect().y + initial() - height),
          acceleration = Math.ceil((final() - initial()) / 250),

          animate      = setInterval(() => {
            
            window.scrollBy(0, acceleration);

            if (acceleration > 0) {
              if (initial() > final() - (acceleration)) {
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
