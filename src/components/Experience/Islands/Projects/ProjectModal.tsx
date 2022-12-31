
import { GithubLogo, ArrowLeft, ArrowRight } from 'phosphor-react'
import { useState } from 'react'
import { GetProjectsQuery } from '@App/core/graphql/generated'
import styles from './styles.module.css'

type ProjectModalProps = {
  projects: GetProjectsQuery['projects']
}

export const ProjectModal = ({ projects }: ProjectModalProps) => {
  const [projectIndex, setProjectIndex] = useState(0)

  const project = projects[projectIndex]

  const handlePreviousProject = () => {
    setProjectIndex(prevState => prevState - 1)
  }

  const handleNextProject = () => {
    setProjectIndex(prevState => prevState + 1)
  }

  return (

    <>
      <header className={styles.project__header}>
        <h1 className={styles.project__title}>{project?.title}</h1>

        <div>
          <a
            target='_blank'
            className={styles.project__cta}
            href={project?.githubUrl} rel="noreferrer"
          >
            REPO
            <GithubLogo />
          </a>

          <div className={styles.arrow_container}>
            <button
              onClick={handlePreviousProject}
              disabled={projectIndex === 0}
              className={styles.arrow_left}
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={handleNextProject}
              disabled={projectIndex === projects.length - 1}
              className={styles.arrow_right}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
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
    </>
  )
}
