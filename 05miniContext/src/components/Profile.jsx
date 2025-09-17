import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext';
function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
         Welcome {user.username}!
        </div>
      ) : (
        <p>Please log in to see your profile information.</p>
      )}
    </div>
  )
}

export default Profile