import { useState } from "react"
import { createContext } from "react"


export const TaskContext = createContext(
    {
        tasks:[],
    }
) 

export const TaskProvider = ({children})=>{


    const [tasks,setTasks] = useState([])


    const updateTasks = (taskToUpdate,type)=>{
        
        if(type === 'remove'){
            
            setTasks(tasks.filter((task)=>{
                if(task.id === taskToUpdate.id){
                    return false
                }
                else return true
            }))
        }
        if(type === 'add'){
           setTasks([taskToUpdate,...tasks])
        }
        if(type === 'completeCheck'){
            const completedTasks= tasks.map((task)=> {
                if(task.id === taskToUpdate.id){
                    return (
                        {
                            ...task, isCompleted: task.isCompleted? false:true
                        }
                    )
                }else return task
        })
            console.log(completedTasks)
            setTasks(completedTasks)
        }
        if(type === 'updateTimer'){
            const zeroTimerTasks= tasks.map((task)=> {
                if(task.id === taskToUpdate.id){
                    return taskToUpdate
                }else return task
        })
            console.log(zeroTimerTasks)
            setTasks(zeroTimerTasks)
        }
    }
    const value = {tasks,updateTasks}
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}