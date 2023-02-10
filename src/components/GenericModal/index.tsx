import { Html, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { X } from 'phosphor-react'
import { ReactNode, useEffect } from 'react'
import { useModal } from '@App/core/context/ModalContext'
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
}: GenericModalProps) => {
  const { setIsModalOpen } = useModal()

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen, setIsModalOpen])

  if (!isOpen) return null

  return (
    <OrthographicCamera position={[0, 0, 0]} makeDefault>
      <Html center className={styles.container}>
        <main className={styles.modal__content}>
          <X onClick={onCloseModal} size={32} className={styles.modal__close} />

          {isLoading ? <Spinner /> : children}
        </main>
      </Html>
    </OrthographicCamera>
  )
}
