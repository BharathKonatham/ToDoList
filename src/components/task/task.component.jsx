import React from 'react'
import './task.styles.scss'
import { useState } from 'react'
import CreateTask from '../create-task/create-task.container'
import TodoHead from '../todoHead/todoHead.component'
import { TaskList } from '../taskList/taskList.component'
const Task = () => {
    const [createTaskbutton,setCreateTaskbutton] = useState(false)
  return (
    <div className='taskContainer'>
    
        <TodoHead createTask={createTaskbutton} setTaskButton={setCreateTaskbutton}/>
        {createTaskbutton && <CreateTask createTask={createTaskbutton}setTaskButton={setCreateTaskbutton}/>}
        
        <TaskList />
    </div>
  )
}

export default Task
