import { useState } from 'react'
import { GenericModal } from '@App/components/GenericModal'
import { GenericIsland } from '../components/GenericIsland'

export const About = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsAboutModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsAboutModalOpen(false)
  }

  return (
    <>
      <GenericIsland
        title='About'
        objectUrl='/assets/straw-hat.glb'
        islandNumber={2}
        position={[-30, 0, -40]}
        rotationY={-Math.PI / 4}
        onClickObject={handleOpenModal}
      />

      <GenericModal
        isOpen={isAboutModalOpen}
        onCloseModal={handleCloseModal}
      >
        <h1>oi</h1>
      </GenericModal>
    </>
  )
}
