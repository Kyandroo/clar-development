import { gsap } from "gsap";

const fadeInElements = () => {
  const $fadeParents = document.querySelectorAll("[data-animation='fade-in']");

  $fadeParents.forEach(($fadeParent) => {
    if ($fadeParent) {
      const $fadeChildren = $fadeParent.querySelectorAll(
        "[data-child='fade-in']"
      );

      gsap.from($fadeChildren, {
        opacity: 0,
        y: 100,
        delay: 0.4,
        scrollTrigger: {
          trigger: $fadeParent,
          start: "5% 100%",
          toggleActions: "play reset restart reset",
        },
      });
    }
  });
};

export default fadeInElements;
