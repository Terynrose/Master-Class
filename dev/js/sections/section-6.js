import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section6TL = gsap.timeline();

section6TL.from("#section-6 article img", {duration: 1, alpha:0, x:-300, rotate: -90})
            .from("#section-6 article h3", {duration: 0.5, alpha:0, x:300, rotate: 90})
            .from("#section-6 article p", {duration: 0.5, alpha:0}, "third")
            .from("#section-6 article h4", {duration: 0.5, alpha:0, y:400}, "third")


export function section6Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section6TL,
        toggleActions: "play none none none",
        trigger: "#section-6",
        start: "top 50%",
        end: "bottom 50%"
    });
}