import React, { useState, useRef } from "react";

export const DragScroll = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    containerRef.current.style.cursor = "grabbing";
    const startX = e.pageX - containerRef.current.offsetLeft;
    const scrollLeft = containerRef.current.scrollLeft;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    function handleMouseMove(e) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
      setScrollX(containerRef.current.scrollLeft);
    }

    function handleMouseUp(e) {
      containerRef.current.style.cursor = "grab";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  };

  return (
    <div
      className="scroll-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
    >
      {/* Your content goes here */}
    </div>
  );
};

export default DragScroll;
