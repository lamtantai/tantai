"use client";

import React, { createContext, useContext, useRef, useEffect } from "react";

import LocomotiveScroll from "locomotive-scroll";

const SmoothScrollContext = createContext();

export const SmoothScrollProvider = ({ children }) => {
  const locomotiveInstance = useRef(null);

  useEffect(() => {
    if (!locomotiveInstance.current) {
      locomotiveInstance.current = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    }

    return () => {
      locomotiveInstance.current?.destroy();
      locomotiveInstance.current = null;
    };
  }, []);

  const stopScroll = () => locomotiveInstance.current?.stop();
  const startScroll = () => locomotiveInstance.current?.start();

  const contextValue = {
    stopScroll,
    startScroll,
  };

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      <div data-scroll-container>{children}</div>
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => useContext(SmoothScrollContext);
