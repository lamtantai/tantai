import React from "react";

export function MenuButton({ onClick, children }) {
  return (
    <button className="" onClick={onClick}>
      <div className="relative pb-[2px]">
        <p className="text-lg/none font-semibold md:text-2xl/none">
          {children}
        </p>
        <div className="bg-primary absolute bottom-0 left-0 h-[1.5px] w-full" />
      </div>
    </button>
  );
}
