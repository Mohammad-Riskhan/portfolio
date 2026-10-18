import ProjectCard from './ProjectCard.jsx'

const githubRepositories = 'https://github.com/Mohammad-Riskhan?tab=repositories'

const projects = [
  {
    number: '01',
    illustration: 'ai',
    category: 'AI · FULL-STACK',
    title: 'AI-Powered Full-Stack Assistant',
    description: 'An intelligent platform with a responsive React frontend, a Node.js/Express API gateway, and Python microservices integrating LLMs for contextual data processing.',
    technologies: ['Python', 'React', 'Node.js', 'Express', 'LLM APIs', 'LangChain'],
    repositoryUrl: githubRepositories,
  },
  {
    number: '02',
    illustration: 'pos',
    category: 'WEB · MOBILE · MULTI-TENANT',
    title: 'Cross-Platform Multi-Tenant POS',
    description: 'A point-of-sale system spanning web and mobile clients, with role-based access control, secure Spring Boot REST APIs, and relational data management.',
    technologies: ['React Native', 'React', 'Spring Boot', 'PostgreSQL', 'Antigravity'],
    repositoryUrl: githubRepositories,
  },
  {
    number: '03',
    illustration: 'students',
    category: 'BACKEND · APPLICATION',
    title: 'Student Management System',
    description: 'An academic management backend built with Java and Spring Boot, using modular services, dependency injection, and object-oriented design.',
    technologies: ['Java', 'Spring Boot', 'OOP', 'MySQL', 'Git', 'GitHub'],
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
        <p className="section-intro">Web, mobile, backend, and AI work that puts end-to-end engineering into practice.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.number} {...project} />)}
      </div>
    </section>
  )
}

export default Projects
