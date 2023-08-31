//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/newTodoForm';

function App() {


  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Task 1', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Task  2', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'Task 3', rowAssigned: 'User three'},
    {rowNumber: 4, rowDescription: 'Task 51', rowAssigned: 'User four'},
    {rowNumber: 5, rowDescription: 'Task 456', rowAssigned: 'User five'}
  ])

  const addTodo = () => {
    if(todos.length > 0){
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'Task ' + (todos.length + 1),
        rowAssigned: 'User ' + (todos.length + 1)
      };
      setTodos(todos => [...todos, newTodo]);
      //todos.push(newTodo);
      console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>add new todo</button>
          <NewTodoForm/>
       </div>
      </div>
    </div>
  );
}

export default App;
