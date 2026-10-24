import Icon from './Icons.jsx'

function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> FULL-STACK DEVELOPMENT · AI ENGINEERING</p>
        <h1 id="hero-title">
          Software engineer.<br />
          <span>Building what&apos;s next.</span>
        </h1>
        <p className="hero-description">
          I&apos;m Mohammad Riskhan, a BSc (Hons) Software Engineering graduate
          (Second Class Upper Division), seeking an internship or junior role.
          I build production-ready web and mobile applications and aspire to
          bring useful AI into the products I create.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <Icon name="arrow" size={16} />
          </a>
          <a className="button button-secondary" href="/Riskhan_CV.pdf" download="Riskhan_CV.pdf">
            Download CV <Icon name="download" size={16} />
          </a>
          <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta">
          <span><span className="meta-label">BASED IN</span> Colombo, Sri Lanka</span>
          <span className="meta-divider" aria-hidden="true" />
          <span><span className="meta-label">GRADUATED</span> 2026</span>
        </div>
      </div>
      <div className="hero-art" aria-label="A visual illustration of connected ideas">
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-inner" />
        <div className="orbit-node node-top" />
        <div className="orbit-node node-right" />
        <div className="orbit-node node-left" />
        <div className="hero-core">
          <Icon name="sparkles" size={43} strokeWidth={1.25} />
        </div>
        <div className="art-caption">
          <span className="caption-icon"><Icon name="code" size={15} /></span>
          <span><strong>Curiosity meets code</strong><small>Always learning, always building</small></span>
          <span className="caption-pulse" />
        </div>
        <span className="art-coordinate coordinate-one">06°55&apos;N</span>
        <span className="art-coordinate coordinate-two">79°51&apos;E</span>
      </div>
    </section>
  )
}

export default Hero
