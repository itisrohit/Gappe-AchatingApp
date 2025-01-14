import React, { useState } from 'react';
import './stylesheets/Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Registration = () => {
    const [userInfo, setuserInfo] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ""
    });
    const navigate = useNavigate();
    const onSumbitHandler = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('https://gappe-proto.onrender.com/api/user/register', userInfo, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if(res.data.success){
                toast.success(res.data.msg);
                navigate('/signin');
            };
                
        }catch(err){
            toast.error(err.response.data.msg);
            console.log(err);
        }
    };
  return (
    <div className="registration">
        <div className="container">
            <div className="textual">
                <h3>Create An Account</h3>
            </div>
            <div className="content-part">
                <div className="registration-form">
                    <form action="" onSubmit={onSumbitHandler}>
                        <input type="text" name="fullName" id="fullName" placeholder='Enter your Full Name'
                        value={userInfo.fullName}
                        onChange={(e)=>setuserInfo({...userInfo, fullName: e.target.value})}
                        />
                        <input type="text" name="userName" id="userName" placeholder='Enter Username' 
                        value={userInfo.userName}
                        onChange={(e)=>setuserInfo({...userInfo, userName: e.target.value})}
                        />
                        <input type="password" name='password' id='password' placeholder='Enter Password' 
                        value={userInfo.password}
                        onChange={(e)=>setuserInfo({...userInfo, password: e.target.value})}
                        />
                        <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' 
                        value={userInfo.confirmPassword}
                        onChange={(e)=>setuserInfo({...userInfo, confirmPassword: e.target.value})}
                        />
                        <select name="gender" id="gender"
                        value={userInfo.gender}
                        onChange={(e)=>setuserInfo({...userInfo, gender: e.target.value})}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="existing-account">
                    <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Registration
