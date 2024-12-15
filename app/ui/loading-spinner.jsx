import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
    </div>
  );
}
