import { AppLayout } from '../components/layout/AppLayout'
import { MobileHero } from '../components/mobile/MobileHero'
import { CategoriesMobile } from '../components/home/mobile/CategoriesMobile'

export function HomeMobile() {
  return (
    <AppLayout>
       <MobileHero />
      <CategoriesMobile />
    </AppLayout>
  )
}