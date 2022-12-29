import { RigidBody } from '@react-three/rapier'

const WORLD_SIZE = 10000

export const Ocean = () => {
  return (
    <RigidBody type='fixed'>
      <mesh scale={WORLD_SIZE} position={[0, -(WORLD_SIZE + 0.5), 0]} receiveShadow>
        <sphereGeometry />
        <meshStandardMaterial color="cyan" />
      </mesh>
    </RigidBody>
  )
}
