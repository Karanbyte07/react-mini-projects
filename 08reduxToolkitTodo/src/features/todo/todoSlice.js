import {createSlice, nanoid} from '@reduxjs/toolkit'

/*
Cheat sheet:
- State: todos array managed by this feature.
- Action: { type, payload } — data you dispatch.
- Reducer: (state, action) -> next state (Immer lets direct-looking mutation).
- Slice: bundles state + reducers + generated actions.
- nanoid: creates unique IDs.
Usage: dispatch(addTodo('Buy milk')); dispatch(removeTodo(id)); dispatch(updateTodo({ id, text }))
*/

// Starter data so the UI has something to render initially
// Shape: { id: string|number, text: string, completed: boolean }
const initialState = [
    { id: 1, text: 'Learn Redux Toolkit', completed: false },
]

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
  // Reducers: how state changes for each action
    reducers: {
    // addTodo — payload: text (string)
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            }
      // Looks like mutation; Immer applies immutable update safely
            state.push(newTodo)
        },

    // removeTodo — payload: id (string|number)
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        },

    // updateTodo — payload: { id, text }
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const existingTodo = state.find((todo) => todo.id === id)
            if (existingTodo) {
                existingTodo.text = text
            }
        },
    },
})

// Export actions and reducer(functionalities)
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer // Reducer to be added to the store