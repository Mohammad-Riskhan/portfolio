import Icon from './Icons.jsx'

const areas = [
  {
    icon: 'workflow',
    label: 'APPLICATION ENGINEERING',
    title: 'End-to-end product development',
    description: 'Building across responsive web and mobile clients, backend services, REST APIs, authentication, and relational data models.',
    tools: 'React · React Native · Node.js · Spring Boot',
  },
  {
    icon: 'ai',
    label: 'AI & INTELLIGENT SYSTEMS',
    title: 'Bringing AI into applications',
    description: 'Exploring how LLM integrations, prompt engineering, and vector search can make software more useful and context-aware.',
    tools: 'Python · LangChain · LLMs · Vector databases',
  },
  {
    icon: 'shield',
    label: 'ENGINEERING PRACTICE',
    title: 'Reliable, maintainable foundations',
    description: 'Applying clean architecture principles, modular design, secure API patterns, and deliberate data modeling.',
    tools: 'OOP · JWT · Microservices · Multi-tenant systems',
  },
]

function Experience() {
  return (
    <section className="content-section section-wrap experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-index">04 / EXPERIENCE</span>
          <h2 id="experience-title">Growing across <span>the stack.</span></h2>
        </div>
        <p className="section-intro">The engineering areas I bring together as I grow toward full-stack and AI engineering.</p>
      </div>
      <div className="experience-grid">
        {areas.map((area) => (
          <article className="experience-card" key={area.title}>
            <div className="experience-card-top">
              <span className="experience-icon"><Icon name={area.icon} size={18} /></span>
              <span className="experience-label">{area.label}</span>
            </div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <span className="experience-tools">{area.tools}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
