import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ReactTyped } from "react-typed";
import Draggable from "./components/Draggable";
import "./style.css";

function App() {
  const calculateCenterPosition = () => {
    // Popup dimensions (w-80 = 320px width, estimate height)
    const popupWidth = 320;
    const popupHeight = 200; // Estimated height

    return {
      x: window.innerWidth / 2 - popupWidth / 2,
      y: window.innerHeight / 2 - popupHeight / 2,
    };
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 });

  // Event handlers
  const openPopup = () => {
    setIsPopupVisible(true);
  };
  const closePopup = () => {
    setIsPopupVisible(false);
  };
  useEffect(() => {
    const updatePosition = () => {
      setCenterPosition(calculateCenterPosition());
    };

    updatePosition(); // Set initial position
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);
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
          <img
            src="/Evelyn drawing.png"
            alt="Drawing of myself"
            className="absolute bottom-0 right-0 w-40 h-auto translate-x-1/3 translate-y-1/3 scale-150"
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
            <a
              href="https://www.github.com/evelynnwu/"
              target="_blank"
              rel="noopener"
            >
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
              <Draggable defaultPosition={centerPosition}>
                <div
                  className={`bg-white rounded-lg shadow-lg p-8 relative w-80 text-center transform transition-transform duration-300`}
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
              </Draggable>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
