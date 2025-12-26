import type { ReactNode } from 'react'
import { Header } from './Header'

type Props = {
  children: ReactNode
}

export function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
