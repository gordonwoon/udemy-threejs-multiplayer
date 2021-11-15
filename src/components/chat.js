import React, { useState, useEffect, useRef } from 'react'

const Chat = ({ socket }) => {
  const [text, setText] = useState('')
  const onChange = e => {
    setText(e.target.value)
  }
  const onClick = e => {
    socket.emit('chat message', {
      id: socket.id,
      message: text
    })
  }
  return (
    <div className="fixed bottom-0 w-full flex">
      <input
        type="text"
        value={text}
        placeholder="Placeholder"
        onChange={onChange}
        className="
          px-2
          py-1
          placeholder-gray-400
          text-gray-600
          relative
          bg-white bg-white
          rounded
          text-sm
          border border-gray-400
          outline-none
          focus:outline-none focus:ring
          w-full
        "
      />
      <button
        onClick={onClick}
        className="
          bg-purple-500
          text-white
          active:bg-purple-600
          font-bold
          uppercase
          text-sm
          px-6
          py-3
          rounded
          shadow
          hover:shadow-lg
          outline-none
          focus:outline-none
          ease-linear
          transition-all
          duration-150
        "
        type="button"
      >
        Small
      </button>
    </div>
  )
}

export default Chat
