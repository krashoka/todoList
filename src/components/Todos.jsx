import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./todos.module.css";


const Todos = () => {
  let [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onDelete = (id) => {
    let todosNew = todos.filter(todo => todo.id !== id);
    setTodos(todosNew);
  }


  return (
    <div>
        <input className={styles.inputStyle} value={newTodo} onChange={handleChange} placeholder="Write Something..."/>


        <button
          onClick={() => {
            setTodos([...todos, {id: Date.now(), value: newTodo}]);
            setNewTodo("");
          }}

          className={styles.btn}
        >
          +
        </button>


        <br />
        <br />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
        ))}
    </div>
  );
};

export default Todos;
