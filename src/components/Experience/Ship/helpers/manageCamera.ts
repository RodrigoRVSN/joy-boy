
import { RootState } from '@react-three/fiber'
import { RigidBodyApi } from '@react-three/rapier'
import { RefObject } from 'react'
import { Quaternion, Vector3 } from 'three'

const smoothedCameraPosition = new Vector3(10, 10, 10)
const smoothedCameraTarget = new Vector3()

export const manageCamera = (body: RefObject<RigidBodyApi>, state: RootState, delta: number) => {
  const bodyPosition = body.current!.translation()
  const bodyRotation = body.current!.rotation()

  const cameraPosition = new Vector3()
  cameraPosition.copy(bodyPosition)
  cameraPosition.z += 9
  cameraPosition.y += 11
  cameraPosition.x += 2

  const cameraTarget = new Vector3()
  cameraTarget.copy(bodyPosition)
  cameraTarget.y += 1

  const quaternion = new Quaternion(0, 0, 0, 0)
  quaternion.copy(bodyRotation)

  const wDir = new Vector3(0, 0, 1)
  wDir.applyQuaternion(quaternion)
  wDir.normalize()

  const position = new Vector3(0, 0, 0)
  position.applyQuaternion(quaternion)

  const orientedPosition = cameraPosition.clone().add(wDir.clone().multiplyScalar(10).add(new Vector3(0, 0.3, 0)))

  smoothedCameraPosition.lerp(orientedPosition, 5 * delta)
  smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

  state.camera.position.copy(smoothedCameraPosition)
  state.camera.lookAt(smoothedCameraTarget)
}
