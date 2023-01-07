import styles from './styles.module.css'

export const Spinner = () => {
  return (
    <div className={styles.wood}>
      <div className={styles.pointer_1}>
        <div className={styles.triangle__red}/>
        <div className={styles.triangle__white}/>
      </div>
      <div className={styles.pointer_2}>
        <div className={styles.triangle__red}/>
        <div className={styles.triangle__white}/>
      </div>
      <div className={styles.pointer_3}>
        <div className={styles.triangle__red}/>
        <div className={styles.triangle__white}/>
      </div>
    </div>
  )
}
