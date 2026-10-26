import './Navbar.css'

function Navbar({ user, notifications = 0 }) {
  const isAdmin = user && user.role === 'admin'
  const badge = notifications > 9 ? '9+' : notifications

  return (
    <nav className="navbar">
      <span className="navbar__logo">MyApp</span>

      {isAdmin && (
        <a href="#admin" className="navbar__admin-link">
          Admin dashboard
        </a>
      )}

      {notifications > 0 && <span className="navbar__badge">🔔 {badge}</span>}

      {user ? (
        <>
          <span>Hi, {user.name}</span>
          <button>Log out</button>
        </>
      ) : (
        <>
          <button>Log in</button>
          <button>Sign up</button>
        </>
      )}
    </nav>
  )
}

export default Navbar