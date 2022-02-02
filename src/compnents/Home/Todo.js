import React, { useState } from 'react';
import TodoForm from './TodoForm';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

let result = todos.map((todo, index) => (
    <tr>
    <div
      className='todo-row'
      key={index}
    >
      <td key={todo.id} >
        {todo.text}
      </td>
      <td className='icons'>
        <DeleteIcon
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          style={{ color: "red", cursor: "pointer" }}
        />
          
        
        <EditIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </td>
    </div>
    </tr>
  ));
  return (
      <>
      <table className='todolist-table'>
          <tbody>
              {result}
          </tbody>
      </table>
      </>
  )
};

export default Todo;