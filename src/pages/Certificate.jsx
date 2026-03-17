import { useParams, Link } from 'react-router-dom';
import { Award, Download, Home, Share2, Zap } from 'lucide-react';
import { getUsers } from '../utils/auth';
import COURSES from '../data/courseData';

export default function Certificate() {
  const { certId } = useParams();

  // Find the certificate across all users
  const users = getUsers();
  let certUser = null;
  let cert = null;
  for (const u of users) {
    const c = (u.certificates || []).find(c => c.id === certId);
    if (c) { certUser = u; cert = c; break; }
  }

  if (!certUser || !cert) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Award size={64} color="#4a5a78" strokeWidth={1} style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ marginBottom: '0.5rem' }}>Certificate not found</h2>
          <p style={{ color: '#8b9cbf', marginBottom: '1.5rem' }}>This certificate ID doesn't exist or has been removed.</p>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
            <Home size={14} /> Go home
          </Link>
        </div>
      </div>
    );
  }

  const course = COURSES.find(c => c.id === cert.courseId);
  const issueDate = new Date(cert.issuedAt);
  const dateStr = issueDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const verifyUrl = `training.upskillenergy.com/verify/${certId}`;

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8', padding: '2rem 1rem' }}>
      {/* Controls - no print */}
      <div className="no-print" style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f0f4f8' }}>Certificate of Completion</div>
          <div style={{ color: '#8b9cbf', fontSize: '0.82rem' }}>Certificate ID: {certId}</div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn-secondary" onClick={() => window.print()}>
            <Download size={14} /> Print / Save PDF
          </button>
          <Link to="/dashboard" className="btn-ghost" style={{ textDecoration: 'none' }}>
            <Home size={14} /> Dashboard
          </Link>
        </div>
      </div>

      {/* Certificate */}
      <div className="certificate-page" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header bar */}
        <div style={{ 
          background: '#0a0e1a', padding: '2.5rem 3rem', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Zap size={24} color="white" />
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.02em', fontFamily: 'Georgia, serif' }}>
                UPSKILL ENERGY
              </div>
              <div style={{ color: '#0ea5e9', fontSize: '0.72rem', letterSpacing: '0.2em', fontFamily: 'sans-serif', fontWeight: 600 }}>
                PROFESSIONAL TRAINING DIVISION
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'Georgia, serif' }}>
            <div style={{ color: '#0ea5e9', fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>CERTIFICATE OF COMPLETION</div>
            <div style={{ color: '#8b9cbf', fontSize: '0.7rem' }}>Issued {dateStr}</div>
          </div>
        </div>

        {/* Main certificate body */}
        <div style={{ 
          padding: '3rem',
          background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)',
          borderTop: '4px solid #0ea5e9',
          borderBottom: '4px solid #0ea5e9',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif', 
              fontSize: '0.9rem', color: '#64748b', letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '0.75rem',
            }}>
              This is to certify that
            </div>
            <div style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '2.5rem', fontWeight: 700, color: '#0a0e1a',
              borderBottom: '2px solid #0ea5e9', paddingBottom: '0.5rem',
              display: 'inline-block', marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}>
              {certUser.name}
            </div>
            <div style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '0.9rem', color: '#64748b', letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '0.5rem',
            }}>
              has successfully completed
            </div>
            <div style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '1.75rem', fontWeight: 700, color: '#0a1628',
              letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: '0.5rem',
            }}>
              {course?.title}
            </div>
            <div style={{ color: '#0ea5e9', fontFamily: 'sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              {course?.level} Level · {course?.duration}
            </div>
          </div>

          {/* Score and details */}
          <div style={{ 
            display: 'flex', justifyContent: 'space-around', alignItems: 'center',
            padding: '1.5rem', background: '#f1f5f9',
            borderRadius: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem',
          }}>
            {[
              { label: 'Assessment Score', value: `${cert.score}%`, color: '#22c55e' },
              { label: 'Status', value: 'PASSED', color: '#0ea5e9' },
              { label: 'Issue Date', value: dateStr, color: '#0a1628' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 700, color: item.color }}>{item.value}</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* Signature area */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ 
                fontFamily: '"Brush Script MT", cursive, Georgia, serif',
                fontSize: '2.5rem', color: '#0a1628', marginBottom: '0.25rem',
              }}>
                Upskill Energy
              </div>
              <div style={{ width: '180px', borderTop: '1.5px solid #94a3b8' }} />
              <div style={{ fontFamily: 'sans-serif', fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                TRAINING DIVISION DIRECTOR
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ 
                fontFamily: 'monospace', fontSize: '0.7rem', color: '#94a3b8',
                marginBottom: '0.25rem',
              }}>
                Certificate ID
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.72rem', color: '#475569', letterSpacing: '0.05em' }}>
                {certId}
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: '#0ea5e9', marginTop: '0.375rem' }}>
                Verify: {verifyUrl}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          background: '#0a0e1a', padding: '1.25rem 3rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <div style={{ fontFamily: 'sans-serif', fontSize: '0.68rem', color: '#4a5a78', letterSpacing: '0.05em' }}>
            This certificate verifies successful completion of Upskill Energy professional training.
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: '#0ea5e9' }}>
            training.upskillenergy.com
          </div>
        </div>
      </div>
    </div>
  );
}
