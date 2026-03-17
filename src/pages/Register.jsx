import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, UserPlus, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { register } from '../utils/auth';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const pwStrength = password.length === 0 ? 0 : password.length < 8 ? 1 : password.length < 12 ? 2 : 3;
  const pwColors = ['transparent', '#ef4444', '#f59e0b', '#22c55e'];
  const pwLabels = ['', 'Too short', 'Good', 'Strong'];

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 500));
    const result = register(name, email, password);
    setLoading(false);
    if (result.success) {
      navigate('/dashboard');
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
      <div style={{ width: '100%', maxWidth: '440px' }}>
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
              <div style={{ color: '#f0f4f8', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>Create your account</div>
              <div style={{ color: '#8b9cbf', fontSize: '0.8rem' }}>Join thousands of energy professionals</div>
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
                Full name
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                autoFocus
              />
            </div>

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
                  placeholder="At least 8 characters"
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
              {password.length > 0 && (
                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '0.25rem' }}>
                    {[1,2,3].map(i => (
                      <div key={i} style={{ 
                        flex: 1, height: '3px', borderRadius: '2px',
                        background: pwStrength >= i ? pwColors[pwStrength] : 'rgba(255,255,255,0.08)',
                        transition: 'background 0.2s',
                      }} />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.72rem', color: pwColors[pwStrength] }}>{pwLabels[pwStrength]}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.95rem', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Creating account...' : (
                <>
                  <UserPlus size={16} />
                  Create account
                </>
              )}
            </button>
          </form>

          {/* Perks */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Free to register, access Foundation module previews', 'Progress saved automatically', 'Certificates on course completion'].map((perk, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <CheckCircle size={13} color="#22c55e" />
                <span style={{ color: '#8b9cbf', fontSize: '0.78rem' }}>{perk}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <span style={{ color: '#8b9cbf', fontSize: '0.85rem' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#0ea5e9', textDecoration: 'none', fontWeight: 600 }}>
                Sign in
              </Link>
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/" style={{ color: '#4a5a78', fontSize: '0.8rem', textDecoration: 'none' }}>← Back to home</Link>
        </div>
      </div>
    </div>
  );
}
