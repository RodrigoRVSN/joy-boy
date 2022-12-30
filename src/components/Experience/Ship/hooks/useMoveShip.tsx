import { useKeyboardControls } from '@react-three/drei'
import { RigidBodyApi } from '@react-three/rapier'
import { useRef } from 'react'

export const useMoveShip = () => {
  const body = useRef<RigidBodyApi>(null!)
  const [_, getKeys] = useKeyboardControls()

  const move = (delta: number) => {
    const { forward, backward, leftward, rightward } = getKeys()

    const impulse = { x: 0, y: 1, z: 0 }
    const torque = { x: 0, y: 1, z: 0 }

    const impulseStrength = 6 * delta * 3000
    const torqueStrength = 2 * delta * 3000

    if (forward) {
      impulse.z -= impulseStrength
      torque.x -= torqueStrength
    }

    if (backward) {
      impulse.z += impulseStrength
      torque.x += torqueStrength
    }

    if (leftward) {
      impulse.x -= impulseStrength
      torque.z += torqueStrength
    }

    if (rightward) {
      impulse.x += impulseStrength
      torque.z -= torqueStrength
    }

    body.current.applyImpulse(impulse)
    body.current.applyTorqueImpulse(torque)
  }

  return { body, move }
}
