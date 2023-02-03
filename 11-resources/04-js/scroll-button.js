
// JavaScript content for "Scroll to Top Button"

  function smoothScroll(event, id) {
    event.preventDefault(); // prevent the default jump behavior
    const section = document.getElementById(id);
    const yCoordinate = section.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  }


  window.onload = function(){
    document.getElementById("scroll-top-button").addEventListener("click", scrollToTop);
  }



  function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.scrollTo(0, c - c / 20);
      requestAnimationFrame(scrollToTop);
    }
  }



  
