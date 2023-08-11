import React, { useContext } from 'react'
import "./Navbar.css"
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
function Navbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <span className="logo">
            <span className="firstlogo">SOMO</span>
            CHAT
        </span>
        <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>Log Out</button>
        </div>
    </div>
  )
}

export default Navbar