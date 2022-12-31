import { Html } from '@react-three/drei'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import styles from './styles.module.css'

type GenericModalProps = {
  isOpen: boolean
  onCloseModal: () => void
  children: ReactNode
}

export const GenericModal = ({ isOpen, onCloseModal, children } : GenericModalProps) => {
  if (!isOpen) return null

  return (
    <Html center className={styles.container}>
      <main className={styles.modal__content}>
        <X onClick={onCloseModal} size={32} className={styles.modal__close}/>

        {children}
      </main>
    </Html>
  )
}
