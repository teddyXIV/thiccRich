import { useDraggable } from "@neodrag/react";
import { useRef } from "react";
import x from "../assets/x.svg"

const Window = () => {
  const draggableRef = useRef(null);
  useDraggable(draggableRef);

  return (
    <div
      ref={draggableRef}
      className="w-96 h-96 bg-utility border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-black border-b-black
        relative "
    >
      <div className="absolute inset-x-0 top-0 h-8 w-full bg-windowsBlue p-1">
        <button className="w-6 h-6 bg-utility border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-black border-b-black
          active:border-t-2 active:border-l-2 active:border-black active:border-r-2 active:border-b-2 active:border-r-white active:border-b-white cursor-pointer"
        >
          <img src={x} alt="x" />
        </button>
      </div>
    </div>
  )
}

export default Window;