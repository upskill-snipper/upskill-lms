import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Zap, BookOpen, LayoutDashboard, LogOut, LogIn, UserPlus, Shield } from 'lucide-react';
import { getCurrentUser, logout } from '../utils/auth';

export default function Navbar() {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    logout();
    navigate('/');
  }

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav style={{
      background: 'rgba(10,14,26,0.95)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      backdropFilter: 'blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '64px', gap: '0.5rem' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem', marginRight: '2rem' }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px rgba(14,165,233,0.3)',
            }}>
              <Zap size={18} color="white" />
            </div>
            <div>
              <div style={{ color: '#f0f4f8', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Upskill Energy
              </div>
              <div style={{ color: '#0ea5e9', fontSize: '0.6rem', fontFamily: 'monospace', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Professional Training
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flex: 1 }}>
            <Link to="/courses" className={`nav-link ${isActive('/courses') ? 'active' : ''}`}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <BookOpen size={14} />
                Courses
              </span>
            </Link>
            {user && (
              <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <LayoutDashboard size={14} />
                  Dashboard
                </span>
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/admin" className={`nav-link ${isActive('/admin') ? 'active' : ''}`}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <Shield size={14} />
                  Admin
                </span>
              </Link>
            )}
          </div>

          {/* Right side */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                color: '#8b9cbf', fontSize: '0.8rem',
                padding: '0.25rem 0.75rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '0.375rem',
              }}>
                {user.name}
              </div>
              <button onClick={handleLogout} className="btn-ghost" style={{ padding: '0.375rem 0.75rem' }}>
                <LogOut size={14} />
                Sign out
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link to="/login" className="btn-ghost">
                <LogIn size={14} />
                Sign in
              </Link>
              <Link to="/register" className="btn-primary" style={{ textDecoration: 'none' }}>
                <UserPlus size={14} />
                Get started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
