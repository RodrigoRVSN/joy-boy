import { RigidBody } from '@react-three/rapier'

const WORLD_SIZE = 10000

export const Ocean = () => {
  return (
    <RigidBody type='fixed'>
      <mesh
        scale={WORLD_SIZE}
        receiveShadow
        rotation-x={-Math.PI * 0.5}
        position-y={-1}
      >
        <planeGeometry />
        <meshStandardMaterial color="cyan" />
      </mesh>
    </RigidBody>
  )
}
