const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };

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
  },

  enter: {
    y: 0,
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
    transition,
  },
};
