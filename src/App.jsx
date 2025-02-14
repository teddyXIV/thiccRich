import './App.css'
import DesktopIcon from './components/DesktopIcon';

function App() {

  return (
    <>
      <div className="bg-primary w-screen h-screen relative overflow-hidden">
        <div className="bg-tertiary w-fit px-4 shadow-lg shadow-black border-2 absolute top-14 left-12 -rotate-2">
          <p className="text-4xl font-patrick italic"><span className="font-bowlby italic text-secondary text-outline">O</span>PERATION</p>
        </div>
        <p className="text-secondary font-bowlby text-outline italic -rotate-5 text-6xl absolute top-24 left-24">
          HANKSDAY.
        </p>
        <DesktopIcon />
      </div>
    </>
  )
}

export default App
