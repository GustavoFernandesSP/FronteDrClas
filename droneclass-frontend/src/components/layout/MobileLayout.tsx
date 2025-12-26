import type { ReactNode } from 'react'
import styles from './MobileLayout.module.css'

import { MobileHeader } from '../mobile/MobileHeader'
import { BottomNav } from '../mobile/BottomNav'

type Props = {
  children: ReactNode
}

export function MobileLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <MobileHeader />
      <main className={styles.content}>{children}</main>
      <BottomNav />
    </div>
  )
}
