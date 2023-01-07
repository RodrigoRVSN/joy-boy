import { Html, OrthographicCamera } from '@react-three/drei'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import { Spinner } from '../Loading'
import styles from './styles.module.css'

type GenericModalProps = {
  isOpen: boolean
  onCloseModal: () => void
  children: ReactNode
  isLoading: boolean
}

export const GenericModal = ({
  isOpen,
  onCloseModal,
  children,
  isLoading
} : GenericModalProps) => {
  if (!isOpen) return null

  return (
    <OrthographicCamera position={[0, 0, 10]} makeDefault>
      <Html center className={styles.container}>
        <main className={styles.modal__content}>
          <X onClick={onCloseModal} size={32} className={styles.modal__close}/>

          {isLoading ? <Spinner /> : children}
        </main>
      </Html>
    </OrthographicCamera>
  )
}
