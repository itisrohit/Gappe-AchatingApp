import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../redux/user-slice';
import messageReducer from '../redux/message-slice'

const store = configureStore({
    reducer:{
        user: userReducer,
        message: messageReducer
    }
});

export default store;