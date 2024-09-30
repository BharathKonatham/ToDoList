import React, { useState } from 'react'
import './create-task.styles.scss'
import { useContext } from 'react'
import { TaskContext } from '../../context/task.context'

const CreateTask = ({createTask,setTaskButton}) => {
  const {updateTasks} = useContext(TaskContext)
  const [taskContent,setTaskContent] = useState('')
  const [taskTimer,setTaskTimer] = useState(null)
  const timers = ['',1,2,3,4,5,6,7,8]
  const addTask = ()=>{
    const id = Math.round(Math.random()*1000)
    updateTasks({
      taskContent,
      id,
      taskTimer,
      isCompleted: false
    },'add')
    setTaskButton(false)
  }

  const onTimerChange = (e)=>{
    if(e.target.value){
      const time  = Number(e.target.value)
      setTaskTimer(time*60)
    }
    else{
      setTaskTimer(e.target.value)
    }
   
  }
  return (
    <div className='createTaskContainer'>
      <div className='taskName'>
        <input className='taskName' value={taskContent} onChange={(e)=>setTaskContent(e.target.value)}/>
        <button onClick={addTask} disabled={taskContent.length < 1? true: false}>Add</button>
        <button onClick={()=>{setTaskButton(false)}}>Cancel</button>
      </div>
      <div className='taskTimer'>
        <label htmlFor='timer'>Set timer:</label>
        <select id='timer' onChange={onTimerChange}>
          {timers.map((timer)=>{
            return (
              <option key={timer} value={timer}>{timer}</option>
            )
          })}
        </select>
      </div>

    </div>
  )
}

export default CreateTask