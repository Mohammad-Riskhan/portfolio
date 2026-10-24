import { useState } from 'react'
import Icon from './Icons.jsx'
import SkillBadge from './SkillBadge.jsx'

const groups = [
  {
    category: 'Languages',
    icon: 'code',
    title: 'Programming languages',
    skills: ['Java', 'Java EE', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    icon: 'monitor',
    title: 'Frontend & mobile',
    skills: ['React.js', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: 'server',
    title: 'Backend & APIs',
    skills: ['Spring Boot', 'Node.js', 'Express.js', 'Servlets', 'JSP', 'RESTful APIs'],
  },
  {
    category: 'Data',
    icon: 'database',
    title: 'Databases & storage',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'DevOps',
    icon: 'git',
    title: 'DevOps, cloud & deployment',
    skills: ['AWS', 'Docker', 'CI/CD Pipelines', 'Git', 'GitHub', 'Postman'],
  },
  {
    category: 'Core',
    icon: 'workflow',
    title: 'Core concepts',
    skills: ['Object-Oriented Programming (OOP)', 'Microservices Architecture', 'CRUD Development'],
  },
]

const filters = ['All', ...groups.map(({ category }) => category)]

function Skills() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleGroups = activeFilter === 'All'
    ? groups
    : groups.filter(({ category }) => category === activeFilter)

  return (
    <section className="content-section section-wrap" id="skills" aria-labelledby="skills-title">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-index">02 / TOOLKIT</span>
          <h2 id="skills-title">A practical <span>foundation.</span></h2>
        </div>
        <p className="section-intro">Technologies and engineering fundamentals from my full-stack software development toolkit.</p>
      </div>
      <div className="skill-filters" role="group" aria-label="Filter skills by domain">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={`skill-filter${activeFilter === filter ? ' is-active' : ''}`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {visibleGroups.map((group) => (
          <article className="skill-group" key={group.category}>
            <div className="skill-group-heading">
              <span className="skill-icon"><Icon name={group.icon} size={17} /></span>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-badges">
              {group.skills.map((skill) => <SkillBadge key={skill}>{skill}</SkillBadge>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
