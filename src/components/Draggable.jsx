import React, { useState, useRef, useEffect } from "react";

const Draggable = ({
  children,
  id,
  defaultPosition = { x: 0, y: 0 },
  handle = ".popup-handle", // Changed to match Popup component
  zIndex = 1,
  onBringToFront,
  onPositionChange,
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  const handleMouseDown = (e) => {
    // Check if the click is on the drag handle
    const handleElement = elementRef.current?.querySelector(handle);
    if (!handleElement?.contains(e.target)) return;

    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });

    // Bring to front when starting to drag
    if (onBringToFront) {
      onBringToFront(id);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newPosition = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    };

    setPosition(newPosition);
    if (onPositionChange) {
      onPositionChange(id, newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    // Bring to front on any click (not just drag handle)
    if (onBringToFront && !isDragging) {
      onBringToFront(id);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]); // Removed dragStart from dependencies

  return (
    <div
      ref={elementRef}
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: zIndex,
        userSelect: isDragging ? "none" : "auto",
        transform: isDragging ? "scale(1.02)" : "scale(1)",
        transition: isDragging ? "none" : "transform 0.2s ease",
        willChange: "transform",
      }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Draggable;
