import { useState } from 'react'
import { GenericModal } from '@App/components/GenericModal'
import { useGetProjectsLazyQuery } from '@App/core/graphql/queries.generated'
import { GenericIsland } from '../components/GenericIsland'
import { ProjectModal } from './ProjectModal'

export const Projects = () => {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false)
  const [getAboutMe, { data, loading }] = useGetProjectsLazyQuery()

  const handleOpenModal = () => {
    setIsProjectsModalOpen(true)
    getAboutMe()
  }

  const handleCloseModal = () => {
    setIsProjectsModalOpen(false)
  }

  return (
    <>
      <GenericIsland
        title='Projects'
        objectUrl='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
        islandNumber={1}
        position={[-30, 0, -40]}
        rotationY={Math.PI / 4}
        onClickObject={handleOpenModal}
      />

      <GenericModal
        isOpen={isProjectsModalOpen}
        onCloseModal={handleCloseModal}
        isLoading={loading}
      >
        {data && <ProjectModal projects={data!.projects} />}
      </GenericModal>
    </>
  )
}
