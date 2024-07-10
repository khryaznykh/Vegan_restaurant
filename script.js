gsap.from (".menu", {y:-50, duration:1.5});
gsap.to (".menu1", {rotation:360, duration:1.5, delay:0.5, opacity:1});
gsap.to (".menu2", {rotation:360, duration:1, stagger:0.8, delay:1.5, opacity:1});
gsap.from ("#thevideo", {x:-200, duration:2, delay:3.5, opacity:0});