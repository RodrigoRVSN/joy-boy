import { RichText } from '@graphcms/rich-text-react-renderer'
import { Tags } from '@App/components/Tags'
import { GetExperiencesQuery } from '@App/core/graphql/queries.generated'
import styles from './styles.module.css'

type ExperienceModalProps = {
  experiences: GetExperiencesQuery['experiences']
}

export const ExperienceModal = ({ experiences }: ExperienceModalProps) => {
  return (
    <section className={styles.experiences__container}>
      {experiences.map(experience => (
        <article key={experience.company} className={styles.experience__container}>
          <time className={styles.experience__time}>
            {experience.initialDate} | {experience.finishDate || 'now'}
          </time>

          <h1 className={styles.experience__position}>{experience.position}</h1>
          <h2 className={styles.experience__company}>{experience.company}</h2>

          <RichText
            content={experience.description?.raw}
            renderers={{
              a: ({ children, ...rest }) => (
                <a className={styles.experience__link} {...rest}>
                  {children}
                </a>
              )
            }}
          />

          <Tags tags={experience.tags} />
        </article>
      ))}
    </section>
  )
}
