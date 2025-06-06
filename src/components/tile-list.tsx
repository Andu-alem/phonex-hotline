import blackTile from '../assets/black-tile.png'
import fireTile from '../assets/fire-tile.png'
import redTile from '../assets/red-tile.png'

function Tile({tileColor}:{tileColor: string}) {
    const tileSrc = tileColor === "fire" ? fireTile : tileColor === "black" ? blackTile : redTile
    return <img src={tileSrc} alt="tile" className="w-10 h-10" />
}

export function TileList() {
  return (
    <div className="flex">
        {
            Array.from(Array(22)).map((item,index) => {
                const tileColor:string = index === 7 ? "fire" : index%2 === 0 ? "black" : "red"
                return <Tile key={item} tileColor={tileColor} />
            })
        }
    </div>
  )
}