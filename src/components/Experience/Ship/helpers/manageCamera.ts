
import { RootState } from '@react-three/fiber'
import { RigidBodyApi } from '@react-three/rapier'
import { RefObject } from 'react'
import { Vector3 } from 'three'

export const manageCamera = (body: RefObject<RigidBodyApi>, state: RootState) => {
  const bodyPosition = body.current!.translation()

  const cameraPosition = new Vector3()
  cameraPosition.copy(bodyPosition)
  cameraPosition.z += 6
  cameraPosition.x += 1
  cameraPosition.y += 7

  const cameraTarget = new Vector3()
  cameraTarget.copy(bodyPosition)
  cameraTarget.y += 0.25

  state.camera.position.copy(cameraPosition)
  state.camera.lookAt(cameraTarget)
}
