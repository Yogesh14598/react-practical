import React, {  useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Header from './Header';

function Home() {
  const [todos, setTodos] = useState([]); 
  
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };


  return (
    <>
    <Header/>
    <div className=' todolists'>
      <h1>ToDo List</h1>
      <TodoForm onSubmit={addTodo} />

      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      </div>
    </>
  );
}

export default Home;