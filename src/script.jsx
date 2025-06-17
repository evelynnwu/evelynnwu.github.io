import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  // React state instead of DOM manipulation
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Event handlers
  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);
  const handlePopupClick = (e) => {
    // Close if clicking the backdrop
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 rounded-xl border-2 border-gray-300 shadow-lg bg-white relative">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-theme-lb rounded-t-lg border-b border-theme-blue">
        <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
        <span className="w-3 h-3 bg-green-400 rounded-full inline-block"></span>
        <span className="ml-4 text-sm font-normal">Evelyn's Homepage</span>
      </div>

      <div id="header-row">
        <div>
          <h1 className="font-header text-[80px] font-[300]">
            Hi! I'm Evelyn,
          </h1>
          <h2 className="font-normal text-[50px] font-[300] text-theme-blue">
            a software developer.
          </h2>
        </div>
        <img
          src="/Evelyn drawing.png"
          alt="Drawing of myself"
          className="absolute bottom-0 right-0 w-40 h-auto translate-x-1/3 translate-y-1/3"
        />
      </div>

      <div className="p-8">
        <div className="fontawesome">
          <a
            href="https://www.linkedin.com/in/evelynnwu/"
            target="_blank"
            rel="noopener"
          >
            <i className="fa-brands fa-linkedin fa-2x hover:text-theme-blue"></i>
          </a>
          <a href="https://github.com/evelynnwu" target="_blank" rel="noopener">
            <i className="fa-brands fa-github fa-2x hover:text-theme-blue"></i>
          </a>

          {/* React event handler instead of getElementById */}
          <button onClick={openPopup}>
            <i className="fa-solid fa-envelope fa-2x hover:text-theme-blue"></i>
          </button>
        </div>

        {/* Conditional rendering instead of hidden class */}
        {isPopupVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            onClick={handlePopupClick} // Close on backdrop click
          >
            <div className="bg-white rounded-lg shadow-lg p-8 relative w-80 text-center">
              <button
                onClick={closePopup} // React event handler
                className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-gray-700"
              >
                &times;
              </button>
              <p className="mb-2 text-lg font-semibold">Find me at:</p>
              <p className="font-mono text-blue-600 break-all">
                evelynwu@andrew.cmu.edu
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
