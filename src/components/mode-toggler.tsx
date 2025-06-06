import speedometer from '../assets/icon-speedometer.svg'

export function ModeToggler() {
    return (
        <div className="flex justify-center">
            <div className="flex bg-[#0f3d8e] rounded-full px-1 py-[2px]">
                <img src={speedometer} alt="spedometer" className="w-3 h-3" />
                <label className="flex justify-between items-center gap-1 mx-3 text-[10px]">
                    <input type="checkbox" className="appearance-none peer" />
                    <span className="w-6 h-3 flex items-center flex-shrink-0 p-1 bg-[#395099] rounded-full duration-300 ease-in-out peer-checked:bg-[#395099] after:w-[12px] after:h-[12px] after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-2"></span>
                    High risk mode
                </label>
            </div>
        </div>
    )
}