import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]) // by default empty array

  const addTodo = (todo) => {// add a new todo to the todos array
    setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev])
  }

  const updateTodo = (id, newTodo) => { // map through todos and update the one with the given id
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? newTodo : prevTodo)))
  }
  

  const deleteTodo = (id) => { // filter out the todo with the given id and new array without that todo
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => { // toggle the completed status of the todo with the given id
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

//store in local storage

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"))

  if(storedTodos && storedTodos.length > 0){
    setTodos(storedTodos)
  }
},[])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="app-shell">
        <div className="container neo-surface">
          <h1 className="title">Manage Your Todos</h1>
          <div style={{ marginBottom: '1rem' }}>
            <TodoForm />
          </div>
          <div className="todo-list">
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
