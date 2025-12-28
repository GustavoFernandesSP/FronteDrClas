import styles from './Header.module.css'
import logo from '../../assets/imagens/DroneClass.png'


export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <img
            src={logo}
            alt="DroneClass"
            className={styles.logoImage}
          />
          <span className={styles.brand}>DroneClass</span>
        </div>

        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Cursos</a>
          <a href="#">Builds</a>
          <a href="#">Comunidade</a>
          <a href="#">Contato</a>
        </nav>

        <button className={styles.login}>
          Login / Cadastro
        </button>

      </div>
    </header>
  )
}
