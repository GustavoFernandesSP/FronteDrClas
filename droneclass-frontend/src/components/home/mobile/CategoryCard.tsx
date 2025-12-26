import styles from './CategoryCard.module.css'

type Props = {
  title: string
  description: string
  icon: string
}

export function CategoryCard({ title, description, icon }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <strong className={styles.title}>{title}</strong>
      <span className={styles.description}>{description}</span>
    </div>
  )
}
