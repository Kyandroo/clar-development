import { gsap } from "gsap";

const pinElements = () => {
  const $pinParents = document.querySelectorAll("[data-animation='pin-only']");

  const pinProperties = (
    $pinChild,
    trigger,
    animations,
    scrollTriggerProps
  ) => {
    gsap.to($pinChild, {
      ...animations,
      scrollTrigger: {
        trigger: trigger,
        pin: $pinChild,
        scrub: true,
        pinSpacing: false,
        ...scrollTriggerProps,
        // markers: true,
      },
    });
  };

  if ($pinParents) {
    const $pinChildren = document.querySelectorAll("[data-child='pin-only']");
    const $pinLottie = document.querySelectorAll("[data-child='pin-lottie']");

    pinProperties(
      $pinChildren,
      $pinParents,
      {
        y: 100,
      },
      {
        end: "bottom 0%",
      }
    );

    // pinProperties(
    //   $pinLottie,
    //   $pinParents,
    //   {
    //     y: "100",
    //   },
    //   {
    //     start: "50% 25%",
    //     end: "210% bottom",
    //     markers: true,
    //   }
    // );
  }
};

export default pinElements;
