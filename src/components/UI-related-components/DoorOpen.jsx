// DoorEffect.js
import React, { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const DoorEffect = () => {
  const [flag, setFlag] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (ref?.current && !ref.current.contains(e.target)) {
        setFlag(false);
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-full ">
      <div
        ref={ref}
        className="relative bg-primary-bg w-[80vw] md:w-[60vw] lg:w-[50vw] h-full flex justify-center items-center hover:cursor-pointer parent "
        onMouseEnter={() => setFlag(true)}
        onMouseLeave={() => setFlag(false)}
        onDragEnter={() => setFlag(true)}
        onDrop={() => setFlag(false)}
      >
        <div className="rounded-2xl p-3">
          <div className="text-blue-400"><FaCloudUploadAlt size={70} /></div>
          <p className="font-semibold">Drop Here</p>
        </div>
        {/* Left Door */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full door-0 door duration-700 ${
            flag && "door-left"
          }`}
        ></div>
        {/* Right Door */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full door-1 door duration-700 ${
            flag && "door-right"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default DoorEffect;
