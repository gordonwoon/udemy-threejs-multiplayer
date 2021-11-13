import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from 'components/box'
import Level from 'components/level'

const Scene = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [0, 5, 15]
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 5, 0]} />
        <Box position={[1.2, 5, 0]} />
        <Level position={[0, 0, 0]} rotation={[-Math.PI/2, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Scene
