import ddArrow from'../assets/dd-arrow.svg'
import historyIcon from '../assets/rounds-history.svg'

export function HistoryBox() {
    return (
        <div className="w-[70%] mx-auto h-4 bg-gradient-to-l from-[#2b3e79] via-[#0f3d8e] to-[#2b3e79] rounded-lg flex justify-between">
            <div className="px-1 py-[2px] flex gap-[2px]">
                <div className="h-full w-3 rounded-full bg-[#fd3b5b] shadow shadow-gray-800"></div>
                <div className="h-full w-3 rounded-full bg-[#0b2136]"></div>
            </div>
            <div className="m-[2px] rounded-lg p-[2px] flex gap-1 bg-[#264fa6] shadow shadow-gray-800">
                <img src={historyIcon} />
                <img src={ddArrow} alt="dropdown-arrow" className="w-2" />
            </div>
        </div>
    )
}