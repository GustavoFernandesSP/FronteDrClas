import { useState } from 'react'
import styles from './Auth.module.css'

export function AuthDesktop() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Simulação de request
    setTimeout(() => {
      setLoading(false)
      setError('E-mail ou senha inválidos')
    }, 1500)
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>

        {/* Toggle */}
        <div className={styles.toggle}>
          <button
            className={mode === 'login' ? styles.active : ''}
            onClick={() => setMode('login')}
          >
            Entrar
          </button>
          <button
            className={mode === 'register' ? styles.active : ''}
            onClick={() => setMode('register')}
          >
            Criar conta
          </button>
        </div>

        <h1>
          {mode === 'login'
            ? 'Entrar na DroneClass'
            : 'Criar conta na DroneClass'}
        </h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          {mode === 'register' && (
            <input type="text" placeholder="Nome completo" />
          )}

          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          {error && <span className={styles.error}>{error}</span>}

          <button type="submit" disabled={loading}>
            {loading ? <span className={styles.loader} /> : (
              mode === 'login' ? 'Entrar' : 'Criar conta'
            )}
          </button>
        </form>

        {/* Forgot password */}
        {mode === 'login' && (
          <button className={styles.forgot}>
            Esqueci minha senha
          </button>
        )}

        {/* Divider */}
        <div className={styles.divider}>
          <span>ou</span>
        </div>

        {/* Google */}
        <button className={styles.google}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Entrar com Google
        </button>

      </section>
    </main>
  )
}
