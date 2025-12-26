import './MobileHero.css'

export function MobileHero() {
  return (
    <section className="mobile-hero">
      <div className="mobile-hero__content">
        <span className="badge">Novo Curso</span>

        <h1>Master the Sky.</h1>

        <p className='ParagrafoSobreCurso'>
          Learn to build, program, and fly
          professional drones from industry experts.
        </p>

        <div className="actions">
          <button className="primary">Start Learning</button>
          <button className="secondary">Browse Catalog</button>
        </div>
      </div>
    </section>
  )
}
