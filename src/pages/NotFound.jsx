import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ 
      background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ 
          fontSize: '8rem', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1,
          background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          marginBottom: '1rem',
        }}>
          404
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Page not found</h2>
        <p style={{ color: '#8b9cbf', marginBottom: '2rem', maxWidth: '400px' }}>
          The page you're looking for doesn't exist. It may have been moved or the URL is incorrect.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
            <Home size={14} /> Go home
          </Link>
          <Link to="/courses" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <Search size={14} /> Browse courses
          </Link>
        </div>
      </div>
    </div>
  );
}
