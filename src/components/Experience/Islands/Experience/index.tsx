import { useState } from 'react'
import { GenericModal } from '@App/components/GenericModal'
import { useGetExperiencesLazyQuery } from '@core/graphql/queries.generated'
import { GenericIsland } from '../components/GenericIsland'
import { ExperienceModal } from './ExperienceModal'

export const Experience = () => {
  const [getData, { data, loading }] = useGetExperiencesLazyQuery()

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
        objectUrl='/assets/coffe.gltf'
        islandNumber={1}
        position={[20, 0, -90]}
        onClickObject={handleOpenModal}
      />

      <GenericModal
        isOpen={isProjectsModalOpen}
        onCloseModal={handleCloseModal}
        isLoading={loading}
      >
        {data && <ExperienceModal experiences={data.experiences} />}
      </GenericModal>
    </>
  )
}
