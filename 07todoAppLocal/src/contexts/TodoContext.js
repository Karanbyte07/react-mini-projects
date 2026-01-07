// Import createContext and useContext from React
import { createContext, use, useContext } from "react"

// Create TodoContext with default structure
// This defines what data and functions will be available globally
export const TodoContext = createContext({
    todos: [
        {
            id: 1,                    // Unique ID for each todo
            todo: "Todo msg",         // Todo text
            completed: false,         // Completion status
        }
    ],
    addTodo: (todo) => {},           // Add new todo
    updateTodo: (id, todo) => {},    // Update existing todo
    deleteTodo: (id) => {},          // Delete a todo
    toggleComplete: (id) => {},      // Toggle todo completion
    
})

// Custom hook to use TodoContext easily
// Usage: const {todos, addTodo} = useTodo()
export const useTodo = () => {
    return useContext(TodoContext)
}

// Export Provider to wrap components that need access to todos
export const TodoProvider = TodoContext.Provider