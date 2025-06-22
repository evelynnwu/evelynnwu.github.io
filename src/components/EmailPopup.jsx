import React from "react";
import Popup from "./Popup";

const EmailPopup = ({ onClose, id }) => {
  return (
    <Popup title="Contact" onClose={onClose}>
      <div className="text-center">
        <p className="mb-2 text-lg font-semibold">Find me at:</p>
        <p className="font-mono text-blue-600 break-all">
          <a
            href="mailto:evelynwu@andrew.cmu.edu"
            target="_blank"
            rel="noopener"
          >
            evelynwu@andrew.cmu.edu
          </a>
        </p>
      </div>
    </Popup>
  );
};

export default EmailPopup;
