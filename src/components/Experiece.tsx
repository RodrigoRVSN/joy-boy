import { OrbitControls } from '@react-three/drei'

export const Experience = () => {
  return (
    <>
    <color args={['blue']} attach='background' />
    <directionalLight position={ [1, 2, 3] } intensity={ 1.5 } />
    <OrbitControls makeDefault />
    <mesh scale={ 10 }>
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" />
  </mesh>
        </>
  )
}
