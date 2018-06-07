const scroll = (e,height = 20) => {
  const el = document.getElementById(e.target.hash.slice(1));

  // Check if the element exists
  if (el) {
    let tf         = true;
    const initial  = () => document.body.scrollTop,
          final    = () => Math.floor(el.getBoundingClientRect().y + initial() - height),
          y        = 10,
          animate  = setInterval(() => {
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

addEventListener('click', e => {
  if (e.target.href && e.target.hash) {
    e.preventDefault();
    scroll(e, 151);
  }
});