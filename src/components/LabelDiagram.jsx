import { useState } from 'react';

const COMPONENTS = [
  { id: 1, label: 'Derrick / Drilling Tower', x: 200, y: 60, desc: 'The tall structure supporting drilling equipment above the wellbore' },
  { id: 2, label: 'Helideck', x: 330, y: 55, desc: 'Helicopter landing pad for crew transfer and emergency evacuation' },
  { id: 3, label: 'Flare Stack', x: 390, y: 100, desc: 'Burns off excess gas safely — the signature flame of an offshore platform' },
  { id: 4, label: 'Living Quarters', x: 310, y: 145, desc: 'Accommodation block where offshore crew sleep, eat and rest during their rotation' },
  { id: 5, label: 'Production Deck', x: 200, y: 185, desc: 'Main processing area containing separators, pumps, compressors and control systems' },
  { id: 6, label: 'Subsea Pipeline', x: 95, y: 295, desc: 'Exports oil or gas from the platform to shore or to a tanker loading buoy' },
  { id: 7, label: 'Jacket / Support Structure', x: 200, y: 300, desc: 'The steel lattice structure fixed to the seabed that supports the platform deck' },
  { id: 8, label: 'Conductors / Well Slots', x: 305, y: 295, desc: 'Steel tubes running from deck through jacket to seabed — one per well drilled from the platform' },
];

