"use client";

import { Pointer } from "../magicui/pointer";

const CrosshairPointer = () => {
  return (
    <Pointer className="pointer-events-none fixed z-50 left-0 top-0 -translate-x-1/2 -translate-y-1/2">
      <div className="relative w-6 h-6">
        {/* Top-left */}
        <div className="absolute top-0 left-0 w-[6px] h-[2px] bg-primary" />
        <div className="absolute top-0 left-0 w-[2px] h-[6px] bg-primary" />

        {/* Top-right */}
        <div className="absolute top-0 right-0 w-[6px] h-[2px] bg-primary" />
        <div className="absolute top-0 right-0 w-[2px] h-[6px] bg-primary" />

        {/* Bottom-left */}
        <div className="absolute bottom-0 left-0 w-[6px] h-[2px] bg-primary" />
        <div className="absolute bottom-0 left-0 w-[2px] h-[6px] bg-primary" />

        {/* Bottom-right */}
        <div className="absolute bottom-0 right-0 w-[6px] h-[2px] bg-primary" />
        <div className="absolute bottom-0 right-0 w-[2px] h-[6px] bg-primary" />

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-[4px] h-[4px] bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </Pointer>
  );
};

export default CrosshairPointer;
