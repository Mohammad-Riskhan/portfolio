import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GitBranch,
  GraduationCap,
  Globe2,
  Mail,
  Moon,
  Monitor,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Workflow,
} from 'lucide-react'

const icons = {
  arrow: ArrowUpRight,
  ai: BrainCircuit,
  briefcase: BriefcaseBusiness,
  code: Code2,
  database: Database,
  download: Download,
  github: Code2,
  git: GitBranch,
  graduation: GraduationCap,
  globe: Globe2,
  linkedin: BriefcaseBusiness,
  mail: Mail,
  moon: Moon,
  monitor: Monitor,
  phone: Phone,
  server: Server,
  shield: ShieldCheck,
  sparkles: Sparkles,
  sun: Sun,
  workflow: Workflow,
}

function Icon({ name, size = 18, strokeWidth = 1.7, className = '' }) {
  const IconComponent = icons[name]

  if (!IconComponent) {
    throw new Error(`Unknown icon: ${name}`)
  }

  return <IconComponent aria-hidden="true" className={className} size={size} strokeWidth={strokeWidth} />
}

export default Icon
