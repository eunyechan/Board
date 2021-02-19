const mouseCursor= document.querySelector(".cursor");
const navLinks= document.querySelectorAll('.headerList li');
const t1= gsap.timeline({defaults: {ease: 'power1.out'}});
window.addEventListener('mousemove',cursor);

function cursor(e){
  mouseCursor.style.top= e.pageY + "px";
  mouseCursor.style.left= e.pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () =>{
      mouseCursor.classList.remove("link-grow");
      link.classList.remove('hoverLink');
      
    });

    link.addEventListener('mouseover', () =>{
      mouseCursor.classList.add("link-grow");
      link.classList.add('hoverLink');
    });

})

t1.to('.text', {y:"0%", duration: 1, stagger: 0.25});
t1.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
t1.to('.intro', {y: "-100%", duration: 1});