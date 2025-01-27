import { ReactNode } from 'react'

export interface CollapsibleSectionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}
