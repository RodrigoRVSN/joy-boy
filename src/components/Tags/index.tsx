import styles from './styles.module.css'

type TagsProps = {
  tags: string[]
}

export const Tags = ({ tags }: TagsProps) => {
  return (
    <footer className={styles.tags__container}>
      {tags?.map(tag => (
        <span
          key={tag}
          className={styles.tag}
        >
          {tag}
        </span>
      ))}
    </footer>
  )
}
