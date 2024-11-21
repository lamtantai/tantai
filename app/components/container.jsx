import React from "react";

export default function Container({ children }) {
  return (
    <>
      <div className="px-space-sm pt-space-lg lg:px-space-md">{children}</div>
    </>
  );
}
