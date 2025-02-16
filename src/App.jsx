import './App.css'
import DesktopIcon from './components/DesktopIcon';
import tests from './testing/testData';
import { useRef, useState, useEffect } from 'react';
import icons from "./icons";

function App() {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [randIcons, setRandIcons] = useState([]);

  const iconKeys = Object.keys(icons);


  useEffect(() => {
    if (!containerRef.current || tests.length === 0) return;

    const daddy = containerRef?.current;
    const maxX = daddy.clientWidth - 96;
    const maxY = daddy.clientHeight - 96;

    const newPositions = tests.map(() => ({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    }));

    const randomIcons = tests.map(() => (
      iconKeys[Math.floor(Math.random() * iconKeys.length)]
    ))

    setRandIcons(randomIcons)
    setPositions(newPositions);

  }, [containerRef, tests])

  useEffect(() => {
    console.log("iconsKeys", iconKeys)
    console.log("randomIcons", randIcons)
  }, [randIcons])

  const albums = positions ?
    <>
      {positions.length === tests.length &&
        positions.map((pos, index) => (
          pos && <DesktopIcon key={index} positions={pos} title={tests[index].album} icon={randIcons[index]} />
        ))
      }
    </>
    : null;


  return (
    <>
      <div className="bg-primary w-screen h-screen relative overflow-hidden" ref={containerRef}>
        <div className="bg-tertiary w-fit px-4 shadow-lg shadow-black border-2 absolute top-14 left-12 -rotate-2">
          <p className="text-4xl font-patrick italic"><span className="font-bowlby italic text-secondary text-outline">O</span>PERATION</p>
        </div>
        <p className="text-secondary font-bowlby text-outline italic -rotate-5 text-6xl absolute top-24 left-24">
          HANKSDAY.
        </p>
        {albums}
      </div>
    </>
  )
}

export default App
