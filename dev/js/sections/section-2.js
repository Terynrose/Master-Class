import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2 h1", {duration: 0.5, alpha:0, x:-500})
            .from("#section-2 hr", {duration: 0.5, alpha:0, x:500})
            .from("#section-2 h3", {duration: 0.5, alpha:0, x:-500})

export function section2Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start: "top, 50%",
        end: "bottom 50%"
    });
}
// 31 mins for explanation