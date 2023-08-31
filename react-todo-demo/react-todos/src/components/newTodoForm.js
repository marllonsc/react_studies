import React, {useState} from 'react';


function NewTodoForm(){

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    /*
    const descriptionChange = (event) => {
        console.log(event.target.value);
        setDescription(event.target.value);
    }

    const assignedChange = (event) => {
        console.log(event.target.value);
        setAssigned(event.target.value);
    }
    */

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type='text' className='form-control' required
                    onChange={e => setAssigned(e.target.value)}
                        value={assigned}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea  rows={3} className='form-control' required
                    onChange={e => setDescription(e.target.value)}
                        value={description}>
                    </textarea>
                </div>
                <button tyoe='button' className="btn btn-primary mt-3">add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm