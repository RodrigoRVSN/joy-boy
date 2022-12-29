import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Ocean } from './Ocean'
import { Ship } from './Ship'

export const Experience = () => {
  return (
    <>
      <color args={['blue']} attach='background' />

      <directionalLight position={ [1, 2, 3] } intensity={ 1.5 } />

      <OrbitControls makeDefault />

      <Physics>
        <Ship />
        <Ocean />
      </Physics>
    </>
  )
}
