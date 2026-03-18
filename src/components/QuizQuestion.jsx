import { useState, useEffect } from 'react';

export default function QuizQuestion({
  question,
  options,
  selectedIndex,
  onSelect,
  submitted,
  correctIndex,
  questionNumber,
  total,
  explanation,
  onNext,
}) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(false);
    const t = setTimeout(() => setAnimateIn(true), 20);
    return () => clearTimeout(t);
  }, [questionNumber]);

  const isAnswered = selectedIndex !== undefined && selectedIndex !== null;
  const isCorrect = isAnswered && selectedIndex === correctIndex;

  return (
    <div style={{
      opacity: animateIn ? 1 : 0,
      transform: animateIn ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity 0.2s ease, transform 0.2s ease',
    }}>
      {/* Progress indicator */}
      {questionNumber && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '1.25rem',
        }}>
          <span style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
            color: '#3b82f6', textTransform: 'uppercase', fontFamily: 'monospace',
          }}>
            Question {questionNumber} of {total}
          </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} style={{
                width: '20px', height: '4px', borderRadius: '2px',
                background: i < questionNumber
                  ? '#3b82f6'
                  : i === questionNumber - 1
                    ? 'rgba(59,130,246,0.5)'
                    : 'rgba(255,255,255,0.1)',
                transition: 'background 0.2s',
              }} />
            ))}
          </div>
        </div>
      )}

      {/* Question text */}
      <p style={{
        color: '#f1f5f9', fontWeight: 600, fontSize: '1rem',
        lineHeight: 1.65, marginBottom: '1.25rem',
      }}>
        {question}
      </p>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1rem' }}>
        {options.map((opt, i) => {
          const isSelected = selectedIndex === i;
          const isThisCorrect = i === correctIndex;

          let bg = 'rgba(255,255,255,0.03)';
          let border = '1px solid rgba(255,255,255,0.1)';
          let color = '#cbd5e1';
          let badgeBg = 'rgba(255,255,255,0.06)';
          let badgeColor = '#64748b';
          let cursor = isAnswered ? 'default' : 'pointer';
          let icon = null;

          if (!submitted && isSelected) {
            bg = 'rgba(59,130,246,0.12)';
            border = '1px solid rgba(59,130,246,0.5)';
            color = '#f1f5f9';
            badgeBg = 'rgba(59,130,246,0.2)';
            badgeColor = '#93c5fd';
          }

          if (submitted) {
            if (isThisCorrect) {
              bg = 'rgba(34,197,94,0.1)';
              border = '1px solid rgba(34,197,94,0.45)';
              color = '#86efac';
              badgeBg = 'rgba(34,197,94,0.2)';
              badgeColor = '#4ade80';
              icon = '✓';
            } else if (isSelected && !isThisCorrect) {
              bg = 'rgba(239,68,68,0.1)';
              border = '1px solid rgba(239,68,68,0.45)';
              color = '#fca5a5';
              badgeBg = 'rgba(239,68,68,0.2)';
              badgeColor = '#f87171';
              icon = '✗';
            }
          }

          return (
            <button
              key={i}
              onClick={() => !isAnswered && !submitted && onSelect(i)}
              disabled={isAnswered || submitted}
              style={{
                background: bg,
                border,
                borderRadius: '10px',
                padding: '0.875rem 1rem',
                color,
                textAlign: 'left',
                cursor,
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                width: '100%',
                outline: 'none',
              }}
              onMouseEnter={e => {
                if (!isAnswered && !submitted) {
                  e.currentTarget.style.border = '1px solid rgba(59,130,246,0.4)';
                  e.currentTarget.style.background = 'rgba(59,130,246,0.06)';
                }
              }}
              onMouseLeave={e => {
                if (!isAnswered && !submitted && selectedIndex !== i) {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }
              }}
            >
              {/* Letter badge */}
              <span style={{
                width: '28px', height: '28px', borderRadius: '6px',
                background: badgeBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                color: badgeColor, fontFamily: 'monospace',
                transition: 'all 0.2s',
              }}>
                {submitted && icon ? icon : String.fromCharCode(65 + i)}
              </span>
              <span style={{ fontSize: '0.9rem', lineHeight: 1.5, flex: 1 }}>{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Feedback + explanation */}
      {submitted && (
        <div style={{
          padding: '0.875rem 1rem',
          borderRadius: '8px',
          background: isCorrect ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
          border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
          marginBottom: '1rem',
          animation: 'fadeIn 0.2s ease',
        }}>
          <div style={{
            fontWeight: 700, fontSize: '0.875rem',
            color: isCorrect ? '#4ade80' : '#f87171',
            marginBottom: explanation ? '0.375rem' : 0,
          }}>
            {isCorrect ? '✓ Correct!' : `✗ Incorrect — correct answer: ${options[correctIndex]}`}
          </div>
          {explanation && (
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
              {explanation}
            </div>
          )}
        </div>
      )}

      {/* Next button (in-module quiz mode) */}
      {submitted && onNext && (
        <button
          onClick={onNext}
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            border: 'none', borderRadius: '8px',
            padding: '0.625rem 1.25rem', color: '#fff',
            fontWeight: 600, fontSize: '0.875rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}
        >
          Next Question →
        </button>
      )}
    </div>
  );
}
