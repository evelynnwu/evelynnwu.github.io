import React, { useState, useRef, useEffect } from "react";

const Draggable = ({
  children,
  handle,
  disabled = false,
  defaultPosition = { x: 0, y: 0 },
  onDrag,
  onStart,
  onStop,
  zIndex,
  onBringToFront,
  id,
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (disabled) return;

    if (handle && !e.target.closest(handle)) return;

    // Bring to front when clicked
    onBringToFront?.(id);

    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const offset = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setDragOffset(offset);

    // Call onStart callback
    onStart?.(e, { x: position.x, y: position.y });

    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    };

    setPosition(newPosition);

    // Call onDrag callback
    onDrag?.(e, newPosition);
  };

  const handleMouseUp = (e) => {
    if (isDragging) {
      setIsDragging(false);
      // Call onStop callback
      onStop?.(e, { x: position.x, y: position.y });
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none";

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.userSelect = "";
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : handle ? "default" : "grab",
        zIndex: zIndex,
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
