import React, { useEffect, useState } from 'react'
import FriendRequests from './SocialComponents/FriendRequests';
import Friends from './SocialComponents/Friends';
import Chat from './SocialComponents/Chat';

function SocialComponent() {

  return (
    <div
      className="flex"
      style={{
        padding: '30px'
      }}
    >
      <FriendRequests />
      <Chat />
      <Friends />
    </div>
  )
}

export default SocialComponent