import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {useState,ChangeEvent} from 'react'

interface Props{
    addTodos:({text,completed}:{
        text:string,
        completed?:boolean
    })=>void,

}

const AddTodos:React.FC<Props> = ({addTodos}) => {

    const [control,setControl] = useState<string>('');

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
      
        setControl(e.target.value);
    }
  return (
    <div className="flex w-full max-w-full items-center space-x-10">
    <Input type="text" placeholder="add details" value={control} onChange={handleChange}/>
    <Button type="submit"  className="px-8" onClick={()=>{
      if(control===''){
        alert('please enter a todo')
      }else{
        addTodos({text:control,completed:false})
        setControl('')
      }
      
       
}}>Add</Button>
  </div>  )
}
export default AddTodos;