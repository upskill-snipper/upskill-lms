export default function Badge({ label, variant = 'default', size = 'sm' }) {
  const variants = {
    default: { background: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.3)' },
    foundation: { background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' },
    intermediate: { background: 'rgba(245,158,11,0.15)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.3)' },
    advanced: { background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' },
    success: { background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' },
    warning: { background: 'rgba(245,158,11,0.15)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.3)' },
    danger: { background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' },
    purple: { background: 'rgba(168,85,247,0.15)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.3)' },
    cyan: { background: 'rgba(6,182,212,0.15)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.3)' },
  };

  const style = variants[variant.toLowerCase()] || variants.default;
  const fontSize = size === 'xs' ? '0.65rem' : size === 'sm' ? '0.75rem' : '0.875rem';
  const padding = size === 'xs' ? '2px 6px' : size === 'sm' ? '3px 8px' : '4px 12px';

  return (
    <span style={{
      ...style,
      fontSize,
      fontWeight: 600,
      padding,
      borderRadius: '4px',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      letterSpacing: '0.02em',
    }}>
      {label}
    </span>
  );
}
