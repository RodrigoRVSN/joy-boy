import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { manageCamera } from './helpers/manageCamera'
import { useMoveShip } from './hooks/useMoveShip'

export const Ship = () => {
  const { body, move } = useMoveShip()

  useFrame((state, delta) => {
    if (!body.current) return

    move(delta)

    manageCamera(body, state)
  })

  return (
    <RigidBody
      ref={body}
      colliders='ball'
      restitution={0.2}
      friction={0}
      position={[0, 1, 0]}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
    </RigidBody>
  )
}
