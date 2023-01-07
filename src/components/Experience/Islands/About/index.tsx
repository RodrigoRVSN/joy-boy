import { useState } from 'react'
import { GenericModal } from '@App/components/GenericModal'
import { useGetAboutMeLazyQuery } from '@App/core/graphql/queries.generated'
import { GenericIsland } from '../components/GenericIsland'
import { AboutModal } from './AboutModal'

export const About = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [getAboutMe, { data }] = useGetAboutMeLazyQuery()

  const handleOpenModal = () => {
    setIsAboutModalOpen(true)
    getAboutMe()
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
        position={[30, 0, -30]}
        onClickObject={handleOpenModal}
        rotationY={Math.PI}
        objectScale={1.5}
      />

      <GenericModal
        isOpen={isAboutModalOpen}
        onCloseModal={handleCloseModal}
      >
        {data && <AboutModal sections={data.abouts}/>}
      </GenericModal>
    </>
  )
}
