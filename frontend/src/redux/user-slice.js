import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        auth: null,
        otherUsers: null,
        selectedUser: null
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
        }

    }
});

export const { setAuth, setOtherUsers, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;