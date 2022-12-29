import { useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef } from 'react'
import { Vector3 } from 'three'

export const Ship = () => {
  const body = useRef<RigidBodyApi>(null!)

  useFrame((state) => {
    const bodyPosition = body.current?.translation()

    if (!bodyPosition) return

    const cameraPosition = new Vector3()
    cameraPosition.copy(bodyPosition)
    cameraPosition.z += 2.25
    cameraPosition.y += 0.65

    const cameraTarget = new Vector3()
    cameraTarget.copy(bodyPosition)
    cameraTarget.y += 0.25

    state.camera.position.copy(cameraPosition)
    state.camera.lookAt(cameraTarget)
  })

  return (
    <RigidBody>
      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </RigidBody>
  )
}
