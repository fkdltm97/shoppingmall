import { createSlice } from "@reduxjs/toolkit"


const initialState = {       //eslint-disable-line no-unused-vars
    userData : {
        id : '',
        email : '',
        name : '',
        role : 0,
        image : '',
    },
    isAuth : false,
    isLoading : false,
    error : ''
}

const userSlice =  createSlice({
    name : 'user',
    initialState,
    reducers :{},
    extraReducers: (builder) => { } //eslint-disable-line no-unused-vars
})

export default userSlice.reducer;