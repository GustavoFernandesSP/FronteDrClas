import styles from './MobileHeader.module.css'

export function MobileHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.icon}>✈️</span>
        <strong>DroneClass</strong>
      </div>

      <button className={styles.menu}>
        ☰
      </button>
    </header>
  )
}

