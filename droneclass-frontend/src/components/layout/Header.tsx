import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <div className={styles.icon}>
            <span className="material-symbols-outlined">mode_fan</span>
          </div>
          <span className={styles.brand}>DroneClass</span>
        </div>

        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Cursos</a>
          <a href="#">Builds</a>
          <a href="#">Comunidade</a>
          <a href="#">Contato</a>
        </nav>

        <button className={styles.login}>Login / Cadastro</button>

      </div>
    </header>
  )
}
