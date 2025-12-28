import { useState } from 'react'
import styles from './MobileHeader.module.css'
import logo from '../../assets/imagens/DroneClass.png'

export function MobileHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img
            src={logo}
            alt="DroneClass"
            className={styles.logo}
          />
          <strong>DroneClass</strong>
        </div>

        <button
          className={styles.menu}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </header>

      {/* MENU MOBILE */}
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <a href="#">Home</a>
        <a href="#">Cursos</a>
        <a href="#">Builds</a>
        <a href="#">DroneWork</a>
        <a href="#">Loja</a>
      </nav>
    </>
  )
}
