const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };
const transitionClippath = { duration: 1, ease: [0.62, 0.05, 0.01, 0.99] };

export const slideInUp = {
  initial: {
    opacity: 0,
    y: "100%",
  },

  enter: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const slideInDown = {
  initial: {
    y: "-100%",
    opacity: 0,
  },

  enter: {
    y: 0,
    opacity: 1,
    transition,
  },
};

export const slideInLeft = {
  initial: {
    x: "-100%",
  },

  enter: {
    x: 0,
    transition,
  },
};

// OPACITY
export const opacity = {
  initial: {
    opacity: 0,
  },

  enter: {
    opacity: 1,
    transition,
  },
};

// CLIPPATH
export const clippathInUp = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
  },

  enter: {
    clipPath: "inset(0 0 0 0)",
    transition: transitionClippath,
  },
};

export const clippathInDown = {
  initial: {
    clipPath: "inset(0 0 100% 0)",
  },

  enter: {
    clipPath: "inset(0 0 0 0)",
    transition: transitionClippath,
  },
};

export const clippathInRight = {
  initial: {
    clipPath: "inset(0 0 0 100%)",
    display: "none",
  },

  enter: {
    clipPath: "inset(0 0 0 0)",
    display: "block",
    transition: transitionClippath,
  },

  exit: {
    clipPath: "inset(0 0 0 100%)",
    display: "none",
    transition: transitionClippath,
  },
};

export const clippathInLeft = {
  initial: {
    clipPath: "inset(0 100% 0 0)",
  },

  enter: {
    clipPath: "inset(0 0 0 0)",
    transition: transitionClippath,
  },

  exit: {
    clipPath: "inset(0 100% 0 0)",
    transition: transitionClippath,
  },
};

// SCALE
export const scaleX = {
  initial: {
    transform: "scaleX(0)",
  },

  enter: {
    transform: "scaleX(1)",
    transition,
  },
};
