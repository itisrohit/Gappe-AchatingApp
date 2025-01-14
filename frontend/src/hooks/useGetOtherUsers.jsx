import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/user-slice';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
  return (
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get('https://gappe-proto.onrender.com/api/user/');
                //store
                dispatch(setOtherUsers(res.data));
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchOtherUsers();
    }, [])
  )
}

export default useGetOtherUsers
