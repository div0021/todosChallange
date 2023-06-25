
import { getCurrentDay } from "@/utils/getCurrentDay";

const Heading = () => {
    const day = getCurrentDay();
  return (
    <div className="text-3xl font-bold space-y-2">
        <h1 className="text-center">#todos</h1>
        <p className="text-xs text-center font-light">{day}</p>
        <div className="flex items-center space-x-2">
    </div>
    </div>
  )
}
export default Heading;