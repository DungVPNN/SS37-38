import React, { useState, useCallback } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = useCallback((newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.todoInput.value;
    if (input.trim() !== '') {
      handleAddTodo(input);
      event.target.reset();
    }
  };
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoInput" placeholder="Add a new todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
export default TodoList;