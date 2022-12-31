import { MeshReflectorMaterial } from '@react-three/drei'
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
        <MeshReflectorMaterial mirror={0.3} color="cyan" />
      </mesh>
    </RigidBody>
  )
}
