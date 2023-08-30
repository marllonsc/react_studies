function TodoRowItem(props){

    const rowNumber = props.rowNumber;
    const rowDescription = props.rowDescription;
    const rowAssigned = props.rowAssigned;

    return(
        <tr>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem