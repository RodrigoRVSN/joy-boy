import { RichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'
import { GetAboutMeQuery } from '@App/core/graphql/generated'

type AboutModalProps = {
  sections: GetAboutMeQuery['abouts']
}

export const AboutModal = ({ sections }: AboutModalProps) => {
  return (
    <>
      {sections.map(({ title, description, images }) => (
        <section key={title}>
          <h1>{title}</h1>

          <RichText content={description?.raw}/>

          {images.map(image => (
            <Image
              key={image.id}
              src={image.url}
              alt={image.fileName}
              width={400}
              height={300}
            />
          ))}
        </section>
      ))}
    </>
  )
}
