import React from 'react'

const Level = (props) => {
  return (
    <mesh {...props} >
      <planeGeometry attach="geometry" args={[10, 10]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default Level
