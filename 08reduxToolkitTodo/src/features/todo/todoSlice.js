import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{id : 1, title : "Learn Redux Toolkit", completed : false}]
}

export const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo: () => { },
           }
    }