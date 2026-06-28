import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'
const Profile = () => {
    const user =useContext(UserContext)
  return (
    <div>
      Profile name is {user}
    </div>
  )
}

export default Profile
