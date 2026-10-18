import Icon from './Icons.jsx'

const navigation = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Education', '#education'],
]

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Mohammad Riskhan, home">
        <span className="brand-mark">MR</span>
        <span className="brand-name">Mohammad Riskhan</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {navigation.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <div className="header-actions flex items-center gap-2">
        <button
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          className="theme-toggle"
          onClick={onToggleTheme}
          type="button"
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
        </button>
        <a className="header-contact" href="#contact">
          Let&apos;s talk <Icon name="arrow" size={15} />
        </a>
      </div>
    </header>
  )
}

export default Header
