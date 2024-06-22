import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk(
    'getPosts',
    async function( info, {dispatch, rejectWithValue }) {

        dispatch(pokaz());


        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        }


        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
        const data = response.json()
        dispatch(deleteloading());

        console.log(data)
    }
)


const requestReducer = createSlice(
    {
        name: "PostReducer",
        initialState: {
            zagruzka: false
        },
        reducers: {
            pokaz: (state, action) => {
                state.zagruzka = true
            },
            deleteloading: (state, action) => {
                state.zagruzka = false
            }
        }
    }

)

export const {pokaz, deleteloading} = requestReducer.actions
export default requestReducer.reducer;