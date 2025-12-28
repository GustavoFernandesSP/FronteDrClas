import type { ReactNode } from 'react'
import { Header } from './Header'
import { MobileHeader } from '../mobile/MobileHeader'
import { useViewport } from '../../hooks/useViewport'

type Props = {
  children: ReactNode
}

export function AppLayout({ children }: Props) {
  const { isMobile } = useViewport()

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <main>{children}</main>
    </>
  )
}
