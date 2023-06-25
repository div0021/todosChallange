import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Trash2 } from "lucide-react";

interface TaskProps{
    text:string,
    id:string,
    handleChecks:(id:string)=>void,
    completed?:boolean
    active?:boolean,
    handleRemoveTodos?:(id:string)=>void
}
const Task:React.FC<TaskProps> = ({text,id,handleChecks,completed,active,handleRemoveTodos})=>{
  const handleCheckedChange = (e:CheckedState)=> {
    handleChecks(id);
  }
    return(
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
          <Checkbox id="task" onCheckedChange={handleCheckedChange} checked={completed}/>
        <label
          htmlFor="task"
          className="text-sm font-medium leading-none peer-aria-checked:line-through"
        >
          {text}
        </label>
          </div>
          {active && <Trash2 className="cursor-pointer text-[#bdbdbd] hover:text-[#333333]" onClick={()=>handleRemoveTodos && handleRemoveTodos(id)}/>}
      </div>
    )

}
export default Task;