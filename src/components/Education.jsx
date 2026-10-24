import Icon from './Icons.jsx'

function Education() {
  return (
    <section className="content-section section-wrap education-section" id="education" aria-labelledby="education-title">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-index">05 / EDUCATION</span>
          <h2 id="education-title">The learning <span>behind the work.</span></h2>
        </div>
        <Icon className="education-heading-icon" name="graduation" size={27} strokeWidth={1.4} />
      </div>
      <div className="education-list">
        <article className="education-item">
          <span className="education-marker" />
          <div className="education-copy">
            <span className="education-level">UNDERGRADUATE DEGREE</span>
            <h3>B.Sc. (Hons) in Software Engineering</h3>
            <p>Edgehill University (UK) · Asian Institute of Business &amp; Science at Colombo</p>
          </div>
          <span className="education-result">Second Class Upper · 2026</span>
        </article>
        <article className="education-item">
          <span className="education-marker" />
          <div className="education-copy">
            <span className="education-level">DIPLOMA</span>
            <h3>BTech HND in Software Engineering</h3>
            <p>AIBS Colombo</p>
          </div>
          <span className="education-result">Software Engineering</span>
        </article>
      </div>
    </section>
  )
}

export default Education
