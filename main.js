let mouseCursor= document.querySelector(".cursor");
let navLinks= document.querySelectorAll('.headerList li');

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