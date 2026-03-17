import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Award, AlertCircle, CheckCircle, Clock, RotateCcw, Home } from 'lucide-react';
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

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [cert, setCert] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);

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

  function handleAnswer(qIdx, optIdx) {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  }

  function handleSubmit() {
    if (!submitted) {
      const score = Math.round(questions.reduce((acc, q, i) => {
        return acc + (answers[i] === q.correct ? 1 : 0);
      }, 0) / questions.length * 100);
      const passed = score >= PASS_SCORE;
      setSubmitted(true);
      setResult({ score, passed });
      const certificate = saveAssessmentResult(user.id, courseId, score, passed, totalModules);
      if (certificate) setCert(certificate);
    }
  }

  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;
  const answeredCount = Object.keys(answers).length;

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

  // Results screen
  if (submitted && result) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
        <Navbar />
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          {/* Result card */}
          <div style={{
            background: result.passed ? 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.03))' : 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.03))',
            border: `1px solid ${result.passed ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
            borderRadius: '1rem', padding: '3rem 2rem', textAlign: 'center', marginBottom: '2rem',
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              {result.passed ? (
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
                }}>
                  <Award size={40} color="#22c55e" />
                </div>
              ) : (
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'rgba(239,68,68,0.15)', border: '2px solid rgba(239,68,68,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
                }}>
                  <RotateCcw size={40} color="#ef4444" />
                </div>
              )}
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: result.passed ? '#22c55e' : '#f87171' }}>
              {result.passed ? '🎉 Congratulations!' : 'Not quite there'}
            </h1>
            <div style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-0.04em', color: result.passed ? '#22c55e' : '#f87171', lineHeight: 1 }}>
              {result.score}%
            </div>
            <div style={{ color: '#8b9cbf', fontSize: '0.9rem', marginTop: '0.75rem' }}>
              {questions.filter((q, i) => answers[i] === q.correct).length} / {questions.length} correct · Pass mark: {PASS_SCORE}%
            </div>
            <p style={{ color: '#c0cce0', marginTop: '1rem', fontSize: '0.95rem' }}>
              {result.passed 
                ? `You have passed the ${course.title} assessment. Your certificate has been issued.`
                : `You needed ${PASS_SCORE}% to pass. Review the course material and try again.`
              }
            </p>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {result.passed && cert && (
              <Link to={`/certificate/${cert.id}`} className="btn-primary" style={{ textDecoration: 'none' }}>
                <Award size={16} /> View Certificate
              </Link>
            )}
            {!result.passed && (
              <button className="btn-primary" onClick={() => { setSubmitted(false); setResult(null); setAnswers({}); setCurrentQ(0); }}>
                <RotateCcw size={16} /> Retake Assessment
              </button>
            )}
            <Link to="/dashboard" className="btn-ghost" style={{ textDecoration: 'none' }}>
              <Home size={16} /> Dashboard
            </Link>
          </div>

          {/* Answer review */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.25rem', color: '#f0f4f8' }}>Answer Review</h3>
            {questions.map((q, i) => {
              const userAns = answers[i];
              const correct = userAns === q.correct;
              return (
                <div key={i} style={{
                  background: '#0d1526', border: `1px solid ${correct ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'}`,
                  borderRadius: '0.625rem', padding: '1rem', marginBottom: '0.75rem',
                }}>
                  <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ flexShrink: 0, marginTop: '2px' }}>
                      {correct ? <CheckCircle size={15} color="#22c55e" /> : <RotateCcw size={15} color="#ef4444" />}
                    </div>
                    <p style={{ color: '#c0cce0', fontSize: '0.875rem', lineHeight: 1.5 }}>
                      <strong>Q{i+1}.</strong> {q.question}
                    </p>
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    {!correct && (
                      <div style={{ fontSize: '0.78rem', color: '#f87171', marginBottom: '0.25rem' }}>
                        Your answer: {q.options[userAns] ?? 'Not answered'}
                      </div>
                    )}
                    <div style={{ fontSize: '0.78rem', color: '#4ade80' }}>
                      ✓ Correct: {q.options[q.correct]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Assessment in progress
  const q = questions[currentQ];

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="label-mono" style={{ color: '#0ea5e9', marginBottom: '0.375rem' }}>Final Assessment</div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>{course.title}</h1>
          <p style={{ color: '#8b9cbf', fontSize: '0.85rem' }}>
            {questions.length} questions · {PASS_SCORE}% to pass · Questions selected from a pool of {course.assessment.length}
          </p>

          {!allModulesDone && (
            <div style={{ 
              marginTop: '1rem', padding: '0.875rem 1rem',
              background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '0.5rem', display: 'flex', gap: '0.625rem', alignItems: 'flex-start',
            }}>
              <AlertCircle size={15} color="#f59e0b" style={{ flexShrink: 0, marginTop: '1px' }} />
              <span style={{ color: '#fbbf24', fontSize: '0.82rem' }}>
                You haven't completed all modules yet ({completedModules}/{totalModules}). We recommend completing all modules before taking the assessment.
              </span>
            </div>
          )}
        </div>

        {/* Progress */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.82rem', color: '#8b9cbf' }}>
            <span>Question {currentQ + 1} of {questions.length}</span>
            <span>{answeredCount} answered</span>
          </div>
          <div className="progress-track" style={{ height: '4px' }}>
            <div className="progress-fill" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
          </div>
        </div>

        {/* Question */}
        <div style={{
          background: '#0d1526', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '0.875rem', padding: '2rem', marginBottom: '1.5rem',
        }}>
          <div className="label-mono" style={{ color: '#0ea5e9', marginBottom: '1rem', fontSize: '0.62rem' }}>
            Question {currentQ + 1}
          </div>
          <p style={{ color: '#f0f4f8', fontSize: '1rem', lineHeight: 1.65, fontWeight: 500, marginBottom: '1.5rem' }}>
            {q.question}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                className={`quiz-option ${answers[currentQ] === oi ? 'selected' : ''}`}
                onClick={() => handleAnswer(currentQ, oi)}
                style={{ textAlign: 'left', padding: '0.875rem 1rem' }}
              >
                <span style={{ 
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '24px', height: '24px', borderRadius: '50%', 
                  background: answers[currentQ] === oi ? 'rgba(14,165,233,0.2)' : 'rgba(255,255,255,0.05)',
                  fontSize: '0.72rem', fontWeight: 700, marginRight: '0.875rem', flexShrink: 0,
                  fontFamily: 'monospace', color: answers[currentQ] === oi ? '#0ea5e9' : '#8b9cbf',
                  border: `1px solid ${answers[currentQ] === oi ? 'rgba(14,165,233,0.4)' : 'rgba(255,255,255,0.1)'}`,
                }}>
                  {String.fromCharCode(65 + oi)}
                </span>
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            className="btn-ghost"
            disabled={currentQ === 0}
            onClick={() => setCurrentQ(q => Math.max(0, q - 1))}
            style={{ opacity: currentQ === 0 ? 0.3 : 1 }}
          >
            ← Previous
          </button>

          {/* Question dots */}
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '400px' }}>
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                style={{
                  width: '24px', height: '24px', borderRadius: '4px', border: 'none', cursor: 'pointer',
                  background: i === currentQ ? '#0ea5e9' : answers[i] !== undefined ? 'rgba(14,165,233,0.3)' : 'rgba(255,255,255,0.08)',
                  fontSize: '0.65rem', fontWeight: 700, color: i === currentQ ? 'white' : '#8b9cbf',
                  transition: 'all 0.15s',
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {currentQ < questions.length - 1 ? (
            <button className="btn-primary" onClick={() => setCurrentQ(q => q + 1)}>
              Next →
            </button>
          ) : (
            <button
              className="btn-primary"
              disabled={!allAnswered}
              onClick={handleSubmit}
              style={{ 
                opacity: allAnswered ? 1 : 0.5,
                background: allAnswered ? 'linear-gradient(135deg, #22c55e, #16a34a)' : undefined,
              }}
            >
              <Award size={16} /> Submit Assessment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
