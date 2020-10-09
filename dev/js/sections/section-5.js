import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section5TL = gsap.timeline();

section5TL.from("#section-5", {duration: 1, alpha:0, scale: 5})
            .from("#section-5 p", {duration: 0.5, alpha:0})
            .from("#section-5 h4", {duration: 0.5, alpha:0, x:300, rotate: 90})


export function section5Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section5TL,
        toggleActions: "play none none none",
        trigger: "#section-5",
        start: "750 50%",
        end: "bottom 50%"
    });
}