// Shuffle array deterministically for display
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (i * 7 + 3) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function LabelDiagram() {
  const [revealed, setRevealed] = useState({});
  const [active, setActive] = useState(null);

  const shuffled = shuffle(COMPONENTS);
  const revealedCount = Object.keys(revealed).length;
  const allDone = revealedCount === COMPONENTS.length;

  function toggleHotspot(id) {
    setActive(prev => (prev === id ? null : id));
    setRevealed(prev => ({ ...prev, [id]: true }));
  }

  function reset() {
    setRevealed({});
    setActive(null);
  }

  const activeComp = active ? COMPONENTS.find(c => c.id === active) : null;

  return (
    <div style={{ margin: '2rem 0', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{
        background: '#0d1526', borderRadius: '12px',
        border: '1px solid rgba(59,130,246,0.2)', padding: '1.5rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#3b82f6', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Interactive Exercise
            </div>
            <h3 style={{ color: '#f1f5f9', fontSize: '1rem', fontWeight: 700, margin: 0 }}>
              Identify the Platform Components
            </h3>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: allDone ? '#22c55e' : '#3b82f6', lineHeight: 1 }}>
              {revealedCount}/{COMPONENTS.length}
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>revealed</div>
          </div>
        </div>

        <p style={{ color: '#94a3b8', fontSize: '0.82rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Click the numbered hotspots on the diagram to reveal each component. Match them to the list below.
        </p>

        {/* SVG Diagram */}
        <div style={{ overflowX: 'auto' }}>
          <svg viewBox="0 0 480 380" width="100%" style={{ maxWidth: '480px', display: 'block', margin: '0 auto' }}>
            {/* Sea surface */}
            <defs>
              <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0c2a4a" />
                <stop offset="100%" stopColor="#061524" />
              </linearGradient>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a1628" />
                <stop offset="100%" stopColor="#0f2040" />
              </linearGradient>
            </defs>

            {/* Sky */}
            <rect x="0" y="0" width="480" height="380" fill="url(#sky)" />

            {/* Sea */}
            <rect x="0" y="250" width="480" height="130" fill="url(#sea)" />
            <path d="M0 250 Q60 245 120 250 Q180 255 240 250 Q300 245 360 250 Q420 255 480 250" stroke="#1e4a7a" strokeWidth="1.5" fill="none" />

            {/* Jacket structure */}
            <line x1="150" y1="230" x2="120" y2="340" stroke="#3b82f6" strokeWidth="2.5" />
            <line x1="250" y1="230" x2="280" y2="340" stroke="#3b82f6" strokeWidth="2.5" />
            {/* Cross braces */}
            <line x1="150" y1="255" x2="250" y2="280" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
            <line x1="150" y1="280" x2="250" y2="255" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
            <line x1="130" y1="305" x2="270" y2="320" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
            <line x1="130" y1="320" x2="270" y2="305" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
            {/* Seabed feet */}
            <line x1="110" y1="340" x2="130" y2="340" stroke="#3b82f6" strokeWidth="2" />
            <line x1="270" y1="340" x2="290" y2="340" stroke="#3b82f6" strokeWidth="2" />
            <rect x="110" y="340" width="20" height="6" fill="#3b82f6" opacity="0.5" />
            <rect x="270" y="340" width="20" height="6" fill="#3b82f6" opacity="0.5" />

            {/* Production deck base */}
            <rect x="130" y="200" width="220" height="15" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" rx="2" />

            {/* Production deck modules */}
            <rect x="145" y="165" width="110" height="38" fill="#152a48" stroke="#2563eb" strokeWidth="1" rx="3" />
            <text x="200" y="186" textAnchor="middle" fill="#60a5fa" fontSize="9">Processing</text>
            <text x="200" y="197" textAnchor="middle" fill="#60a5fa" fontSize="9">Equipment</text>

            {/* Living quarters */}
            <rect x="270" y="115" width="80" height="88" fill="#1a3355" stroke="#3b82f6" strokeWidth="1" rx="3" />
            {/* Windows */}
            {[130, 145, 160, 175, 185, 200].map((y, i) => (
              <rect key={i} x={i < 3 ? 278 : 298} y={y} width="8" height="7" fill="#3b82f6" opacity="0.4" rx="1" />
            ))}

            {/* Derrick */}
            <polygon points="175,60 210,60 200,170 185,170" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
            <line x1="175" y1="100" x2="210" y2="100" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
            <line x1="178" y1="130" x2="207" y2="130" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />

            {/* Helideck */}
            <ellipse cx="335" cy="70" rx="40" ry="12" fill="#152a40" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="335" y="74" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">H</text>
            <line x1="295" y1="70" x2="305" y2="115" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="375" y1="70" x2="365" y2="115" stroke="#3b82f6" strokeWidth="1.5" />

            {/* Flare stack */}
            <line x1="400" y1="200" x2="400" y2="80" stroke="#94a3b8" strokeWidth="2.5" />
            <ellipse cx="400" cy="75" rx="6" ry="4" fill="#f59e0b" opacity="0.8" />
            <ellipse cx="400" cy="70" rx="4" ry="5" fill="#ef4444" opacity="0.6" />
            <line x1="370" y1="200" x2="400" y2="200" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Subsea pipeline */}
            <path d="M120 340 Q60 345 20 340" stroke="#60a5fa" strokeWidth="3" fill="none" strokeDasharray="6,3" />
            <text x="65" y="358" textAnchor="middle" fill="#60a5fa" fontSize="8">to shore</text>

            {/* Conductors */}
            <rect x="285" y="200" width="6" height="140" fill="#475569" />
            <rect x="298" y="200" width="6" height="140" fill="#475569" />
            <rect x="311" y="200" width="6" height="140" fill="#475569" />

            {/* Hotspot circles */}
            {COMPONENTS.map(comp => {
              const isRevealed = revealed[comp.id];
              const isActiveNow = active === comp.id;
              return (
                <g key={comp.id} style={{ cursor: 'pointer' }} onClick={() => toggleHotspot(comp.id)}>
                  <circle
                    cx={comp.x}
                    cy={comp.y}
                    r="14"
                    fill={isRevealed ? (isActiveNow ? 'rgba(59,130,246,0.6)' : 'rgba(34,197,94,0.3)') : 'rgba(59,130,246,0.25)'}
                    stroke={isRevealed ? (isActiveNow ? '#3b82f6' : '#22c55e') : '#3b82f6'}
                    strokeWidth="2"
                    style={{ transition: 'all 0.2s' }}
                  />
                  <text
                    x={comp.x}
                    y={comp.y + 5}
                    textAnchor="middle"
                    fill={isRevealed ? '#fff' : '#93c5fd'}
                    fontSize="10"
                    fontWeight="700"
                  >
                    {comp.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Active component info */}
        {activeComp && (
          <div style={{
            margin: '1rem 0',
            padding: '0.875rem 1rem',
            background: 'rgba(59,130,246,0.08)',
            border: '1px solid rgba(59,130,246,0.25)',
            borderRadius: '8px',
            animation: 'fadeIn 0.2s ease',
          }}>
            <div style={{ fontWeight: 700, color: '#60a5fa', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
              {activeComp.id}. {activeComp.label}
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.6 }}>{activeComp.desc}</div>
          </div>
        )}

        {/* Component list */}
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Components to find
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.5rem' }}>
            {shuffled.map(comp => {
              const isRevealed = revealed[comp.id];
              return (
                <div
                  key={comp.id}
                  onClick={() => toggleHotspot(comp.id)}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    background: isRevealed ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isRevealed ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '4px',
                    background: isRevealed ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 700, flexShrink: 0,
                    color: isRevealed ? '#4ade80' : '#64748b',
                  }}>
                    {isRevealed ? '✓' : '?'}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: isRevealed ? '#86efac' : '#94a3b8', lineHeight: 1.3 }}>
                    {isRevealed ? `${comp.id}. ${comp.label}` : comp.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {allDone && (
          <div style={{
            marginTop: '1.25rem', padding: '1rem',
            background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
            borderRadius: '8px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#22c55e', marginBottom: '0.25rem' }}>
              🎉 All {COMPONENTS.length} components identified!
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>You now know the key structural and operational elements of an offshore platform.</div>
            <button
              onClick={reset}
              style={{
                marginTop: '0.75rem', padding: '0.5rem 1rem',
                background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '6px', color: '#4ade80', fontSize: '0.8rem',
                fontWeight: 600, cursor: 'pointer',
              }}
            >
              Reset Exercise
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
