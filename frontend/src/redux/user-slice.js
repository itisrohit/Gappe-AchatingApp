import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        auth: null,
        otherUsers: null,
        selectedUser: null,
        onlineUsers: null
    },
    reducers: {
        setAuth(state, action){
            state.auth = action.payload;
        },
        setOtherUsers(state, action){
            state.otherUsers = action.payload;
        },
        setSelectedUser(state, action){
            state.selectedUser = action.payload;
        },
        setOnlineUsers(state, action){
            state.onlineUsers = action.payload;
        }

    }
});

export const { setAuth, setOtherUsers, setSelectedUser, setOnlineUsers} = userSlice.actions;
export default userSlice.reducer;