import styles from './BottomNav.module.css'

export function BottomNav() {
  return (
    <nav className={styles.nav}>
      <button className={styles.active}>Home</button>
      <button>Cursos</button>
      <button>Buscar</button>
      <button>Perfil</button>
    </nav>
  )
}
