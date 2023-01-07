import { RichText } from '@graphcms/rich-text-react-renderer'
import { GetExperiencesQuery } from '@App/core/graphql/generated'
import styles from './styles.module.css'

type ExperienceModalProps = {
  experiences: GetExperiencesQuery['experiences']
}

export const ExperienceModal = ({ experiences }: ExperienceModalProps) => {
  return (
    <section className={styles.experiences__container}>
      {experiences.map(experience => (
        <article key={experience.company} className={styles.experience__container}>
          <time>{experience.initialDate}</time>
          <time>{experience.finishDate || 'now'}</time>

          <h1 className={styles.experience__position}>{experience.position}</h1>
          <h2 className={styles.experience__company}>{experience.company}</h2>
          <RichText content={experience.description?.raw} />

          <footer className={styles.experience__tags_container}>
            {experience.tags?.map(tag => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </footer>
        </article>
      ))}
    </section>
  )
}
