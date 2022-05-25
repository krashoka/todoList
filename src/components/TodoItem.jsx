import React, { useState } from 'react'
import styles from "./todos.module.css";

const TodoItem = ({todo, onDelete}) => {
    const[isCompleted, setIsCompleted] = useState(todo.isCompleted);
  return (
    <div className={styles.todoList} key={todo.id}>
      <div className={styles.todoData}>
        <input
            type="checkbox"
            checked = {isCompleted}
            onChange={(e)=>{
                setIsCompleted(e.target.checked);
            }}

            className={styles.check}
        />
        <div className={isCompleted ? styles.striked:""}>{todo.value}</div>
      </div>
        
      <button className={styles.close} onClick={()=>onDelete(todo.id)}>X</button>
    </div>
  )
}

export default TodoItem;