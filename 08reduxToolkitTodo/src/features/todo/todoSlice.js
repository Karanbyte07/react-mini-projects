import {createSlice, nanoid} from '@reduxjs/toolkit'
// nanoid is used to generate unique ids
const initialState = [
    { id: 1, text: 'Learn Redux Toolkit', completed: false },
]

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            }
            state.push(newTodo)
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const existingTodo = state.find((todo) => todo.id === id)
            if (existingTodo) {
                existingTodo.text = text
            }
        },
    },
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer