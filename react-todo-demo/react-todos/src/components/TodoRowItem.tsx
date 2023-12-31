import React from "react";

export const TodoRowItem: React.FC<{
    rowNumber: number, 
    rowDescription: string, 
    rowAssigned: string, 
    deleteTodo: Function
}> = (props) => {

    const rowNumber = props.rowNumber;
    const rowDescription = props.rowDescription;
    const rowAssigned = props.rowAssigned;

    /*const removeTodoMine = () => {
        const newTodo = {
            rowNumber: rowNumber,
            rowDescription: rowDescription,
            rowAssigned: rowAssigned
          };
        props.removeBtn(newTodo);
    }*/

    return(
        <tr >
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
            <td><button className='btn btn-primary' 
            onClick={() => props.deleteTodo(props.rowNumber)} >remove</button></td>
        </tr>
    )
}

