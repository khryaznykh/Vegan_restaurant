gsap.from(".mainbox", {y:-300, duration:3, opacity:0, delay:1})
gsap.from(".bottom", {y:-300, duration:3, opacity:0, delay:2})

gsap.registerPlugin(ScrollTrigger);

gsap.from("#aboutusright", {
    scrollTrigger:"#aboutusright",
    x: -500, 
    ease:"bounce", 
    duration: 5,  
    opacity:0})
gsap.from("#aboutusleft", {
    scrollTrigger: "#aboutusleft",
    x: 500, 
    ease:"bounce", 
    duration: 5,  
    opacity:0})

gsap.to(".printcoffee", { 
    scrollTrigger: ".printcoffee",
    text: "COFFEE MAP", 
    duration:3,
    delimiter: " ",
    ease:"none"})
    
gsap.to(".printtea", { 
    scrollTrigger: ".printtea",
    text: "TEA MAP", 
    duration:3,
    delimiter: " ",
    ease:"none"})  
    
gsap.to(".printdesserts", { 
    scrollTrigger:".printdesserts",
    text: "DESSERTS", 
    duration:3,
    delimiter: " ",
    ease:"none"})

gsap.from(".icon", {
    scrollTrigger: ".icon",
    x:100,
    opacity:0,
    stagger:1,
    duration:1
})