import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../redux/user-slice';
import messageReducer from '../redux/message-slice'
import sockerReducer from '../redux/socket-slice';

const store = configureStore({
    reducer:{
        user: userReducer,
        message: messageReducer,
        socket: sockerReducer
    }
});

export default store;