import React, { Suspense, useEffect, useState } from 'react'
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
      <Suspense fallback={<div>Loading...</div>}>
        <Chat />
      </Suspense>
      <Friends />
    </div>
  )
}

export default SocialComponent