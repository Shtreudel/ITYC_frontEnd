import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

//Slice Type
export interface User {
    username: string | null;
    userId: string | null;
}

//Initial State
const initialState: User = {
    username: null,
    userId: null
}

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.username = action.payload.username;
            state.userId = action.payload.userId;
        },
        removeUser: state => {
            state.username = null;
            state.userId = null;
        }

    }
});

export const { setUser, removeUser } = user.actions;

export default user.reducer;