import { Html, Text } from '@react-three/drei'
import { GithubLogo, X } from 'phosphor-react'
import { useGetProjectsQuery } from '@App/core/graphql/generated'
import { GenericIsland } from '../components/GenericIsland'
import styles from './styles.module.css'

export const Projects = () => {
  const { data } = useGetProjectsQuery()

  const project = data?.projects[0]

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

          <header className={styles.project__header}>
            <h1 className={styles.project__title}>{project?.title}</h1>

            <a
              target='_blank'
              className={styles.project__cta}
              href={project?.githubUrl} rel="noreferrer"
            >
              REPO
              <GithubLogo />
            </a>
          </header>

          <p className={styles.project__description}>{project?.description}</p>

          <div className={styles.project__stack_container}>
            {project?.stack.map(stack => (
              <span className={styles.project__stack} key={stack}>{stack}</span>
            ))}
          </div>

          <iframe
            className={styles.project__demo}
            src={String(project?.demo)}
          />
        </main>
      </Html>

    </>
  )
}
