import { gsap } from "gsap";
import debounce from "./debounce";

const $mouseParents = document.querySelectorAll(
  "[data-animation='mouse-move']"
);

const mouseMove = () => {
  $mouseParents.forEach(($mouseParent) => {
    const $mouseElement = $mouseParent.querySelectorAll(
      "[data-child='mouse-move']"
    );

    gsap.set($mouseElement, {
      xPercent: -50,
      yPercent: -50,
      // scale: 0,
      // opacity: 0,
      ease: "Power4.easeInOut",
    });

    const updatePosition = (e) => {
      gsap.to($mouseElement, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      });
    };

    const debouncedPosition = debounce(updatePosition, 1);

    window.addEventListener("mousemove", debouncedPosition);
  });
};

export default mouseMove;
