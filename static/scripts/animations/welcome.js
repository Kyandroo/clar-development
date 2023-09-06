import { gsap } from "gsap";

export default initializeWelcome = (callback) => {
  const $swipeParent = document.querySelector(
    "[data-animation='swipe-through']"
  );
  const $swipeElements = document.querySelectorAll(
    "[data-child='swipe-through']"
  );

  $swipeElements.forEach(($swipeElement) => {
    const $introTitle = document.getElementById("big-text-opening");

    const timeline = gsap.timeline({
      onComplete: () => {
        $introTitle.classList.remove("hidden");
        callback();
      },
    });

    timeline
      .set($swipeElement, { y: "100%" })
      .to($swipeElement, { y: "0%" })
      .to($swipeElement, { y: "-100%", delay: .3 })
      .to($swipeParent, { x: "100%", duration: 1, ease: "Expo.easeIn" });
  });
};
