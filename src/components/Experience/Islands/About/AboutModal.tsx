import { RichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'
import { GetAboutMeQuery } from '@App/core/graphql/queries.generated'
import styles from './styles.module.css'

type AboutModalProps = {
  sections: GetAboutMeQuery['abouts']
}

export const AboutModal = ({ sections }: AboutModalProps) => {
  return (
    <>
      {sections.map(({ title, description, images }) => (
        <section key={title} className={styles.container}>
          <h1 className={styles.about__title}>{title}</h1>

          <RichText content={description?.raw}/>

          {images.map(image => (
            <Image
              className={styles.about__image}
              key={image.id}
              src={image.url}
              alt={image.fileName}
              width={734}
              height={400}
            />
          ))}
        </section>
      ))}
    </>
  )
}
