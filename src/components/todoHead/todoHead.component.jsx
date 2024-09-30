
import React from 'react'
import './todoHead.styles.scss'

const TodoHead = ({createTask,setTaskButton}) => {

  return (
    <div className='taskHead'>
            <h1>To Do List</h1> 
            <button onClick={()=>setTaskButton(createTask ? false:true)}>Add Task</button>
    </div>
  )
}

export default TodoHead