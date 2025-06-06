import minusIcon from '../assets/minus.svg'
import plusIcon from '../assets/plus.svg'
import coinStack from '../assets/coin-stack.svg'
import fireIcon from '../assets/icon-hot.svg'

export function GameControlBox() {
    return (
        <div className="py-2 bg-gradient-to-l from-[#2b3e79] via-[#0f3d8e] to-[#2b3e79] rounded-md">
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-2 w-4/5 mx-auto">
                <div className="bg-[#194eae] shadow shadow-gray-900 px-2 py-1 flex justify-between gap-2 rounded-full">
                    <div className="flex flex-col text-[9px] font-bold">
                        <span>Bet USD</span>
                        <span className="text-center bg-[#0f3d8e] rounded-lg border border-gray-900 w-24">0.30</span>
                    </div>
                    <div className="flex gap-1 py-[5px]">
                        <button className="rounded-full px-[7px] shadow shadow-gray-900">
                            <img src={minusIcon} alt="minus-icon" className="w-2 h-2" />
                        </button>
                        <button className="rounded-full px-[7px] shadow shadow-gray-900">
                            <img src={coinStack} alt="coin-stock-icon" className="w-2 h-2" />
                        </button>
                        <button className="rounded-full px-[7px] shadow shadow-gray-900">
                            <img src={plusIcon} alt="plus-icon" className="w-2 h-2" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-1 text-[10px]">
                    <button className="bg-[#c4000d] border border-gray-900 shadow-md shadow-gray-800 rounded-xl w-14 py-1 flex flex-col justify-center items-center">
                        <span>RED</span>
                        <span className="-mt-1">X2</span>
                    </button>
                    <button className="bg-[#c4872e] border border-gray-900 shadow-md shadow-gray-800 rounded-xl w-14 pb-1 flex flex-col justify-center items-center">
                        <img src={fireIcon} alt="fire-icon" className="w-3 h-3" />
                        <span className="">X32</span>
                    </button>
                    <button className="bg-[#010101] border border-gray-700 shadow-md shadow-gray-800 rounded-xl w-14 py-1 flex flex-col justify-center items-center">
                        <span>BLACK</span>
                        <span className="-mt-1">X2</span>
                    </button>
                </div>
            </div>
        </div>
    )
}