import speedometer from '../assets/icon-speedometer.svg'

export function ModeToggler() {
    return (
        <div className="flex justify-center">
            <div className="flex bg-[#0f3d8e] rounded-full px-1 py-[2px]">
                <img src={speedometer} alt="spedometer" className="w-3 h-3" />
                <div className="space-x-1 mx-3 flex items-center">
                    <input type="checkbox" />
                    <label className="text-[10px]">High risk mode</label>
                </div>
            </div>
        </div>
    )
}