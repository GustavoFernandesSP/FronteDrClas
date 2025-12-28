import { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/">Home</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/builds">Builds</Link>
        <Link to="/droneWork">DroneWork</Link>
        <Link to="/loja">Loja</Link>

        {/* 🔑 BOTÃO LOGIN NO FINAL */}
        <div className={styles.loginWrapper}>
          <Link
            to="/auth"
            className={styles.login}
            onClick={() => setOpen(false)}
          >
            Login / Cadastro
          </Link>
        </div>
      </nav>
    </>
  )
}
