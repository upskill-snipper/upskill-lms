import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, LogIn, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { login } from '../utils/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 400)); // Simulate latency
    const result = login(email, password);
    setLoading(false);
    if (result.success) {
      navigate(result.user.role === 'admin' ? '/admin' : '/dashboard');
    } else {
      setError(result.error);
    }
  }

  return (
    <div style={{ 
      background: '#0a0e1a', minHeight: '100vh', 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem 1rem',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 30px rgba(14,165,233,0.3)',
            }}>
              <Zap size={26} color="white" />
            </div>
            <div>
              <div style={{ color: '#f0f4f8', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>Upskill Energy</div>
              <div style={{ color: '#8b9cbf', fontSize: '0.8rem' }}>Sign in to your account</div>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="card" style={{ padding: '2rem' }}>
          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: '0.5rem', padding: '0.75rem 1rem', marginBottom: '1.5rem',
              display: 'flex', gap: '0.625rem', alignItems: 'flex-start',
            }}>
              <AlertCircle size={16} color="#f87171" style={{ flexShrink: 0, marginTop: '1px' }} />
              <span style={{ color: '#f87171', fontSize: '0.85rem' }}>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', color: '#c0cce0', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Email address
              </label>
              <input
                type="email"
                className="input-field"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', color: '#c0cce0', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPw ? 'text' : 'password'}
                  className="input-field"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  style={{ paddingRight: '2.75rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  style={{ 
                    position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: '#4a5a78',
                  }}
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.95rem', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Signing in...' : (
                <>
                  <LogIn size={16} />
                  Sign in
                </>
              )}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <span style={{ color: '#8b9cbf', fontSize: '0.85rem' }}>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: '#0ea5e9', textDecoration: 'none', fontWeight: 600 }}>
                Create one free
              </Link>
            </span>
          </div>
        </div>

        {/* Demo credentials hint */}
        <div style={{ 
          marginTop: '1.5rem', padding: '1rem', 
          background: 'rgba(14,165,233,0.05)', 
          border: '1px solid rgba(14,165,233,0.1)',
          borderRadius: '0.5rem',
        }}>
          <div style={{ color: '#0ea5e9', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Demo Accounts
          </div>
          <div style={{ color: '#8b9cbf', fontSize: '0.78rem', lineHeight: 1.8 }}>
            <div><strong style={{ color: '#c0cce0' }}>Student:</strong> calum@upskillenergy.com / Training2026!</div>
            <div><strong style={{ color: '#c0cce0' }}>Admin:</strong> admin@upskillenergy.com / UpskillAdmin2026!</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/" style={{ color: '#4a5a78', fontSize: '0.8rem', textDecoration: 'none' }}>← Back to home</Link>
        </div>
      </div>
    </div>
  );
}
