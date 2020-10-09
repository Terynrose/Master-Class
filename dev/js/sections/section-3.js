import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

section3TL.from("#section-3 aside", {duration: 1, alpha:0, x:-300, rotate: -90})
            .from("#section-3 div", {duration: 0.5, alpha:0, x:300})


export function section3Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section3TL,
        toggleActions: "play none none none",
        trigger: "#section-3",
        start: "top, 50%",
        end: "bottom 50%"
    });
}
//stopped at 36.31