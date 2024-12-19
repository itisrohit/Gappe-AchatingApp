import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/message-slice';

const useGetMesages = () => {
   const {selectedUser} = useSelector(store => store.user);
   const dispatch = useDispatch()
   useEffect(() => {
    const fetchMessages = async () => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8080/api/message/${selectedUser?._id}`);
            // console.log(res.data);
            dispatch(setMessages(res.data));
        }catch(err){
            console.log(err);
        }
    }
    fetchMessages();
   }, [selectedUser]);
}

export default useGetMesages
