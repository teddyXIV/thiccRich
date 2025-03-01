import { useDraggable } from "@neodrag/react";
import { useRef, useState } from "react";
import icons from "../icons";
import Window from "./Window";

const DesktopIcon = ({ positions, title, icon, tracks }) => {
  const draggableRef = useRef(null);
  useDraggable(draggableRef);
  const [hidden, setHidden] = useState(true)

  const close = () => {
    setHidden(!hidden)
  }

  return (
    <>
      <div
        ref={draggableRef}
        className="hover:bg-white/10 active:bg-white/25 w-24 p-2 z-0 cursor-pointer"
        style={{
          left: `${positions.x}px`,
          top: `${positions.y}px`,
          position: "absolute"
        }}
        onClick={() => setHidden(false)}
      >
        <img src={icons[icon]} />
        <h1 className="text-base text-white text-shadow">{title}</h1>
      </div>
      <Window
        hidden={hidden}
        close={close}
        xPos={positions.x}
        yPos={positions.y}
        title={title}
        tracks={tracks}
      />
    </>
  )
}

export default DesktopIcon;

