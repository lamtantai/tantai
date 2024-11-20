import React from "react";

export default function Container({ children }) {
  return (
    <>
      <div className="px-space-sm lg:px-space-md">{children}</div>
    </>
  );
}
