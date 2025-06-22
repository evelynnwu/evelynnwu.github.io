import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ReactTyped } from "react-typed";
import { useScramble } from "use-scramble";
import Draggable from "./components/Draggable";
import "./style.css";
import AboutMe from "./components/AboutMe";
import EmailPopup from "./components/EmailPopup";

function App() {
  const calculatePosition = (index) => {
    const baseX = window.innerWidth / 2; // Fixed typo here
    const baseY = window.innerHeight / 2;
    const offset = index * 30;

    return {
      x: baseX + offset,
      y: baseY + offset,
    };
  };

  const [openPopups, setOpenPopups] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(1000);

  const popupTypes = [
    { type: "email", component: EmailPopup, title: "Email Client" },
    { type: "about", component: AboutMe, title: "About Me" },
  ];

  /*const { ref: scrambleRef1 } = useScramble({
    text: "Hi! I'm Evelyn.",
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 10,
    seed: 100,
  });*/

  const { ref: scrambleRef2 } = useScramble({
    text: "currently nineteen, sophomore at CMU, doing things for fun",
    speed: 0.8,
    tick: 2,
    step: 1,
    scramble: 10,
    seed: 100,
  });

  const addPopup = (type) => {
    const popupConfig = popupTypes.find((p) => p.type === type);
    if (!popupConfig) return;

    const newId = Date.now();
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    const newPopup = {
      id: newId,
      type: type,
      component: popupConfig.component,
      title: popupConfig.title,
      position: {
        x: 100 + openPopups.length * 50, // Fixed: use openPopups
        y: 100 + openPopups.length * 50,
      },
      zIndex: newZIndex,
    };

    setOpenPopups((prev) => [...prev, newPopup]); // Fixed: use setOpenPopups
  };

  // Remove popup
  const removePopup = (id) => {
    setOpenPopups((prev) => prev.filter((popup) => popup.id !== id)); // Fixed: use setOpenPopups
  };

  // Update popup position
  const updatePosition = (id, position) => {
    setOpenPopups(
      (
        prev // Fixed: use setOpenPopups
      ) =>
        prev.map((popup) => (popup.id === id ? { ...popup, position } : popup))
    );
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

  // Define the missing functions
  const openAboutPopup = () => addPopup("about");
  const openEmailPopup = () => addPopup("email");

  return (
    <div className="min-h-screen justify-center p-4 overflow-hidden">
      <div className="max-w-[730px] mx-auto mt-[100px] rounded-xl border-2 border-gray-300 shadow-lg bg-white relative scale-125 transform-gpu">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-theme-lb rounded-t-lg border-b border-theme-blue">
          <span className="ml-2 text-sm text-white">Evelyn's Homepage</span>
        </div>

        <div id="header-row">
          <div>
            <h1 className="font-header text-[80px] font-[300] text-theme-gray">
              <ReactTyped
                strings={["Hi! I'm Evelyn,"]}
                typeSpeed={30}
              ></ReactTyped>
            </h1>
            <h2
              ref={scrambleRef2}
              className="font-normal text-[30px] font-[300] text-theme-blue"
            ></h2>
          </div>
          <img
            src="/Evelyn drawing.png"
            alt="Drawing of myself"
            className="absolute bottom-0 right-0 h-auto translate-x-1/4 translate-y-[65px] w-48 scale-150"
          />
        </div>

        <div className="p-8">
          <div className="fontawesome fa-2x">
            <button onClick={openAboutPopup}>
              <i className="fa-solid fa-circle-info hover:text-yellow-hover"></i>
            </button>
            <a
              href="https://www.linkedin.com/in/evelynnwu/"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-linkedin hover:text-yellow-hover"></i>
            </a>
            <a
              href="https://www.github.com/evelynnwu/"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-github hover:text-yellow-hover"></i>
            </a>
            <button onClick={openEmailPopup}>
              <i className="fa-solid fa-envelope hover:text-yellow-hover"></i>
            </button>
          </div>

          {/* Render all open popups */}
          {openPopups.map(
            (
              popup // Fixed: use openPopups
            ) => (
              <Draggable
                key={popup.id}
                id={popup.id}
                defaultPosition={popup.position}
                handle=".popup-handle"
                zIndex={popup.zIndex}
                onBringToFront={bringToFront}
                onPositionChange={updatePosition} // Added this prop
              >
                <popup.component
                  id={popup.id}
                  onClose={() => removePopup(popup.id)}
                />
              </Draggable>
            )
          )}
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
