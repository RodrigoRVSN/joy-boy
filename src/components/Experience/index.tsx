import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Lights } from '../Lights'
import { Islands } from './Islands'
import { Ocean } from './Ocean'
import { Ship } from './Ship'

export const Experience = () => {
  return (
    <>
      <color args={['blue']} attach='background' />

      <Sky sunPosition={[1, 2, 3]}/>

      <Physics>
        <Lights />

        <Islands />

        <Ship />

        <Ocean />
      </Physics>
    </>
  )
}
