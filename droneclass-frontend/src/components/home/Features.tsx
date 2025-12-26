import { Card } from '../common/Card'
import styles from './Features.module.css'

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        <Card
          title="Cursos Profissionais"
          description="Aprenda do básico ao avançado em drones."
          image="https://images.unsplash.com/photo-1508615070457-7baeba4003ab"
        />

        <Card
          title="Builds de Drones"
          description="Monte e customize seu próprio drone."
          image="https://images.unsplash.com/photo-1527976746750-0f9b80f3b0b4"
        />

        <Card
          title="Comunidade"
          description="Conecte-se com pilotos e especialistas."
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        />
      </div>
    </section>
  )
}
