gsap.registerPlugin(ScrollTrigger);

gsap.from (".menu", {y:-50, duration:1.5});
gsap.from (".menu1", {x:-100, duration:0.5, delay:0.5, opacity:0});
gsap.from (".menu2", {x:-100, duration:0.5, stagger:0.3, delay:1, opacity:0});
gsap.from ("#thevideo", {duration:3,  opacity:0});
gsap.from (".rest", {
    scrollTrigger:  ".rest",
    duration:3,  
    opacity:0});

gsap.from(".one", {
    scrollTrigger: ".food",
    x: 500, 
    ease:"Power1.out", 
    duration: 1, 
    stagger:0.3, 
    opacity:0})
gsap.from(".menu3", {
    scrollTrigger: ".menu3",
    x: 500, 
    ease:"Power1.out", 
    duration: 1, 
    stagger:0.3, 
    opacity:0})