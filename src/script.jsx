import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ReactTyped } from "react-typed";
import Draggable from "./components/Draggable";
import Popup from "./components/Popup";
import DraggablePopup from "./components/DraggablePopup";
import "./style.css";
import AboutMe from "./components/AboutMe";

function App() {
  const calculatePosition = (index) => {
    const baseX = window.innerWidth / 2 - 160;
    const baseY = window.innerHeight / 2 - 150;
    const offset = index * 30; // Stagger by 30px

    return {
      x: baseX + offset,
      y: baseY + offset,
    };
  };

  const [openPopups, setOpenPopups] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(1000);

  const openPopup = (type, title, content) => {
    // Check if popup of this type is already open
    const existingPopup = openPopups.find((popup) => popup.type === type);
    if (existingPopup) {
      bringToFront(existingPopup.id);
      return;
    }

    // Create new popup
    const newPopup = {
      id: Date.now(),
      type,
      title,
      content,
      position: calculatePosition(openPopups.length),
      zIndex: highestZIndex + 1,
    };

    setHighestZIndex(newPopup.zIndex);
    setOpenPopups((prev) => [...prev, newPopup]);
  };

  const closePopup = (id) => {
    setOpenPopups((prev) => prev.filter((popup) => popup.id !== id));
  };

  const bringToFront = (id) => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);
    setOpenPopups((prev) =>
      prev.map((popup) =>
        popup.id === id ? { ...popup, zIndex: newZIndex } : popup
      )
    );
  };

  const openAboutPopup = () => openPopup("about", "About Me", <AboutMe />);
  const openEmailPopup = () =>
    openPopup(
      "email",
      "Contact",
      <div className="text-center">
        <p className="mb-2 text-lg font-semibold">Find me at:</p>
        <p className="font-mono text-blue-600 break-all">
          evelynwu@andrew.cmu.edu
        </p>
      </div>
    );
  // Handle window resize to recalculate positions if needed
  useEffect(() => {
    const handleResize = () => {
      // Optionally recalculate popup positions on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            className="absolute bottom-0 right-0 h-auto translate-x-1/3 translate-y-1/3 w-40 scale-150"
          />
        </div>

        <div className="p-8">
          <div className="fontawesome fa-2x">
            <button onClick={openAboutPopup}>
              <i className="fa-solid fa-circle-info hover:text-theme-blue"></i>
            </button>
            <a
              href="https://www.linkedin.com/in/evelynnwu/"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-linkedin hover:text-theme-blue"></i>
            </a>
            <a
              href="https://www.github.com/evelynnwu/"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-github hover:text-theme-blue"></i>
            </a>

            {/* React event handler instead of getElementById */}
            <button onClick={openEmailPopup}>
              <i className="fa-solid fa-envelope hover:text-theme-blue"></i>
            </button>
          </div>

          {/* Render all open popups */}
          {openPopups.map((popup) => (
            <DraggablePopup
              key={popup.id}
              id={popup.id}
              title={popup.title}
              defaultPosition={popup.position}
              zIndex={popup.zIndex}
              onClose={() => closePopup(popup.id)}
              onBringToFront={() => bringToFront(popup.id)}
            >
              {popup.content}
            </DraggablePopup>
          ))}
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
