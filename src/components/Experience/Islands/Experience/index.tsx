import { useState } from 'react'
import { GenericModal } from '@App/components/GenericModal'
import { useGetExperiencesLazyQuery } from '@core/graphql/generated'
import { GenericIsland } from '../components/GenericIsland'

export const Experience = () => {
  const [getData, { data }] = useGetExperiencesLazyQuery()

  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false)

  const handleOpenModal = () => {
    getData()
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
        {data?.experiences.map(experience => (
          <h1 key={experience.company}>{experience.company}</h1>
        ))}
      </GenericModal>
    </>
  )
}
