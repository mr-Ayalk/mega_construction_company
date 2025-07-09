// animation.js

export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 }, // Start slightly below with no opacity
  visible: {
    y: 0, // Final position
    opacity: 1, // Fully visible
    transition: {
      staggerChildern: 2,
      duration: 1.5, // Duration of the slide-up animation
      ease: "easeOut",
    },
  },
};

export const zoomInVariants = {
  hidden: { scale: 0.5, opacity: 0 }, // Start smaller with no opacity
  visible: {
    scale: 1, // Full size
    opacity: 1, // Fully visible
    transition: {
      staggerChildern: 2,
      duration: 1.2, // Duration of the zoom-in animation
      ease: "easeOut",
    },
  },
};
