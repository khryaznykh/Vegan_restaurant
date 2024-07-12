
gsap.from (".heading", { duration:3, opacity:0});
gsap.registerPlugin(ScrollTrigger);


const menu = document.querySelectorAll(".menu");
menu.forEach(addTimeline);

function addTimeline(menuLine, index){
    const line = menuLine.querySelectorAll("tr");

    const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: menuLine,
          start: "center bottom",
          ease: "power2",
        
        }
      })
      .from(line, {
        x: 100,
        opacity: 0,
        duration: 0.5
      })
      
    
}


