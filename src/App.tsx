import AddTodos from "./myComponents/AddTodos";
import Heading from "./myComponents/Heading";
import NavigationTitles from "./myComponents/NavigationTitles";
import Task from "./myComponents/Task";
import { useEffect, useState } from "react";
import { getCurrentDay } from "./utils/getCurrentDay";
import { v4 } from "uuid";
import { Button } from "./components/ui/button";
import { Trash2 } from "lucide-react";

type Task = {
  id: string;
  text: string;
  completed?: boolean;
};
interface TodosProps {
  day: string;
  tasks: Task[];
}
export interface ActiveProps {
  all: boolean;
  completed: boolean;
  active: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodosProps | null>(null);

  const [active, setActive] = useState<ActiveProps>({
    all: true,
    completed: false,
    active: false,
  });

  useEffect(()=>{
    // localStorage.clear()
    if(localStorage.getItem('todos')){
      const todosData:TodosProps[] = JSON.parse(localStorage.getItem("todos") as string)
       
      setTodos(todosData[todosData.length-1])
    }      
  },[])

  useEffect(()=>{
    console.log(localStorage.getItem('todos'))

   setTimeout(()=>{ 
      if(!localStorage.getItem('todos')){
           const arr = [todos];
           localStorage.setItem("todos",JSON.stringify(arr));
    
      }else{
        const todosArr : TodosProps[]= JSON.parse(localStorage.getItem('todos') as string);
        if(todosArr[todosArr.length-1]?.day===getCurrentDay()){
          todosArr[todosArr.length-1].tasks=todos?.tasks as Task[];
        }else{
             todosArr.push(todos as TodosProps);
        }
        if(todosArr.length>3){
          for(let i=0;i<todosArr.length-3;i++){
            todosArr.shift();
          }
        }
        localStorage.setItem("todos",JSON.stringify(todosArr));
      }
    })
  },[todos])

  const handleAddTodos = ({
    text,
    completed = false,
  }: {
    text: string;
    completed?: boolean;
  }) => {
    const day = getCurrentDay();

    if (!todos) {
      setTodos(
        {
          day,
          tasks: [
            {
              id: v4(),
              text,
              completed,
            },
          ],
        },
      );
    } else {

      setTodos(
        {
          day,
          tasks: [...todos.tasks,{
            id:v4(),
            text,
            completed,
          }
          ]
      
    }
      )
  }


}

  const handleRemoveTodos = (id: string) => {
    if (todos) {
     setTodos({
       ...todos,
       tasks:todos.tasks.filter(el=>el.id!==id)
     })
    }
  };
  const handleActive = (str: string) => {
    switch (str) {
      case "all":
        setActive({
          all: true,
          completed: false,
          active: false,
        });
        break;
      case "active":
        setActive({
          all: false,
          completed: false,
          active: true,
        });
        break;
      case "completed":
        setActive({
          all: false,
          completed: true,
          active: false,
        });
    }
  };
  const handleChecks = (id: string) => {
    if (todos) {
      setTodos(
       {
        ...todos,
        tasks:todos.tasks.map(el=>{
          if(el.id===id){
          return ({
            ...el,
            completed:!el.completed
          })}
          return el
        })
       }
        )
      
    }
  };
  return (
    <>
      <div className="h-[100dvh] w-[100dvw] flex justify-center font-montserrat">
        <div className="mt-16 space-y-5">
          <Heading />
          <div className="space-y-5">
            <NavigationTitles active={active} handleNavigation={handleActive} />
            {(active.active || active.all) && (
              <AddTodos addTodos={handleAddTodos} />
            )}
            <div className="space-y-5">
              
              {todos && todos.tasks?.length>0 &&
                todos.tasks.map((el1) => {
                    if (active.all) {
                      return (
                        <Task
                          key={el1.id}
                          handleChecks={handleChecks}
                          id={el1.id}
                          text={el1.text}
                          completed={el1.completed}

                        />
                      );
                    } else if (active.active && !el1.completed) {
                      return (
                        <Task
                          key={el1.id}
                          handleChecks={handleChecks}
                          id={el1.id}
                          text={el1.text}
                          completed={el1.completed}
                        />
                      );
                    } else if (active.completed && el1.completed){
                      return (
                        <Task
                          key={el1.id}
                          handleChecks={handleChecks}
                          id={el1.id}
                          text={el1.text}
                          completed={el1.completed}
                          active={true}
                          handleRemoveTodos={handleRemoveTodos}
                        />
                      );}
                  })}
            {active.completed && todos && todos.tasks.length>0 && <div className="flex justify-end">
              <Button className="bg-[#eb5757] space-x-3 py-6 px-5 hover:bg-[#eb5757]/90" onClick={()=> setTodos({day:getCurrentDay(),tasks:todos.tasks.filter(el=>!el.completed)})}>
                <Trash2 /> <span>delete all</span>
              </Button>
            </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
