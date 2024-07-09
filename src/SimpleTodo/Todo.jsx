import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [currentTodoID, setCurrentTodoId] = useState(null);


    // Handle input changes
    const handleInputChanges = (e) => {
        setTask(e.target.value);
    };

    // Add a new todo
    const addTodo = () => {
        if (task.trim() !== '') {
            setTodos([...todos, { id: Date.now(), task, completed: false }]);
            setTask('');
        } else {
            alert('Input field is empty 🧹');
        }
    };

    // Handle keypress event
    const handleKeypress = (e) => {
        if (e.key === 'Enter') {
            isEdit ? updateTodo() : addTodo();
        }
    };

    // Delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Edit an existing todo item
    const editTodo = (todo) => {
        setIsEdit(true);
        setTask(todo.task); // Set existing item in input box
        setCurrentTodoId(todo.id);
    };
    

    // Update the todo after editing
    const updateTodo = () => {
        setTodos(todos.map((todo) => (todo.id === currentTodoID ? { ...todo, task } : todo)));
        setTask('');
        setIsEdit(false);
        setCurrentTodoId(null);
    };

    // Toggle completion of a todo
    const toggleCompletion = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    return (
        <div>
            <h2>Todo List CRUD Operations</h2>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={handleInputChanges}
                    onKeyPress={handleKeypress}
                    className="border p-2 rounded mr-2"
                    placeholder="Enter a task"
                />
                {isEdit ? (
                    <button onClick={updateTodo}>Update</button>
                ) : (
                    <button onClick={addTodo}>Add</button>
                )}
            </div>
            <ul>
                {todos.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                        <li style={{ textDecoration: item.completed ? 'line-through' : 'none', listStyle: 'decimal' }}>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleCompletion(item.id)}
                                style={{ marginRight: '10px', accentColor: item.completed ? 'green' : 'red' }}
                            />
                            {item.task}
                        </li>
                        <div>
                            <button style={{ margin: '5px' }} onClick={() => deleteTodo(item.id)}>Delete</button>
                            <button onClick={() => editTodo(item)}>Edit</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
