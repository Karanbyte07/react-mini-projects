import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();
    
    const add = (e) => {
        e.preventDefault();
        if(!todo) return 
        addTodo(todo);
        setTodo("");
    }



    return (
        <form onSubmit={add}>
            <div className="form-row">
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="neo-input"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit" className="neo-btn neo-btn-primary">
                    Add
                </button>
            </div>
        </form>
    );
}

export default TodoForm