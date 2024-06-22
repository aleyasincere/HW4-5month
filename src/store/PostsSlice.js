 import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        nolek: 0
    },
    reducers: {
        uvelichivat: (state, action) => {
            state.nolek += 1

        },
        umenshat: (state, action) => {
            state.nolek = Math.max(state.nolek -= 1, 0)
        },
        plus: (state, action) => {
            state.nolek += 10
        },
        minus: (state, action) => {
            state.nolek = Math.max(state.nolek -=10, 0 )
        },
        reset: (state, action) => {
            state.nolek = 0
        }

    }
})

 export const {umenshat, plus, minus, reset,uvelichivat} = postsSlice.actions;

    export default postsSlice.reducer;