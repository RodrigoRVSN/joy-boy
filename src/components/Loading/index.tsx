import { Html, useProgress } from '@react-three/drei'
import { Spinner } from './Spinner'
import styles from './styles.module.css'

const SplashScreen = () => {
  const { progress } = useProgress()

  return (
    <Html center className={styles.loading__container}>

      <Spinner />

      <h1>Loading supplies...</h1>

      <span className={styles.percentage}>
        {Math.floor(progress)}%
      </span>
     </Html>
  )
}

export {
  SplashScreen,
  Spinner
}
