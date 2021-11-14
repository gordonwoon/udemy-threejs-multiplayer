import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'

import Game from 'components/game'

const Canvas = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const game = new Game(ref.current);
      console.log('game', game)
    }
  }, [ref])
  return <div ref={ref} className="h-screen w-screen" />
}

ReactDOM.render(<Canvas />, document.getElementById('root'))
