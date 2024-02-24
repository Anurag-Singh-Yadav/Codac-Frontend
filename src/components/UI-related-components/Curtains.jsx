import React from "react";

function Curtains() {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] grid grid-cols-2">
      <div className="slide-right h-full bg-gray-100"></div>
      <div className="slide-left h-full bg-gray-100"></div>
    </div>
  );
}

export default Curtains;
