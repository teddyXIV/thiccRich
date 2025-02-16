import { useDraggable } from "@neodrag/react";
import { useRef } from "react";
import icons from "../icons";

const DesktopIcon = ({ positions, title, icon }) => {
  const draggableRef = useRef(null);
  useDraggable(draggableRef);

  return (
    <div
      ref={draggableRef}
      className="hover:bg-white/10 active:bg-white/25 w-24 p-2"
      style={{
        left: `${positions.x}px`,
        top: `${positions.y}px`,
        position: "absolute"
      }}
    >
      <img src={icons[icon]} />
      <h1 className="text-3xl text-red-500">{title}</h1>
    </div>
  )
}

export default DesktopIcon;

