import { useState } from 'react'
import { GenericModal } from '@App/components/GenericModal'
import { GenericIsland } from '../components/GenericIsland'

export const Experience = () => {
  // const { data } = useGetProjectsQuery()

  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsProjectsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsProjectsModalOpen(false)
  }

  return (
    <>
      <GenericIsland
        title='Experience'
        objectUrl='https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
        islandNumber={1}
        position={[20, 0, -90]}
        onClickObject={handleOpenModal}
      />

      <GenericModal
        isOpen={isProjectsModalOpen}
        onCloseModal={handleCloseModal}
      >
        <h1>opa</h1>
      </GenericModal>
    </>
  )
}
