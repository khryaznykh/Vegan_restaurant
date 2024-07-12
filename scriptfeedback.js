const phrase = "We value your opinion";
const typedtext = document.querySelector(".type");
let i=0;

const inter = setInterval(typed,70);
function typed() {
    if (i<phrase.length) {
        typedtext.textContent += phrase.charAt(i);
    }
    else {
        clearInterval(inter)
    }
    i++
}

gsap.from (".btn", {y:'-20vw', duration:1, stagger:0.8, opacity:0, delay:1.5})
gsap.from ("form", {y:'-20vw', duration:1.5  , opacity:0, delay:1})