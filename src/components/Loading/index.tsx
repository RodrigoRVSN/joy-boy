import { Html, useProgress } from '@react-three/drei'
import styles from './styles.module.css'

export const Loading = () => {
  const teste = useProgress()

  return (
    <Html center className={styles.loading__container}>
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

      <h1>Loading...</h1>
      <span className={styles.percentage}>{Math.floor(teste.progress)}%</span>
     </Html>
  )
}
