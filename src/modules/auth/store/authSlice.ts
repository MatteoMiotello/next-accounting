import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface UserState {
    username: string,
    role: string
}

export interface AuthState {
    user: null | UserState
    loggedIn: boolean
    status: 'idle' | 'loading' | 'failed'
}


const initialState: AuthState = {
    user: null,
    loggedIn: false,
    status: 'idle'
}

export const logIn = createAsyncThunk(
    'auth/login',
    async ({username, password}: { username: string, password: string }) => {

    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: ()
    }
})