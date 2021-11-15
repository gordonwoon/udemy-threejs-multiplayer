import React, { useRef, useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import Game from 'components/game'
import Chat from 'components/chat'

const Canvas = () => {
  const gameRef = useRef(null)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    if (gameRef.current && socket) {
      new Game(gameRef.current, socket)
    }
  }, [gameRef, socket])
  useEffect(() => {
    let newSocket = socket;
    if (newSocket === null) {
      newSocket = io.connect('http://localhost:2002')
      setSocket(newSocket)
    }

    try {
      newSocket.on('connect', () => {
        console.log('socket', newSocket.id)
      })
    } catch (error) {
      console.log('error', error)
    }

    // Return a callback to be run before unmount-ing.
    return () => {
      newSocket.close()
    }
  }, []) // Pass in an empty array to only run on mount.
  return (
    <div className="h-screen w-screen">
      <div ref={gameRef} />
      <Chat socket={socket} />
    </div>
  )
}

export default Canvas
