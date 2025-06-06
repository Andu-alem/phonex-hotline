import { TileList } from "./tile-list"
import arrowIcon from '../assets/arrow.svg'

export function TileBox() {
    return (
        <div className="mx-2 h-[200px] bg-gradient-to-l from-[#2b3e79] via-[#0f3d8e] to-[#2b3e79] border border-[#425fb6] rounded-md flex flex-col justify-between overflow-hidden ">
            <div className="w-full flex justify-center">
                <img src={arrowIcon} alt="down-arrow" />
            </div>
            <TileList />
            <div className="w-full flex justify-center bottom-0">
                <img src={arrowIcon} alt="up-arrow" className="rotate-180" />
            </div>
        </div>
    )
}