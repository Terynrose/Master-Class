import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section4TL.from("#section-4 article img", {duration: 1, alpha:0, x:-300, rotate: -90})
            .from("#section-4 article h3", {duration: 0.5, alpha:0, x:300, rotate: 90})
            .from("#section-4 article p", {duration: 0.5, alpha:0}, "third")
            .from("#section-4 article h4", {duration: 0.5, alpha:0, y:400}, "third")


export function section4Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section4TL,
        toggleActions: "play none none none",
        trigger: "#section-4",
        start: "top, 50%",
        end: "bottom 50%"
    });
}