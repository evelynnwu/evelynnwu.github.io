import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ReactTyped } from "react-typed";
import Draggable, { DraggableCore } from "react-draggable";
import "./style.css";

function App() {
  // React state instead of DOM manipulation
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupScale, setPopupScale] = useState("scale-0");
  const [isBrowserPopupVisible, setIsBrowserPopupVisible] = useState(false);
  const handleStop = (e, data) => {
    // Save the final position
    setPosition({ x: data.x, y: data.y });
  };

  // Event handlers
  const openPopup = () => {
    setIsPopupVisible(true);
  };
  const closePopup = () => {
    setPopupScale("scale-0");
    setIsPopupVisible(false);
  };

  const openBrowserPopup = () => {
    setIsBrowserPopupVisible(true);
  };
  const closeBrowserPopup = () => {
    setIsBrowserPopupVisible(false);
  };

  useEffect(() => {
    if (isPopupVisible) {
      setPopupScale("scale-100");
    }
  });
  const handlePopupClick = (e) => {
    // Close if clicking the backdrop
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <div className="min-h-screen justify-center translate-y--1/3 p-4">
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
              <ReactTyped strings={["Hi! I'm Evelyn,"]} typeSpeed={40} />
            </h1>
            <h2 className="font-normal text-[50px] font-[300] text-theme-blue">
              a software developer.
            </h2>
          </div>
          <Draggable>
            <img
              src="/Evelyn drawing.png"
              alt="Drawing of myself"
              className="absolute bottom-0 right-0 w-40 h-auto translate-x-1/3 translate-y-1/3 scale-150"
            />
          </Draggable>
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
            <button onClick={openBrowserPopup}>
              <i className="fa-brands fa-github fa-2x hover:text-theme-blue"></i>
            </button>

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
              <div
                className={`bg-white rounded-lg shadow-lg p-8 relative w-80 text-center transform transition-transform duration-300 ${popupScale}`}
              >
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

          {isBrowserPopupVisible && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
              onClick={(e) => handlePopupClick(e, closeBrowserPopup)}
            >
              <Draggable>
                <div className="bg-white rounded-lg shadow-2xl relative w-full max-w-4xl h-[80vh] transform transition-transform duration-300 scale-100">
                  {/* Mini browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-t-lg border-b border-gray-300">
                    {/* URL bar */}

                    {/* Close button */}
                    <button
                      onClick={closeBrowserPopup}
                      className="text-gray-400 hover:text-gray-700 text-xl font-bold px-2"
                    >
                      ×
                    </button>
                  </div>
                  {/* Browser content */}
                  <div className="h-full">
                    <iframe
                      src="https://example.com"
                      className="w-full h-full rounded-b-lg"
                      name="GitHub Profile"
                      style={{ height: "calc(100% - 60px)" }}
                    />
                  </div>
                </div>
              </Draggable>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
