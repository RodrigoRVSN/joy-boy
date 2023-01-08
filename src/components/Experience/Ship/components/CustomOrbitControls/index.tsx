import { OrbitControls } from '@react-three/drei'

export const CustomOrbitControls = () => {
  return (
    <OrbitControls
      minDistance={30}
      maxDistance={100}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2.5}
    />
  )
}
