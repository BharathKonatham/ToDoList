import React, { useEffect, useState, useRef } from 'react';
import './timer.styles.scss'
import { TaskContext } from '../../context/task.context';
import { useContext } from 'react';

const Timer = React.memo(({ task }) => {
  const [timeValue, setTime] = useState(task.taskTimer); //
  const {updateTasks} = useContext(TaskContext)
  const remTime = useRef();

  useEffect(() => {
    // Use the functional update form to ensure the latest state value is used
    if(!task.isCompleted){
        remTime.current = setInterval(() => {
            setTime((prevTime) => {//when setTime is called with funcitonal update, its current state value is automatically passed to the function
              if (prevTime > 0) {
                return prevTime - 1;
              } else {
                clearInterval(remTime.current); // Clear the interval when time reaches 0
                return prevTime;
              }
            });
          }, 1000);
      
          // Cleanup function to clear interval on component unmount
          
    }
    else{
        return () => clearInterval(remTime.current);
    }
    return () => clearInterval(remTime.current);
  }, [task.isCompleted]);

  let hrs = (Math.trunc(timeValue/60))
  let min = Math.trunc(timeValue%60)
  if(timeValue === 0){
    // setMissedClass('taskInComplete')
    updateTasks({
        ...task,taskTimer:timeValue
    },'updateTimer')
  }
  return <div className={` timerContainer ${timeValue < task.taskTimer*.3 ?'backGroundRed':timeValue < task.taskTimer*.5 ?'backGroundOrange':''}`}>{  hrs > 0 && `${hrs}:`}{`${min}`}</div>;
});

export default Timer;
