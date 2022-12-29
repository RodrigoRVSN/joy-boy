import { Physics } from '@react-three/rapier'
import { Ocean } from './Ocean'
import { Ship } from './Ship'

export const Experience = () => {
  return (
    <>
      <color args={['blue']} attach='background' />

      <directionalLight position={ [1, 2, 3] } intensity={ 1.5 } />

      <Physics>
        <mesh castShadow scale={1} position={[1, 0, 1]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <Ship />
        <Ocean />
      </Physics>
    </>
  )
}
