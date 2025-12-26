import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>
          Domine o Céu com <span>DroneClass</span>
        </h1>

        <p>
          Aprenda a construir, pilotar e dominar a tecnologia dos drones.
        </p>

        <div className={styles.actions}>
          <button className={styles.primary}>Começar Agora</button>
          <button className={styles.secondary}>Ver Cursos →</button>
        </div>
      </div>
    </section>
  )
}
