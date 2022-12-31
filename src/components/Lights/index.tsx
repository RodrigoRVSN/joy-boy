import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DirectionalLight } from 'three'

export const Lights = () => {
  const light = useRef<DirectionalLight>(null!)

  useFrame((state) => {
    if (!light.current) return

    light.current.position.z = state.camera.position.z + 1 - 4
    light.current.target.position.z = state.camera.position.z - 4
    light.current.target.updateMatrixWorld()
  })

  return (
    <>
      <directionalLight
        ref={light}
        castShadow
        position={ [4, 10, 1] }
        intensity={ 1.1 }
        shadow-mapSize={ [1024, 1024] }
        shadow-camera-near={ 1 }
        shadow-camera-far={ 10 }
        shadow-camera-top={ 10 }
        shadow-camera-right={ 10 }
        shadow-camera-bottom={ -10 }
        shadow-camera-left={ -10 }
      />
      <ambientLight intensity={ 0.4 } />
    </>
  )
}
