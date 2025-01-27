export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export type ModalSize = 'small' | 'medium' | 'large'

export interface ModalStyleProps {
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
}
