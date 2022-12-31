
import { useState } from 'react'
import { GenericModal } from '@App/components/GenericModal'
import { useGetProjectsQuery } from '@App/core/graphql/generated'
import { GenericIsland } from '../components/GenericIsland'
import { ProjectModal } from './ProjectModal'

export const Projects = () => {
  const { data } = useGetProjectsQuery()

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
        title='Projetos'
        objectUrl='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
        islandNumber={1}
        position={[30, 0, -30]}
        rotationY={-Math.PI / 4}
        onClickObject={handleOpenModal}
      />

      <GenericModal
        isOpen={isProjectsModalOpen}
        onCloseModal={handleCloseModal}
      >
        {data && <ProjectModal projects={data!.projects} />}
      </GenericModal>
    </>
  )
}
