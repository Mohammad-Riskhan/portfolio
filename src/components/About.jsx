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
          I&apos;m a Software Engineering graduate with a <strong>BSc (Hons) in
          Software Engineering, Second Class Upper Division</strong>. I build
          production-ready web and mobile applications, connecting responsive
          interfaces with APIs, backend services, and data systems.
        </p>
        <p>
          My toolkit spans React, React Native, Java EE, Spring Boot, and
          Node.js, supported by MySQL and PostgreSQL. I&apos;m seeking an
          internship or junior role where I can contribute clean code and
          scalable architecture while growing as a full-stack developer and
          aspiring AI engineer.
        </p>
        <div className="about-note">
          <Icon name="sparkles" size={18} />
          <span>Focused on <strong>clean code, scalable architecture,</strong> and <strong>continuous delivery.</strong></span>
        </div>
      </div>
    </section>
  )
}

export default About
