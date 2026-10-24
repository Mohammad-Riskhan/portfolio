import Icon from './Icons.jsx'

const projects = [
  {
    label: 'IN DEVELOPMENT',
    title: 'Payroll Management System',
    description: 'Developing an automated payroll system to streamline salary computation, tax deductions, and payslip generation.',
    tools: 'React · Spring Boot · MySQL · RESTful APIs',
  },
  {
    label: 'IN DEVELOPMENT',
    title: 'React Native Mobile Applications',
    description: 'Building cross-platform app modules with responsive UI, asynchronous storage, and seamless backend API communication.',
    tools: 'React Native · JavaScript · Expo · Node.js',
  },
]

function OngoingProjects() {
  return (
    <section className="content-section section-wrap experience-section" id="ongoing" aria-labelledby="ongoing-title">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-index">04 / IN PROGRESS</span>
          <h2 id="ongoing-title">Currently <span>building.</span></h2>
        </div>
        <p className="section-intro">Projects in active development alongside my completed portfolio work.</p>
      </div>
      <div className="experience-grid">
        {projects.map((project) => (
          <article className="experience-card" key={project.title}>
            <div className="experience-card-top">
              <span className="experience-icon"><Icon name="workflow" size={18} /></span>
              <span className="experience-label">{project.label}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="experience-tools">{project.tools}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OngoingProjects
