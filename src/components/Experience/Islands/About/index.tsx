import { useState } from 'react'
import { GenericModal } from '@App/components/GenericModal'
import { useGetAboutMeLazyQuery } from '@App/core/graphql/generated'
import { GenericIsland } from '../components/GenericIsland'
import { AboutModal } from './AboutModal'

export const About = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [getAboutMe, { data }] = useGetAboutMeLazyQuery({
  })

  const handleOpenModal = () => {
    setIsAboutModalOpen(true)
    getAboutMe()
  }

  const handleCloseModal = () => {
    setIsAboutModalOpen(false)
  }
  console.log(data?.abouts[0].images)

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
          {data && <AboutModal sections={data.abouts}/>}
      </GenericModal>
    </>
  )
}
