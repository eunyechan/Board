const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const navLinksList = document.querySelectorAll('.navLinksList');
const loginBox = document.querySelector('.loginBox');
const navLinks= document.querySelectorAll('#logo');
const buttons= document.querySelectorAll('.signUpButton');

const mouseCursor= document.querySelector(".cursor");
window.addEventListener('mousemove',cursor);

const tl = new TimelineMax();


tl.fromTo(
  hero,
  1,
  { height: "0%" },
  { height: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    hero,
    1.2,
    { width: '100%' },
    { width: '80%', ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    logo,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
  )
  .fromTo(
    navLinksList,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
  )
  .fromTo(
    buttons,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
  );

  
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

navLinksList.forEach(link => {
  link.addEventListener('mouseleave', () =>{
    mouseCursor.classList.remove("link-grow");
    link.classList.remove('hoverLink');
    
  });

  link.addEventListener('mouseover', () =>{
    mouseCursor.classList.add("link-grow");
    link.classList.add('hoverLink');
  });

})

