import ProjectCard from './ProjectCard.jsx'

const githubRepositories = 'https://github.com/Mohammad-Riskhan?tab=repositories'
const posLiveUrl = 'https://saas-pos-syste.netlify.app/login'

const projects = [
  {
    number: '01',
    illustration: 'pos',
    category: 'SAAS · MULTI-TENANT',
    title: 'SaaS Point of Sale System',
    description: 'Engineered and deployed a multi-tenant SaaS POS with administrative, owner, and cashier workflows, role-based access control, and secure API integration.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Docker'],
    liveUrl: posLiveUrl,
    repositoryUrl: githubRepositories,
  },
  {
    number: '02',
    illustration: 'enterprise',
    category: 'JAVA EE · ENTERPRISE WEB',
    title: 'Java EE Enterprise Web Application',
    description: 'Developed an enterprise-grade web application with Java EE, Servlets, and JSP, using MVC architecture and JDBC connection pooling.',
    technologies: ['Java EE', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Apache Tomcat'],
    repositoryUrl: githubRepositories,
  },
  {
    number: '03',
    illustration: 'students',
    category: 'JAVA · BACKEND',
    title: 'Student Management System',
    description: 'Built an academic backend with object-oriented design, modular service architecture, and relational database optimization.',
    technologies: ['Java', 'Spring Boot', 'OOP', 'MySQL', 'Git'],
    repositoryUrl: githubRepositories,
  },
]

function Projects() {
  return (
    <section className="content-section section-wrap projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-index">03 / SELECTED WORK</span>
          <h2 id="projects-title">Built with <span>purpose.</span></h2>
        </div>
        <p className="section-intro">Selected web and backend projects built with Java, Spring Boot, React, and relational databases.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.number} {...project} />)}
      </div>
    </section>
  )
}

export default Projects
