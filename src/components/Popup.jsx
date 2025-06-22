// ===== components/Popup.jsx =====
import React from "react";

const Popup = ({ onClose, children, title, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-2xl border border-gray-300 min-w-80 max-w-lg ${className}`}
    >
      <div className="popup-handle bg-theme-lb px-4 py-3 rounded-t-lg border-b border-theme-lb flex justify-between items-center cursor-grab active:cursor-grabbing">
        <h3 className="text-sm font-normal text-white">{title}</h3>
        <button
          onClick={onClose} // React event handler
          className="absolute top-1 right-2 text-2xl text-white transition-transform duration-150 hover:scale-125"
        >
          &times;
        </button>
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
};

export default Popup;
