import Icon from './Icons.jsx'

function About() {
  return (
    <section className="content-section section-wrap about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <span className="section-index">01 / ABOUT</span>
        <h2 id="about-title">Grounded in engineering.<br /><span>Driven by what&apos;s next.</span></h2>
      </div>
      <div className="about-content">
        <p>
          I&apos;m a Software Engineering graduate with a <strong>BSc (Hons), Second
          Class Upper Division</strong>. I build across the stack, connecting
          responsive web and mobile interfaces with APIs, backend services, and
          data systems.
        </p>
        <p>
          My toolkit spans React, React Native, Node.js, Express, Spring Boot,
          and Java, backed by relational and NoSQL databases. I&apos;m especially
          interested in clean architecture, high-performance APIs, and applying
          AI to solve real problems.
        </p>
        <div className="about-note">
          <Icon name="sparkles" size={18} />
          <span>Bridging <strong>robust application engineering</strong> with <strong>intelligent AI systems.</strong></span>
        </div>
      </div>
    </section>
  )
}

export default About
