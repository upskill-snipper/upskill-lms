import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Award, AlertCircle, CheckCircle, RotateCcw, Home, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress, saveAssessmentResult } from '../utils/auth';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Assessment() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const course = COURSES.find(c => c.id === courseId);
  const progress = user ? getUserProgress(user.id, courseId) : null;

  const [questions] = useState(() => {
    if (!course?.assessment?.length) return [];
    const pool = shuffleArray(course.assessment);
    return pool.slice(0, Math.min(20, pool.length));
  });

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});          // qIndex → optIndex
  const [answeredAt, setAnsweredAt] = useState({});    // qIndex → timestamp (for feedback display)
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [cert, setCert] = useState(null);
  const [animating, setAnimating] = useState(false);

  const PASS_SCORE = 70;
  const totalModules = course?.moduleList?.length || 0;
  const completedModules = progress?.completedModules?.length || 0;
  const allModulesDone = completedModules >= totalModules && totalModules > 0;

  if (!course) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
        <Navbar />
        <div style={{ padding: '4rem', textAlign: 'center' }}>Course not found</div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
        <Navbar />
        <div style={{ maxWidth: '700px', margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <AlertCircle size={48} color="#f59e0b" style={{ marginBottom: '1rem' }} />
          <h2>Assessment Not Available</h2>
          <p style={{ color: '#8b9cbf' }}>This course doesn't have an assessment configured yet.</p>
          <Link to="/dashboard" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', marginTop: '1.5rem' }}>
            Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  function handleAnswer(optIdx) {
    if (submitted || answers[currentQ] !== undefined || animating) return;

    setAnswers(prev => ({ ...prev, [currentQ]: optIdx }));
    setAnsweredAt(prev => ({ ...prev, [currentQ]: Date.now() }));

    // Auto-advance after 1.2 seconds
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      if (currentQ < questions.length - 1) {
        setCurrentQ(q => q + 1);
      }
    }, 1200);
  }

  function handleSubmit() {
    if (submitted) return;
    const score = Math.round(
      questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0) /
      questions.length * 100
    );
    const passed = score >= PASS_SCORE;
    setSubmitted(true);
    setResult({ score, passed });
    const certificate = saveAssessmentResult(user.id, courseId, score, passed, totalModules);
    if (certificate) setCert(certificate);
  }

  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;
  const answeredCount = Object.keys(answers).length;
  const isLastQ = currentQ === questions.length - 1;

  // ─── Results Screen ───────────────────────────────────────────────────
  if (submitted && result) {
    const correctCount = questions.filter((q, i) => answers[i] === q.correct).length;
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
        <Navbar />
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* Result card */}
          <div style={{
            background: result.passed
              ? 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.04))'
              : 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.04))',
            border: `1px solid ${result.passed ? 'rgba(34,197,94,0.25)' : 'rgba(245,158,11,0.25)'}`,
            borderRadius: '16px', padding: '2.5rem 2rem', textAlign: 'center', marginBottom: '2rem',
          }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: result.passed ? 'rgba(34,197,94,0.15)' : 'rgba(245,158,11,0.15)',
              border: `2px solid ${result.passed ? 'rgba(34,197,94,0.3)' : 'rgba(245,158,11,0.3)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
            }}>
              {result.passed
                ? <Award size={38} color="#22c55e" />
                : <RotateCcw size={38} color="#f59e0b" />
              }
            </div>

            <h1 style={{
              fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem',
              color: result.passed ? '#22c55e' : '#f59e0b',
            }}>
              {result.passed ? '🎉 You Passed!' : 'Not Quite There Yet'}
            </h1>

            <div style={{
              fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.04em',
              color: result.passed ? '#22c55e' : '#f59e0b', lineHeight: 1, margin: '0.5rem 0',
            }}>
              {result.score}%
            </div>

            <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
              {correctCount} / {questions.length} correct · Pass mark: {PASS_SCORE}%
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '460px', margin: '0 auto' }}>
              {result.passed
                ? `You've passed the ${course.title} assessment. Your certificate is ready.`
                : `You needed ${PASS_SCORE}% to pass. Review the course material and try again when ready.`
              }
            </p>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {result.passed && cert && (
              <Link to={`/certificate/${cert.id}`} className="btn-primary" style={{ textDecoration: 'none' }}>
                <Award size={15} /> View Certificate
              </Link>
            )}
            {!result.passed && (
              <button className="btn-primary" onClick={() => {
                setSubmitted(false); setResult(null);
                setAnswers({}); setAnsweredAt({}); setCurrentQ(0);
              }}>
                <RotateCcw size={15} /> Retake Assessment
              </button>
            )}
            <Link to="/dashboard" className="btn-ghost" style={{ textDecoration: 'none' }}>
              <Home size={15} /> Dashboard
            </Link>
          </div>

          {/* Answer review */}
          <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '1rem', color: '#f0f4f8' }}>Answer Review</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {questions.map((q, i) => {
              const userAns = answers[i];
              const correct = userAns === q.correct;
              return (
                <div key={i} style={{
                  background: '#0d1526',
                  border: `1px solid ${correct ? 'rgba(34,197,94,0.15)' : 'rgba(245,158,11,0.15)'}`,
                  borderRadius: '10px', padding: '1rem',
                }}>
                  <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div style={{ flexShrink: 0, marginTop: '2px' }}>
                      {correct
                        ? <CheckCircle size={14} color="#22c55e" />
                        : <AlertCircle size={14} color="#f59e0b" />
                      }
                    </div>
                    <p style={{ color: '#c0cce0', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                      <strong>Q{i + 1}.</strong> {q.question}
                    </p>
                  </div>
                  <div style={{ paddingLeft: '1.375rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    {!correct && (
                      <div style={{ fontSize: '0.75rem', color: '#f87171' }}>
                        Your answer: {q.options[userAns] ?? 'Not answered'}
                      </div>
                    )}
                    <div style={{ fontSize: '0.75rem', color: '#4ade80' }}>
                      ✓ {q.options[q.correct]}
                    </div>
                    {q.explanation && (
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem', lineHeight: 1.5 }}>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ─── Assessment in progress ───────────────────────────────────────────
  const q = questions[currentQ];
  const currentAnswer = answers[currentQ];
  const isAnswered = currentAnswer !== undefined;
  const isCorrect = currentAnswer === q.correct;

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '2rem 1rem 3rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div className="label-mono" style={{ color: '#0ea5e9', marginBottom: '0.375rem', fontSize: '0.62rem' }}>
            Final Assessment
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.375rem' }}>{course.title}</h1>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
            {questions.length} questions · {PASS_SCORE}% to pass
          </p>

          {!allModulesDone && (
            <div style={{
              marginTop: '0.875rem', padding: '0.75rem 1rem',
              background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '8px', display: 'flex', gap: '0.5rem', alignItems: 'center',
            }}>
              <AlertCircle size={13} color="#f59e0b" style={{ flexShrink: 0 }} />
              <span style={{ color: '#fbbf24', fontSize: '0.78rem' }}>
                {completedModules}/{totalModules} modules completed — we recommend finishing all modules first.
              </span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.78rem', color: '#64748b' }}>
            <span style={{ color: '#f0f4f8', fontWeight: 600 }}>Question {currentQ + 1} <span style={{ color: '#64748b', fontWeight: 400 }}>of {questions.length}</span></span>
            <span>{answeredCount} answered</span>
          </div>
          {/* Segmented progress */}
          <div style={{ display: 'flex', gap: '3px' }}>
            {questions.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentQ(i)}
                style={{
                  flex: 1, height: '5px', borderRadius: '3px', cursor: 'pointer',
                  background: i === currentQ
                    ? '#0ea5e9'
                    : answers[i] !== undefined
                      ? (answers[i] === questions[i].correct ? 'rgba(34,197,94,0.6)' : 'rgba(245,158,11,0.5)')
                      : 'rgba(255,255,255,0.08)',
                  transition: 'background 0.2s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Question card */}
        <div style={{
          background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '14px', padding: '2rem', marginBottom: '1.25rem',
          transition: 'border-color 0.3s',
          borderColor: isAnswered
            ? (isCorrect ? 'rgba(34,197,94,0.25)' : 'rgba(245,158,11,0.25)')
            : 'rgba(255,255,255,0.07)',
        }}>
          <p style={{ color: '#f0f4f8', fontSize: '1.05rem', lineHeight: 1.65, fontWeight: 500, marginBottom: '1.5rem' }}>
            {q.question}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {q.options.map((opt, oi) => {
              const isSelected = currentAnswer === oi;
              const isThisCorrect = oi === q.correct;

              let bg = 'rgba(255,255,255,0.03)';
              let border = '1px solid rgba(255,255,255,0.1)';
              let color = '#cbd5e1';
              let badgeBg = 'rgba(255,255,255,0.06)';
              let badgeColor = '#64748b';
              let icon = String.fromCharCode(65 + oi);

              if (!isAnswered && !animating) {
                // hover handled via onMouseEnter/Leave
              }

              if (isAnswered) {
                if (isThisCorrect) {
                  bg = 'rgba(34,197,94,0.1)'; border = '1px solid rgba(34,197,94,0.4)';
                  color = '#86efac'; badgeBg = 'rgba(34,197,94,0.2)'; badgeColor = '#4ade80'; icon = '✓';
                } else if (isSelected) {
                  bg = 'rgba(245,158,11,0.1)'; border = '1px solid rgba(245,158,11,0.4)';
                  color = '#fde68a'; badgeBg = 'rgba(245,158,11,0.2)'; badgeColor = '#fbbf24'; icon = '✗';
                }
              }

              return (
                <button
                  key={oi}
                  onClick={() => handleAnswer(oi)}
                  disabled={isAnswered || animating}
                  style={{
                    background: bg, border, borderRadius: '10px',
                    padding: '0.875rem 1rem', color,
                    textAlign: 'left', cursor: (isAnswered || animating) ? 'default' : 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    width: '100%', outline: 'none',
                  }}
                  onMouseEnter={e => {
                    if (!isAnswered && !animating) {
                      e.currentTarget.style.border = '1px solid rgba(59,130,246,0.4)';
                      e.currentTarget.style.background = 'rgba(59,130,246,0.07)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isAnswered && !animating) {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    }
                  }}
                >
                  <span style={{
                    width: '28px', height: '28px', borderRadius: '6px', background: badgeBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                    color: badgeColor, fontFamily: 'monospace', transition: 'all 0.2s',
                  }}>
                    {icon}
                  </span>
                  <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Inline feedback */}
          {isAnswered && (
            <div style={{
              marginTop: '1rem', padding: '0.75rem 1rem', borderRadius: '8px',
              background: isCorrect ? 'rgba(34,197,94,0.08)' : 'rgba(245,158,11,0.08)',
              border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.2)' : 'rgba(245,158,11,0.2)'}`,
              animation: 'fadeIn 0.2s ease',
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: isCorrect ? '#4ade80' : '#fbbf24', marginBottom: q.explanation ? '0.3rem' : 0 }}>
                {isCorrect ? '✓ Correct!' : `✗ The correct answer was: ${q.options[q.correct]}`}
              </div>
              {q.explanation && (
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>{q.explanation}</div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <button
            className="btn-ghost"
            disabled={currentQ === 0}
            onClick={() => setCurrentQ(q => Math.max(0, q - 1))}
            style={{ opacity: currentQ === 0 ? 0.3 : 1 }}
          >
            ← Back
          </button>

          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                style={{
                  width: '26px', height: '26px', borderRadius: '5px',
                  border: 'none', cursor: 'pointer', transition: 'all 0.15s',
                  background: i === currentQ
                    ? '#0ea5e9'
                    : answers[i] !== undefined
                      ? (answers[i] === questions[i].correct ? 'rgba(34,197,94,0.4)' : 'rgba(245,158,11,0.35)')
                      : 'rgba(255,255,255,0.07)',
                  fontSize: '0.65rem', fontWeight: 700,
                  color: i === currentQ ? 'white' : '#94a3b8',
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {isLastQ && isAnswered ? (
            <button
              className="btn-primary"
              disabled={!allAnswered}
              onClick={handleSubmit}
              style={{
                opacity: allAnswered ? 1 : 0.5,
                background: allAnswered ? 'linear-gradient(135deg, #22c55e, #16a34a)' : undefined,
              }}
            >
              <Award size={14} /> Submit
            </button>
          ) : (
            <button
              className="btn-ghost"
              disabled={currentQ >= questions.length - 1}
              onClick={() => setCurrentQ(q => Math.min(questions.length - 1, q + 1))}
              style={{ opacity: currentQ >= questions.length - 1 ? 0.3 : 1 }}
            >
              Next <ChevronRight size={14} />
            </button>
          )}
        </div>

        {/* Submit early if all answered */}
        {allAnswered && !isLastQ && (
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <button
              className="btn-primary"
              onClick={handleSubmit}
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
            >
              <Award size={14} /> All answered — Submit Assessment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
