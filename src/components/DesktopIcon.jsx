import { useDraggable } from "@neodrag/react";
import { useRef } from "react";

const DesktopIcon = () => {
  const draggableRef = useRef(null);
  useDraggable(draggableRef);

  return (
    <div
      ref={draggableRef}
      className="hover:bg-white/10 active:bg-white/25 w-24 p-2"
    >
      <h1 className="text-3xl text-red-500">Drag me</h1>
    </div>
  )
}

export default DesktopIcon;