import React from 'react'
import { useParams } from 'react-router-dom'
function user() {
    const {userID} = useParams()
  return (
    <div className='bg-gray-600 text-white text-2xl p-4 '>user: {userID}</div>
  )
}
  
export default user