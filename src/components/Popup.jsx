// ===== components/Popup.jsx =====
import React from "react";

const Popup = ({ onClose, children, title, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-2xl border border-gray-300 min-w-80 max-w-lg ${className}`}
    >
      <div className="popup-handle bg-gray-100 px-4 py-4 rounded-t-lg border-b border-gray-200 flex justify-between items-center cursor-grab active:cursor-grabbing">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <button
          onClick={onClose} // React event handler
          className="absolute top-0 right-2 text-2xl text-gray-400 hover:text-gray-700"
        >
          &times;
        </button>
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
};

export default Popup;
