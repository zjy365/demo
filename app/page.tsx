"use client";

import React, { useState } from "react";
function RightContext() {
  const [context, setContext] = useState(false);
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 });
  const showNav = (event) => {
    event.preventDefault();
    setContext(false);
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    };
    console.log(positionChange);

    setXyPosistion(positionChange);
    setContext(true);
  };
  const hideContext = (event) => {
    setContext(false);
  };

  return (
    <>
      <h2 className="mb-3">React Right Click Context Menu Example</h2>
      <div className="h-10" onContextMenu={showNav} onClick={hideContext}>
        {context && (
          <div
            style={{ top: xYPosistion.y, left: xYPosistion.x }}
            className="fixed bg-white"
          >
            <div
              className="menuElement"
              onClick={() => {
                console.log(111);
              }}
            >
              Refactor
            </div>
            <div
              className="menuElement"
              onClick={() => {
                console.log(222);
              }}
            >
              Cut
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function App() {
  return (
    <div>
      <RightContext />
    </div>
  );
}
