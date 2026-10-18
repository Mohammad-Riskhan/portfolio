import Icon from './Icons.jsx'

function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-copy">
        <span className="section-index">06 / CONTACT</span>
        <h2 id="contact-title">Let&apos;s build<br /><span>what&apos;s next.</span></h2>
        <p>I&apos;m always open to connecting with people working on thoughtful software and AI.</p>
      </div>
      <div className="contact-links">
        <a className="contact-link" href="https://www.linkedin.com/in/mohammad-riskhan" target="_blank" rel="noreferrer">
          <span className="contact-link-icon"><Icon name="linkedin" size={19} /></span>
          <span><small>CONNECT ON</small><strong>LinkedIn</strong></span>
          <Icon className="contact-link-arrow" name="arrow" size={18} />
        </a>
        <a className="contact-link" href="https://github.com/Mohammad-Riskhan" target="_blank" rel="noreferrer">
          <span className="contact-link-icon"><Icon name="github" size={19} /></span>
          <span><small>EXPLORE MY CODE</small><strong>GitHub</strong></span>
          <Icon className="contact-link-arrow" name="arrow" size={18} />
        </a>
      </div>
    </section>
  )
}

export default Contact
