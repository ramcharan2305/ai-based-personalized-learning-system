import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/login', label: 'Login' },
  { path: '/dashboard', label: 'Dashboard' }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">AEdx</span>
        <div>
          <h1>ApexEdx</h1>
          <p>Personalized learning, built for your pace.</p>
        </div>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
