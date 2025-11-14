import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const[data, setData] = useState(null)

  useEffect(()=> {
      setTimeout(()=>{
        setData("fetched data")
        setIsLoading(false)
      },2000)
  },[]);
  

  return (
    <>
    <div>
    
      
       {isLoading ? 
        (<h1>Loading...</h1>) :
        (<h1>{data}</h1>)
      }
      

    </div>

     
    </>
  )
}

export default App
