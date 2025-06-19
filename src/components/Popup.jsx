// ===== components/Popup.jsx =====
import React from "react";

const Popup = ({ onClose, children, title, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-2xl border border-gray-300 min-w-80 max-w-md ${className}`}
    >
      <div className="popup-handle bg-gray-100 px-4 py-3 rounded-t-lg border-b border-gray-200 flex justify-between items-center cursor-grab active:cursor-grabbing">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-xl leading-none hover:bg-gray-200 w-6 h-6 rounded flex items-center justify-center"
        >
          ×
        </button>
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
};

export default Popup;
