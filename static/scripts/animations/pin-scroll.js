import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const pinScroll = () => {
  const $triggerElements = document.querySelectorAll(
    "[data-animation='pin-scroll']"
  );

  $triggerElements.forEach(($triggerElement) => {
    const $scrollList = $triggerElement.querySelector(
      "[data-child='pin-scroll']"
    );
    const $innerTriggers = $scrollList.querySelectorAll(
      "[data-child='inner-pinned-elements']"
    );
    const $title = document.querySelector("[data-child='pin-only']");
    const $fullIntro = document.getElementById("full-intro");

    const scrollAnimation = gsap.to($scrollList, {
      x: window.innerWidth - $scrollList.scrollWidth - 100,
      scrollTrigger: {
        trigger: $triggerElement,
        start: "top 25%",
        pin: $triggerElement,
        scrub: true,
        pinSpacing: true,
        onLeaveBack: (element) => {
          if (element.direction === -1) {
            gsap.to($title, {
              color: "hsl(226, 90%, 32%)",
            });
            gsap.to($innerTriggers, {
              color: "hsl(226, 90%, 32%)",
              backgroundColor: "hsl(0, 0%, 100%)",
            });
            gsap.to($fullIntro, {
              color: "hsl(226, 90%, 32%)",
              backgroundColor: "hsl(0, 0%, 100%)",
            });
          }
        },
        // markers: true,
      },
    });

    $innerTriggers.forEach(($innerTrigger) => {
      const color = $innerTrigger.dataset.color ?? "hsl(226, 90%, 32%)";
      const backgroundColor =
        $innerTrigger.dataset.background ?? "hsl(0, 0%, 100%)";

      ScrollTrigger.create({
        trigger: $innerTrigger,
        containerAnimation: scrollAnimation,
        start: "left 0",
        onEnter: () => {
          gsap.to($title, {
            color: color,
          });
          gsap.to($innerTriggers, {
            color: color,
            backgroundColor: backgroundColor,
          });
          gsap.to($fullIntro, {
            color: color,
            backgroundColor: backgroundColor,
          });
        },
        onEnterBack: () => {
          gsap.to($title, {
            color: color,
          });
          gsap.to($innerTriggers, {
            color: color,
            backgroundColor: backgroundColor,
          });
          gsap.to($fullIntro, {
            color: color,
            backgroundColor: backgroundColor,
          });
        },
      });
    });
  });
};

export default pinScroll;
