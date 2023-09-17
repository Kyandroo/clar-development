import { gsap } from "gsap";

const swipeInElements = () => {
  const $staggerParents = document.querySelectorAll(
    "[data-animation='stagger-in']"
  );

  const staggerProperties = (array, trigger, animations = { opacity: 0 }) => {
    gsap.from(array, {
      ...animations,
      ease: "Power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: trigger,
        start: "5% 100%",
        toggleActions: "play reset restart reset",
      },
    });
  };

  $staggerParents.forEach(($staggerParent) => {
    if ($staggerParent) {
      const $staggerChildren = $staggerParent.querySelectorAll(
        "[data-child='swipe-in']"
      );
      const $sizeChildren = $staggerParent.querySelectorAll(
        "[data-child='size-up']"
      );
      const $sideSwipeChildren = $staggerParent.querySelectorAll(
        "[data-child='side-swipe']"
      );

      // no forEach because needs an array to loop over (here no array)
      staggerProperties($staggerChildren, $staggerParent, {
        opacity: 0,
        y: 100,
        stagger: 0.5,
      });

      staggerProperties($sizeChildren, $staggerParent, {
        scale: 0.1,
        transformOrigin: "bottom",
        stagger: {
          amount: -0.5,
        },
      });

      staggerProperties($sideSwipeChildren, $staggerParent, {
        opacity: 0,
        y: -50,
        x: -100,
        stagger: {
          amount: 0.2,
        },
      });
    }
  });
};

export default swipeInElements;
