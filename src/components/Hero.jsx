import Icon from './Icons.jsx'

function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> FULL-STACK DEVELOPMENT · AI ENGINEERING</p>
        <h1 id="hero-title">
          Full-stack systems.<br />
          <span>Intelligent futures.</span>
        </h1>
        <p className="hero-description">
          I&apos;m Mohammad, a Software Engineering graduate building end-to-end
          web and mobile applications, with a growing focus on integrating AI
          into useful products.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <Icon name="arrow" size={16} />
          </a>
          <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta">
          <span><span className="meta-label">BASED IN</span> Colombo, Sri Lanka</span>
          <span className="meta-divider" aria-hidden="true" />
          <span><span className="meta-label">FOCUS</span> Full-stack · AI</span>
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
