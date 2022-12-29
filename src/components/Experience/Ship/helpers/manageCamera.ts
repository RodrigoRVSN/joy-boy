
import { RootState } from '@react-three/fiber'
import { RigidBodyApi } from '@react-three/rapier'
import { RefObject } from 'react'
import { Vector3 } from 'three'

const smoothedCameraPosition = new Vector3(10, 10, 10)
const smoothedCameraTarget = new Vector3()

export const manageCamera = (body: RefObject<RigidBodyApi>, state: RootState, delta: number) => {
  const bodyPosition = body.current!.translation()

  const cameraPosition = new Vector3()
  cameraPosition.copy(bodyPosition)
  cameraPosition.z += 12
  cameraPosition.y += 11
  cameraPosition.x += 6

  const cameraTarget = new Vector3()
  cameraTarget.copy(bodyPosition)
  cameraTarget.y += 1

  smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
  smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

  state.camera.position.copy(smoothedCameraPosition)
  state.camera.lookAt(smoothedCameraTarget)
}
