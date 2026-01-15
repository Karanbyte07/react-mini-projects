import { use, useEffect, useState } from "react"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export default function Protected({children, authentication = true }) { //children is a page content to sisplay, authentication is a boolean to check if the page requires authentication or not
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true) //show loader while checking authentication status
    const authStatus = useSelector((state) => state.auth.status)  //check user is logged in or not from redux store

    useEffect(() => {
        if(authentication && authStatus !== authentication){ //if the page requires login but user is not logged in
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){ //if the page does not require login but user is logged in
            navigate('/')
        }
        setLoader(false) //stop loader after checking authentication status
    }), [authStatus, navigate, authentication]

  return loader ? <div>Loading...</div> : <>{children}</>
}

// This file creates a Protected Route component that controls access to different pages based on whether a user is logged in or not.