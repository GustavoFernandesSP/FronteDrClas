import styles from './WorkInProgress.module.css'

export function WorkInProgress() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.gear} />

        <h1>Área em desenvolvimento</h1>
        <p>
          A equipe da <strong>DroneClass</strong> está trabalhando no
          desenvolvimento desta funcionalidade para entregar a melhor
          experiência possível para pilotos e profissionais de drones.
        </p>
      </div>
    </main>
  )
}
