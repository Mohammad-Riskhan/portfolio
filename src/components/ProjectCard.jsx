import Icon from './Icons.jsx'
import SkillBadge from './SkillBadge.jsx'

function ProjectIllustration({ type }) {
  if (type === 'ai') {
    return (
      <div className="ai-window">
        <div className="window-dots"><i /><i /><i /><span>ASSISTANT / CONTEXT</span></div>
        <div className="ai-message"><span className="ai-avatar"><Icon name="sparkles" size={12} /></span><span className="ai-message-line" /></div>
        <div className="ai-response"><span /><span /><span /></div>
        <div className="ai-input"><span>Ask anything...</span><b><Icon name="arrow" size={12} /></b></div>
      </div>
    )
  }

  if (type === 'students') {
    return (
      <div className="student-window">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="student-row"><span className="student-avatar">AR</span><span /><b>Active</b></div>
        <div className="student-row"><span className="student-avatar avatar-alt">MK</span><span /><b>Active</b></div>
        <div className="student-row"><span className="student-avatar avatar-third">ST</span><span /><b>Enrolled</b></div>
      </div>
    )
  }

  if (type === 'enterprise') {
    return (
      <div className="enterprise-window">
        <div className="window-dots"><i /><i /><i /><span>JAVA EE / MVC</span></div>
        <div className="enterprise-code">
          <span /><span /><span /><span /><span />
        </div>
        <div className="enterprise-status"><i /> SERVLET · JDBC · MYSQL</div>
      </div>
    )
  }

  return (
    <div className="pos-window">
      <div className="pos-sidebar"><span /><span /><span /><span /></div>
      <div className="pos-content">
        <div className="pos-title-line" />
        <div className="pos-products"><span /><span /><span /><span /></div>
        <div className="pos-total"><span /><b /></div>
      </div>
    </div>
  )
}

function ProjectCard({ number, illustration, title, description, technologies, category, liveUrl, repositoryUrl }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-number">{number}</span>
        <span className="project-category">{category}</span>
        <span className="project-arrow"><Icon name="arrow" size={19} /></span>
      </div>
      <div className="project-visual" aria-hidden="true">
        <div className={`project-graphic project-graphic-${illustration}`}>
          <ProjectIllustration type={illustration} />
        </div>
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {technologies.map((technology) => <SkillBadge key={technology}>{technology}</SkillBadge>)}
        </div>
        <div className="project-links">
          {liveUrl && (
            <a className="project-repository" href={liveUrl} target="_blank" rel="noreferrer">
              Live deployment <Icon name="arrow" size={14} />
            </a>
          )}
          {repositoryUrl && (
            <a className="project-repository" href={repositoryUrl} target="_blank" rel="noreferrer">
              GitHub profile <Icon name="arrow" size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
