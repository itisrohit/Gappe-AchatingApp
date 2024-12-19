import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
  

  return (
    <div className="app">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
