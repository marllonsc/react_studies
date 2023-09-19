import React from "react"
import {TodoRowItem} from "./TodoRowItem"


export const TodoTable: React.FC<{todos: TodoModel[], deleteTodo: Function}> = (props) =>{

    const todos = props.todos

    return(
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
            {todos.map(todo =>(
                <TodoRowItem 
                key={todo.rowNumber}
                rowNumber={todo.rowNumber} 
                rowDescription={todo.rowDescription} 
                rowAssigned={todo.rowAssign}
                deleteTodo={props.deleteTodo}/>
            ))}
            </tbody>
        </table>
    )
}