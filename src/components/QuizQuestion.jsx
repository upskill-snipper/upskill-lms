export default function QuizQuestion({ question, options, selectedIndex, onSelect, submitted, correctIndex, questionNumber, total }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {questionNumber && (
        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem', fontWeight: 600 }}>
          QUESTION {questionNumber} OF {total}
        </div>
      )}
      <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.6 }}>{question}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {options.map((opt, i) => {
          let bg = 'rgba(255,255,255,0.03)';
          let border = '1px solid #1e2d4a';
          let color = '#cbd5e1';
          let cursor = 'pointer';

          if (selectedIndex === i && !submitted) {
            bg = 'rgba(59,130,246,0.15)';
            border = '1px solid #3b82f6';
            color = '#f1f5f9';
          }

          if (submitted) {
            cursor = 'default';
            if (i === correctIndex) {
              bg = 'rgba(34,197,94,0.15)';
              border = '1px solid #22c55e';
              color = '#4ade80';
            } else if (selectedIndex === i && i !== correctIndex) {
              bg = 'rgba(239,68,68,0.15)';
              border = '1px solid #ef4444';
              color = '#f87171';
            }
          }

          return (
            <button
              key={i}
              onClick={() => !submitted && onSelect(i)}
              disabled={submitted}
              style={{
                background: bg,
                border,
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                color,
                textAlign: 'left',
                cursor,
                transition: 'all 0.15s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: `2px solid ${border.split(' ')[2]}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                flexShrink: 0,
                color: 'inherit',
              }}>
                {String.fromCharCode(65 + i)}
              </span>
              <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{opt}</span>
            </button>
          );
        })}
      </div>
      {submitted && (
        <div style={{
          marginTop: '0.75rem',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          background: selectedIndex === correctIndex ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
          color: selectedIndex === correctIndex ? '#4ade80' : '#f87171',
          fontSize: '0.875rem',
          fontWeight: 600,
        }}>
          {selectedIndex === correctIndex ? '✓ Correct!' : `✗ Incorrect — the correct answer is: ${options[correctIndex]}`}
        </div>
      )}
    </div>
  );
}
