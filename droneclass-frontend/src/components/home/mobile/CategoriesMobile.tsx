import styles from './CategoriesMobile.module.css'
import { CategoryCard } from './CategoryCard'

export function CategoriesMobile() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Categorias</h2>

      <div className={styles.list}>
        <CategoryCard
          icon="🚁"
          title="FPV"
          description="Alta performance"
        />

        <CategoryCard
          icon="📸"
          title="Fotografia"
          description="Imagens aéreas"
        />

        <CategoryCard
          icon="🛠️"
          title="Build"
          description="Monte seu drone"
        />

        <CategoryCard
          icon="📄"
          title="Homologação"
          description="ANAC & DECEA"
        />
      </div>
    </section>
  )
}
