import React, { useContext } from 'react'
import './Chat.css'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';
function Chat() {
  const {data}= useContext(ChatContext) 
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <CameraAltIcon/>
          <AddIcon/>
          <MoreHorizIcon/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat