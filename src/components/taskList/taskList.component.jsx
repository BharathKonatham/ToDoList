
import {  useContext } from 'react'
import { TaskContext } from '../../context/task.context'
import './taskList.styles.scss'
import Timer from '../timer/timer.component'
export const TaskList = () => {
    const {tasks,updateTasks} = useContext(TaskContext)
    console.log(tasks)

    const handleRemove = (taskItem)=>{
        updateTasks(taskItem,'remove')
    }
    const checkHandler = (taskItem)=>{
        updateTasks(taskItem,'completeCheck')
    }
    console.log('rendered tasklist')
   
  return (
    <div className={` ${tasks.length === 0? 'noItems':'taskListContainer'}`}>{tasks.map((taskItem)=>(
       //${taskItem.taskTimer === 0?'taskInComplete':''}
        <div className={` ${(!taskItem.isCompleted && taskItem.taskTimer === 0)?'taskInComplete':'taskItem'}`} key={taskItem.id}>
            {( taskItem.taskTimer > 0) && <Timer task = {taskItem} />}
            <input type="checkbox" checked={taskItem.isCompleted}  onChange={()=>checkHandler(taskItem)}/>
            <h6 className={`${taskItem.isCompleted &&'checked'}`}>{taskItem.taskContent}</h6>
            <button onClick={()=>handleRemove(taskItem)}>Remove</button>
        </div>
    ))}</div>
  )
}
