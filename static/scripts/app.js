import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import refreshTop from "./refresh-top";
import initializeWelcome from "./animations/welcome";
import pinElements from "./animations/pin.js";
import pinScroll from "./animations/pin-scroll.js";
import swipeInElements from "./animations/stagger-in";
import fadeInElements from "./animations/fade-in";
import mouseMove from "./animations/mouse";

const afterIntro = () => {
  pinElements();
  refreshTop();
  mouseMove();
  pinScroll();
  swipeInElements();
  fadeInElements();
};

initializeWelcome(afterIntro);
