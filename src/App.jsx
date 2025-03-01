import './App.css'
import DesktopIcon from './components/DesktopIcon';
import tests from './testing/testData';
import { useRef, useState, useEffect } from 'react';
import icons from "./icons";
import Window from './components/Window';

function App() {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [randIcons, setRandIcons] = useState([]);
  const [aboutVis, setAboutVis] = useState(false);

  const iconKeys = Object.keys(icons);


  useEffect(() => {
    if (!containerRef.current || tests.length === 0) return;

    const daddy = containerRef?.current;

    const maxX = daddy.clientWidth - 200;
    const maxY = daddy.clientHeight - 300;

    const newPositions = tests.map(() => ({
      x: 150 + Math.random() * (maxX - 150),
      y: 200 + Math.random() * (maxY - 200)
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
          pos && <DesktopIcon key={index} positions={pos}
            icon={randIcons[index]}
            title={tests[index].album}
            tracks={tests[index].tracks}
          />
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
        <div className="absolute inset-x-0 bottom-0 h-12 bg-utility border-t-3 border-lightGray px-1 pb-2">
          <button className="flex flex-row w-24 h-10 p-1 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-black border-b-black cursor-pointer
            active:border-t-2 active:border-l-2 active:border-black active:border-r-2 active:border-b-2 active:border-r-white active:border-b-white"
            onClick={() => setAboutVis(true)}
          >
            <img src="/H.png" alt="Henry" className="w-6 h-6 mr-2" />
            <p>About</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
