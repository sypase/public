
const nav= document.querySelector(" .nav-links");
const burger=document.querySelector(" .burger");
const links= nav.querySelectorAll("a");
const arroww=document.querySelector(".arrow");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toogle");
    
});
links.forEach(link => {
    link.addEventListener('click', ()=>{
        nav.classList.toggle('nav-open');
        burger.classList.toggle("toogle");
    });
});
burger.addEventListener("click", () => {

    arroww.classList.toggle("removedarrow")
});