import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js' 
import {login, logout} from './features/authSlice.js'
import{Header, Footer} from './components/index.js'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  //for checking if user is logged in or not
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData})) //dispatch login action to redux store
        }else{
          dispatch(logout()) //dispatch logout action to redux store
        }
      })
      .catch((error) => {
        console.error("Auth check failed:", error);
        dispatch(logout()) // Logout on error to ensure clean state
      })
      .finally(()=> setLoading(false)) //set loading to false after checking user status
  }, [])



  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-700 '>
      <div className='w-full block'>
        <h1 className='text-4xl text-center text-white py-10'>Mega Blog Appwrite</h1>
        <Header/>
        <main>
          {/* to do<Outlet/> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
