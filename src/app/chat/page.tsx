"use client"
import React, { useEffect, useState } from 'react'
// import { Socket } from 'socket.io'
import * as io from 'socket.io-client';

const socket = io.connect("http://localhost:3002");

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    socket.emit("send_message", { message: "Hello" })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket])

  return (
    <div>
        <input type="text" name="room_no" placeholder="room_no" id="" />
        <input type="text" name="message" placeholder="message" id="" />
        <button onClick={sendMessage}>Submit</button>
    </div>
  )
}
