import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './stylesheets/Login.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { setAuth } from '../redux//user-slice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [userInfo, setuserInfo] = useState({
        userName: '',
        password: ''
    })
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const onSumbitHandler =async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('https://gappe-proto.onrender.com/api/user/login', userInfo, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            navigate('/');
            toast.success(res.data.msg);
            dispatch(setAuth(res.data.user));
            setuserInfo({
                userName: '',
                password: ''
            });
                
        }catch(err){
            toast.error(err.response.data.msg);
            console.log(err);
        }
    };
  return (
    <div className="login">
        <div className="container">
            <div className="textual">
                <h3>Login to Account</h3>
            </div>
            <div className="content-part">
                <div className="registration-form">
                    <form action="" onSubmit={onSumbitHandler}>
                        <input type="text" name="userName" id="userName" placeholder='Enter Username' 
                        value={userInfo.userName}
                        onChange={(e)=>setuserInfo({...userInfo, userName: e.target.value})}
                        />
                        <input type="password" name='password' id='password' placeholder='Enter Password'
                        value={userInfo.password} 
                        onChange={(e)=>setuserInfo({...userInfo, password: e.target.value})}
                        />
                        <button type="submit">Login in</button>
                    </form>
                </div>
                <div className="existing-account">
                    <p>Don&apos;t have an account? <Link to="/register">Create Account</Link></p>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Login
