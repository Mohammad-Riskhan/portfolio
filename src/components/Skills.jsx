import { useState } from 'react'
import Icon from './Icons.jsx'
import SkillBadge from './SkillBadge.jsx'

const groups = [
  {
    category: 'AI',
    icon: 'ai',
    title: 'AI & machine learning',
    skills: ['Python', 'Prompt Engineering', 'LangChain & LLM Integration', 'Vector Databases', 'Machine Learning Fundamentals'],
  },
  {
    category: 'Frontend',
    icon: 'monitor',
    title: 'Frontend & mobile',
    skills: ['React.js', 'React Native', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'State Management & Responsive UI'],
  },
  {
    category: 'Backend',
    icon: 'server',
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'RESTful API Design & JWT Authentication', 'Microservices Architecture Concepts'],
  },
  {
    category: 'Data',
    icon: 'database',
    title: 'Databases & storage',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Modeling & Optimization'],
  },
  {
    category: 'DevOps',
    icon: 'git',
    title: 'DevOps & workflow',
    skills: ['Git', 'GitHub', 'Postman', 'Antigravity', 'CI/CD Pipelines & Deployment Basics'],
  },
  {
    category: 'Core',
    icon: 'workflow',
    title: 'Core engineering',
    skills: ['Object-Oriented Programming (OOP)', 'Asynchronous Programming', 'Multi-tenant Architecture', 'CRUD & Enterprise Application Development'],
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
        <p className="section-intro">Explore the tools and concepts I use across AI, full-stack development, and software engineering.</p>
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
