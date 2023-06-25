

import { ActiveProps } from "@/App";
import { Button } from "@/components/ui/button";


interface Props {
  handleNavigation:(str:string) => void;
  active:ActiveProps
}

const NavigationTitles:React.FC<Props> = ({handleNavigation,active}) => {

  return (
    <div className="flex justify-center items-center">
        <div className="border-b border-gray-400 sm:w-52 flex items-center justify-center">
            <Button className={`text-black px-7 border-none before:bg-transparent hover:bg-white hover:before:bg-[#2F80ED]/50 relative before:absolute before:w-full before:h-full before:z-10 bg-transparent before:rounded-md before:top-[51px]  overflow-hidden py-7 rounded-none text-sm ${active.all? "before:bg-[#2F80ED]":null}`} onClick={()=> handleNavigation('all')}>All</Button>
        </div>
        <div className="border-b border-gray-400 sm:w-52 flex items-center justify-center">
            <Button className={`text-black px-7 border-none before:bg-transparent hover:bg-white hover:before:bg-[#2F80ED]/50 relative before:absolute before:w-full before:h-full before:z-10 bg-transparent before:rounded-md before:top-[51px]  overflow-hidden py-7 rounded-none text-sm ${active.active? "before:bg-[#2F80ED]":null}`} onClick={()=> handleNavigation('active')} >Active</Button>
        </div>
        <div className="border-b border-gray-400 sm:w-52 flex items-center justify-center">
            <Button className={`text-black px-7 border-none before:bg-transparent hover:bg-white hover:before:bg-[#2F80ED]/50 relative before:absolute before:w-full before:h-full before:z-10 bg-transparent before:rounded-md before:top-[51px]  overflow-hidden py-7 rounded-none text-sm ${active.completed? "before:bg-[#2F80ED]":null}`} onClick={() => handleNavigation('completed')}>Completed</Button>
        </div>
    </div>
  )
}
export default NavigationTitles;