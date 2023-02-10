import { OrbitControls } from '@react-three/drei'
import { useModal } from '@App/core/context/ModalContext'

export const CustomOrbitControls = () => {
  const { isModalOpen } = useModal()

  return (
    <OrbitControls
      minDistance={30}
      maxDistance={100}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2.5}
      enabled={!isModalOpen}
    />
  )
}
