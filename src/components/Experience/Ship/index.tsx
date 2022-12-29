import { useGLTF } from '@react-three/drei'
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

  const ship = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/ship-dark/model.gltf')

  return (
    <RigidBody
      ref={body}
      restitution={0.2}
      friction={0}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <primitive object={ship.scene}/>
    </RigidBody>
  )
}
