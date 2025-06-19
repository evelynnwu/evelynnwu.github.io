// ===== components/DraggablePopup.jsx =====
// Combined component for convenience
import React from "react";
import Draggable from "./Draggable";
import Popup from "./Popup";

const DraggablePopup = ({
  title,
  onClose,
  children,
  defaultPosition,
  onDrag,
  onStart,
  onStop,
  className,
}) => {
  return (
    <Draggable
      handle=".popup-handle"
      defaultPosition={defaultPosition}
      onDrag={onDrag}
      onStart={onStart}
      onStop={onStop}
    >
      <Popup title={title} onClose={onClose} className={className}>
        {children}
      </Popup>
    </Draggable>
  );
};

export default DraggablePopup;
