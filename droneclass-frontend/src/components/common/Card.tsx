import styles from './Card.module.css'

type CardProps = {
  title: string
  description: string
  image: string
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
