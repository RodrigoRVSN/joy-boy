import { Html } from '@react-three/drei'
import { X } from 'phosphor-react'
import { useGetProjectsQuery } from '@App/core/graphql/generated'
import { GenericIsland } from '../components/GenericIsland'
import { ProjectModal } from './ProjectModal'
import styles from './styles.module.css'

export const Projects = () => {
  const { data } = useGetProjectsQuery()

  return (
    <>

      <GenericIsland
        title='Projetos'
        objectUrl='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
        islandNumber={1}
        position={[30, 0, -30]}
        rotationY={-Math.PI / 4}
      />

      <Html center className={styles.container}>

        <main className={styles.project}>
          <X size={32} className={styles.project__close}/>

          {data && <ProjectModal projects={data!.projects} />}
        </main>
      </Html>

    </>
  )
}
