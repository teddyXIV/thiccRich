import { useDraggable } from "@neodrag/react";
import { useRef } from "react";
import x from "../assets/x.svg"

const Window = ({ hidden, close, xPos, yPos, title, tracks }) => {
  const draggableRef = useRef(null);
  useDraggable(draggableRef);

  const trackList = tracks.map((track) => (
    <li>
      {track}
    </li>
  ))



  // positions.map((pos, index) => (
  //   pos && <DesktopIcon key={index} positions={pos}
  //     icon={randIcons[index]}
  //     title={tests[index].album}
  //     tracks={tests[index].tracks}
  //   />
  // ))


  return (
    <div
      ref={draggableRef}
      className={`flex flex-col z-10 w-96 pb-2 h-fit bg-utility border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-black border-b-black relative ${hidden ? "invisible" : "visible"}`}
      style={{
        left: `${xPos}px`,
        top: `${yPos}px`,
        position: "absolute"
      }}
    >
      <div className="absolute inset-x-0 top-0 h-8 w-auto bg-windowsBlue p-1 flex justify-end">
        <h2 className="text-xl text-white">{title}</h2>
        <button className="w-6 h-6 bg-utility border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-black border-b-black
          active:border-t-2 active:border-l-2 active:border-black active:border-r-2 active:border-b-2 active:border-r-white active:border-b-white 
          cursor-pointer ml-auto"
          onClick={close}
        >
          <img src={x} alt="x" />
        </button>
      </div>
      <div className="mt-10 mx-2 p-1 h-fit bg-insetGray border-t-2 border-l-2 border-black border-r-2 border-b-2 border-r-white border-b-white">
        <ul>
          {trackList}
        </ul>
      </div>
    </div>
  )
}

export default Window;