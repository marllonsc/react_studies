//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/newTodoForm';

function App() {

  const[showAddTodoForm, setShowAddTodoForm] = useState(false);


  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Task 1', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Task  2', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'Task 3', rowAssigned: 'User three'},
    {rowNumber: 4, rowDescription: 'Task 51', rowAssigned: 'User four'},
    {rowNumber: 5, rowDescription: 'Task 456', rowAssigned: 'User five'}
  ])

  const addTodo_old = () => {
    if(todos.length > 0){
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'description',
        rowAssigned: 'assigned'
      };
      console.log(newTodo);
      setTodos(todos => [...todos, newTodo]);
      //todos.push(newTodo);
      console.log(todos);
    }
  }

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length -1].rowNumber +1; 
    }else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      console.log(newTodo);
      setTodos(todos => [...todos, newTodo]);
      //todos.push(newTodo);
      console.log(todos);
    
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber
    });
    setTodos(filtered);
  }


  const removeTodoMine = (todo) => {
    todos.reduce(todo);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' 
          onClick={() => {setShowAddTodoForm(!showAddTodoForm)}} >
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}</button>
          {showAddTodoForm &&  <NewTodoForm addTodo={addTodo} /> }
         
       </div>
      </div>
    </div>
  );
}

export default App;
