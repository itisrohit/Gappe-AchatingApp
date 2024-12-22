import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { setSocket, setOnlineUsers } from '../src/redux/socket-slice'
import { io } from 'socket.io-client'

const router = createBrowserRouter([
  {path: '/', element: 
  <>
  <Home />
  </>
  },
  {
    path: '/register',
    element: 
    <>
    <Registration />
    </>
  },
  {
    path: '/signin',
    element:
    <>
    <Login />
    </>
  }
])


function App() {
  const {auth} = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(auth){
      const socket = io('http://localhost:5173', {
        query: {
          userId: auth.id
        }
      });
      dispatch(setSocket(socket));
      socket.on('getOnlineUsers', (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
    }
  },[auth]);

  return (
    <div className="app">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
