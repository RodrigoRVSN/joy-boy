import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { CustomOrbitControls } from './components/CustomOrbitControls'
import { useMoveShip } from './hooks/useMoveShip'

export const Ship = () => {
  const { body, move } = useMoveShip()

  const shipModel = useGLTF('/assets/ship.gltf')

  useFrame((state, delta) => {
    if (!body.current) return

    move(delta)

    state.camera.lookAt(body.current.translation())
    state.camera.updateProjectionMatrix()
  })

  return (
    <>
      <CustomOrbitControls />

      <RigidBody
        ref={body}
        restitution={0.2}
        friction={0}
        linearDamping={0.5}
        angularDamping={0.5}
        mass={100}
      >
        <group>
          <PerspectiveCamera
            makeDefault
            position={[0, 25, 40]}
            args={[45, 1.2, 1, 1000]}
          />

          <primitive object={shipModel.scene} />
        </group>
      </RigidBody>
    </>
  )
}
