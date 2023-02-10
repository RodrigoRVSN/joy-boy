import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type ModalContextProps = {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

type ModalProviderProps = {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextProps)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)

  return context
}
