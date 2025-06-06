import { TileBox } from './components/tile-box'
import { HistoryBox } from './components/history-box'
import { ModeToggler } from './components/mode-toggler'
import { GameControlBox } from './components/game-control-box'


function App() {

  return (
    <main className="w-full min-h-[100vh] bg-zinc-800 flex justify-center items-center">
      <div className="w-full sm:w-[70%] min-h-[70vh] bg-gradient-to-l from-[#395099] via-[#194eae] to-[#395099] rounded-md pt-7 flex flex-col justify-between gap-3 border-2 border-[#c4872e]">
        <div className="flex-grow flex flex-col justify-between sm:justify-end sm:gap-4">
          <HistoryBox />
          <TileBox />
          <ModeToggler />
        </div>
        <GameControlBox />
      </div>
    </main>
  )
}

export default App
