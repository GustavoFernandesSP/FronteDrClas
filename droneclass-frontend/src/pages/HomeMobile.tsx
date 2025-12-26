import { MobileLayout } from '../components/layout/MobileLayout'
import { MobileHero } from '../components/mobile/MobileHero'
import { CategoriesMobile } from '../components/home/mobile/CategoriesMobile'

export function HomeMobile() {
  return (
    <MobileLayout>
       <MobileHero />
      <CategoriesMobile />
    </MobileLayout>
  )
}