import { AppLayout } from '../components/layout/AppLayout'
import { Hero } from '../components/home/Hero'
import { Features } from '../components/home/Features'
import { useViewport } from '../hooks/useViewport'
import { HomeMobile } from './HomeMobile'

export function Home() {
  const { isMobile } = useViewport()

  if (isMobile) {
    return <HomeMobile />
  }

  return (
    <AppLayout>
      <Hero />
      <Features />
    </AppLayout>
  )
}
