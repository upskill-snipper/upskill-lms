import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle, Circle, Award, BookOpen, Menu, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import LabelDiagram from '../components/LabelDiagram';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress, markModuleComplete, enrollUser } from '../utils/auth';

export default function CoursePlayer() {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const course = COURSES.find(c => c.id === courseId);
  const module = course?.moduleList?.find(m => m.id === moduleId);

  // Quiz state: per question selection + submitted flag
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Mobile sidebar drawer
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    function handleClick(e) {
      if (sidebarOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [sidebarOpen]);

  const progress = user ? getUserProgress(user.id, courseId) : null;

  useEffect(() => {
    if (user && course && !(user.enrolledCourses || []).includes(courseId)) {
      enrollUser(user.id, courseId);
    }
  }, [user, course, courseId]);

  useEffect(() => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [moduleId]);

  if (!course || !module) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
        <Navbar />
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Module not found</h2>
          <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', marginTop: '1rem' }}>
            Browse courses
          </Link>
        </div>
      </div>
    );
  }

  const moduleIndex = course.moduleList.findIndex(m => m.id === moduleId);
  const prevModule = moduleIndex > 0 ? course.moduleList[moduleIndex - 1] : null;
  const nextModule = moduleIndex < course.moduleList.length - 1 ? course.moduleList[moduleIndex + 1] : null;
  const isLastModule = moduleIndex === course.moduleList.length - 1;

  const quiz = module.quiz || [];
  const correctAnswers = quiz.filter(q => quizAnswers[q.id] === q.correct);
  const quizScore = quiz.length > 0 ? Math.round((correctAnswers.length / quiz.length) * 100) : 100;
  const quizAllAnswered = quiz.length === 0 || quiz.every(q => quizAnswers[q.id] !== undefined);

  function handleNext() {
    if (user) {
      markModuleComplete(user.id, courseId, moduleId, quiz.length > 0 ? quizScore : undefined);
    }
    if (nextModule) {
      navigate(`/learn/${courseId}/module/${nextModule.id}`);
    } else if (isLastModule) {
      navigate(`/learn/${courseId}/assessment`);
    }
  }

  const currentModuleDone = progress?.completedModules?.includes(moduleId);
  const completedCount = progress?.completedModules?.length || 0;

  // ── Sidebar content (shared between desktop and drawer) ──────────────
  function SidebarContent() {
    return (
      <>
        <div style={{ padding: '0 1.25rem', marginBottom: '1.25rem' }}>
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              style={{ background: 'none', border: 'none', color: '#8b9cbf', cursor: 'pointer', float: 'right', padding: '0.25rem' }}
            >
              <X size={18} />
            </button>
          )}
          <Link
            to={`/course/${courseId}`}
            style={{ color: '#8b9cbf', fontSize: '0.78rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.375rem' }}
          >
            <ChevronLeft size={13} /> Back to course
          </Link>
          <h2 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f0f4f8', marginTop: '0.75rem', lineHeight: 1.3 }}>
            {course.title}
          </h2>
          <div style={{ marginTop: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem', fontSize: '0.72rem', color: '#8b9cbf' }}>
              <span>{completedCount}/{course.moduleList.length} modules</span>
              <span>{Math.round((completedCount / course.moduleList.length) * 100)}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${Math.round((completedCount / course.moduleList.length) * 100)}%` }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
          {course.moduleList.map((m, i) => {
            const done = progress?.completedModules?.includes(m.id);
            const active = m.id === moduleId;
            return (
              <Link
                key={m.id}
                to={`/learn/${courseId}/module/${m.id}`}
                style={{ textDecoration: 'none' }}
                onClick={() => isMobile && setSidebarOpen(false)}
              >
                <div style={{
                  padding: '0.625rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center',
                  background: active ? 'rgba(14,165,233,0.08)' : 'transparent',
                  borderLeft: `2px solid ${active ? '#0ea5e9' : 'transparent'}`,
                }}>
                  <div style={{ flexShrink: 0, color: done ? '#22c55e' : active ? '#0ea5e9' : '#4a5a78' }}>
                    {done ? <CheckCircle size={15} /> : <Circle size={15} />}
                  </div>
                  <div>
                    <div style={{
                      color: active ? '#f0f4f8' : done ? '#c0cce0' : '#8b9cbf',
                      fontSize: '0.8rem', lineHeight: 1.3, fontWeight: active ? 600 : 400,
                    }}>
                      {i + 1}. {m.title}
                    </div>
                    <div style={{ color: '#4a5a78', fontSize: '0.68rem' }}>{m.duration}</div>
                  </div>
                </div>
              </Link>
            );
          })}
          <Link
            to={`/learn/${courseId}/assessment`}
            style={{ textDecoration: 'none' }}
            onClick={() => isMobile && setSidebarOpen(false)}
          >
            <div style={{ padding: '0.625rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Award size={15} color={progress?.assessmentPassed ? '#22c55e' : '#4a5a78'} />
              <div style={{ color: '#8b9cbf', fontSize: '0.8rem' }}>Final Assessment</div>
            </div>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />

      {/* Mobile overlay backdrop */}
      {isMobile && sidebarOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            zIndex: 49, backdropFilter: 'blur(2px)',
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Desktop sidebar */}
      {!isMobile && (
        <aside style={{
          width: '260px',
          background: '#0d1526',
          borderRight: '1px solid rgba(255,255,255,0.07)',
          padding: '1.5rem 0',
          position: 'fixed',
          top: '64px',
          left: 0,
          height: 'calc(100vh - 64px)',
          overflowY: 'auto',
          zIndex: 10,
        }}>
          <SidebarContent />
        </aside>
      )}

      {/* Mobile drawer */}
      {isMobile && (
        <aside
          ref={drawerRef}
          style={{
            width: '280px',
            background: '#0d1526',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            padding: '1.5rem 0',
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            overflowY: 'auto',
            zIndex: 50,
            transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.25s ease',
            paddingTop: '4rem',
          }}
        >
          <SidebarContent />
        </aside>
      )}

      {/* Main content */}
      <main style={{
        marginLeft: isMobile ? 0 : '260px',
        padding: isMobile ? '1rem 1rem 3rem' : '2rem 2.5rem 3rem',
        minWidth: 0,
      }}>
        {/* Mobile header bar */}
        {isMobile && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '1.25rem', paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}>
            <button
              onClick={() => setSidebarOpen(true)}
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px', padding: '0.5rem', color: '#f0f4f8', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Menu size={18} />
            </button>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.68rem', color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Module {moduleIndex + 1} of {course.moduleList.length}
              </div>
              <div style={{
                fontSize: '0.85rem', fontWeight: 700, color: '#f0f4f8',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {module.title}
              </div>
            </div>
          </div>
        )}

        <div style={{ maxWidth: '720px' }}>
          {/* Module header */}
          {!isMobile && (
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="label-mono" style={{ color: '#0ea5e9', marginBottom: '0.375rem', fontSize: '0.62rem' }}>
                Module {moduleIndex + 1} of {course.moduleList.length}
              </div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#f0f4f8', lineHeight: 1.2 }}>
                {module.title}
              </h1>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
                <span style={{ color: '#8b9cbf', fontSize: '0.8rem', display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                  <BookOpen size={13} /> {module.duration}
                </span>
                {currentModuleDone && (
                  <span style={{ display: 'flex', gap: '0.375rem', alignItems: 'center', color: '#22c55e', fontSize: '0.8rem', fontWeight: 600 }}>
                    <CheckCircle size={13} /> Completed
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Module content */}
          <div
            className="module-content"
            style={{ marginBottom: module.interactive ? '1.5rem' : '3rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: module.content }}
          />

          {/* Interactive exercise (label diagram etc.) */}
          {module.interactive === 'label-diagram' && (
            <div style={{ marginBottom: '3rem' }}>
              <LabelDiagram />
            </div>
          )}

          {/* Quiz section */}
          {quiz.length > 0 && (
            <div style={{
              background: '#0d1526', border: '1px solid rgba(14,165,233,0.15)',
              borderRadius: '0.875rem', padding: '1.75rem', marginBottom: '2.5rem',
            }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.75rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9',
                }}>
                  <BookOpen size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f0f4f8' }}>Module Quiz</div>
                  <div style={{ color: '#8b9cbf', fontSize: '0.78rem' }}>{quiz.length} questions to test your understanding</div>
                </div>
              </div>

              {quiz.map((q, qi) => {
                const selected = quizAnswers[q.id];
                const isAnswered = selected !== undefined;
                const isCorrect = selected === q.correct;

                return (
                  <div key={q.id} style={{
                    marginBottom: '2rem',
                    paddingBottom: qi < quiz.length - 1 ? '2rem' : 0,
                    borderBottom: qi < quiz.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}>
                    {/* Question progress */}
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      marginBottom: '0.75rem',
                    }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#3b82f6', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                        Question {qi + 1} of {quiz.length}
                      </span>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        {quiz.map((_, idx) => (
                          <div key={idx} style={{
                            width: '18px', height: '3px', borderRadius: '2px',
                            background: idx < qi + 1 ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                          }} />
                        ))}
                      </div>
                    </div>

                    <p style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.65 }}>
                      {q.question}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '0.875rem' }}>
                      {q.options.map((opt, oi) => {
                        const isSelected = selected === oi;
                        const isThisCorrect = oi === q.correct;

                        let bg = 'rgba(255,255,255,0.03)';
                        let border = '1px solid rgba(255,255,255,0.1)';
                        let color = '#cbd5e1';
                        let badgeBg = 'rgba(255,255,255,0.06)';
                        let badgeColor = '#64748b';
                        let icon = String.fromCharCode(65 + oi);

                        if (!quizSubmitted && isSelected) {
                          bg = 'rgba(59,130,246,0.12)';
                          border = '1px solid rgba(59,130,246,0.5)';
                          color = '#f1f5f9';
                          badgeBg = 'rgba(59,130,246,0.2)';
                          badgeColor = '#93c5fd';
                        }

                        if (quizSubmitted) {
                          if (isThisCorrect) {
                            bg = 'rgba(34,197,94,0.1)';
                            border = '1px solid rgba(34,197,94,0.45)';
                            color = '#86efac';
                            badgeBg = 'rgba(34,197,94,0.2)';
                            badgeColor = '#4ade80';
                            icon = '✓';
                          } else if (isSelected) {
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
                            key={oi}
                            onClick={() => {
                              if (!quizSubmitted && !isAnswered) {
                                setQuizAnswers(prev => ({ ...prev, [q.id]: oi }));
                              }
                            }}
                            disabled={quizSubmitted || isAnswered}
                            style={{
                              background: bg, border, borderRadius: '10px',
                              padding: '0.875rem 1rem', color,
                              textAlign: 'left', cursor: (quizSubmitted || isAnswered) ? 'default' : 'pointer',
                              transition: 'all 0.2s ease',
                              display: 'flex', alignItems: 'center', gap: '0.875rem',
                              width: '100%', outline: 'none',
                            }}
                          >
                            <span style={{
                              width: '28px', height: '28px', borderRadius: '6px',
                              background: badgeBg,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                              color: badgeColor, fontFamily: 'monospace',
                            }}>
                              {icon}
                            </span>
                            <span style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Per-question feedback (after answered, before submit) */}
                    {isAnswered && !quizSubmitted && (
                      <div style={{
                        padding: '0.75rem 1rem', borderRadius: '8px',
                        background: isCorrect ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
                        border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
                        animation: 'fadeIn 0.2s ease',
                      }}>
                        <div style={{ fontWeight: 700, fontSize: '0.875rem', color: isCorrect ? '#4ade80' : '#f87171', marginBottom: q.explanation ? '0.3rem' : 0 }}>
                          {isCorrect ? '✓ Correct!' : `✗ Incorrect — correct answer: ${q.options[q.correct]}`}
                        </div>
                        {q.explanation && (
                          <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>{q.explanation}</div>
                        )}
                      </div>
                    )}

                    {/* After submit feedback */}
                    {quizSubmitted && q.explanation && (
                      <div style={{
                        padding: '0.75rem 1rem', borderRadius: '8px',
                        background: isCorrect ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
                        border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
                      }}>
                        <div style={{ fontWeight: 700, fontSize: '0.875rem', color: isCorrect ? '#4ade80' : '#f87171', marginBottom: '0.3rem' }}>
                          {isCorrect ? '✓ Correct!' : `✗ Incorrect`}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>{q.explanation}</div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Submit / result */}
              {!quizSubmitted ? (
                <button
                  className="btn-primary"
                  disabled={!quizAllAnswered}
                  onClick={() => setQuizSubmitted(true)}
                  style={{ opacity: quizAllAnswered ? 1 : 0.5, marginTop: '0.5rem' }}
                >
                  Submit Quiz
                </button>
              ) : (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem',
                  background: quizScore >= 60 ? 'rgba(34,197,94,0.08)' : 'rgba(245,158,11,0.08)',
                  borderRadius: '0.5rem',
                  border: `1px solid ${quizScore >= 60 ? 'rgba(34,197,94,0.2)' : 'rgba(245,158,11,0.2)'}`,
                  marginTop: '0.5rem',
                }}>
                  <div>
                    <div style={{ fontWeight: 700, color: quizScore >= 60 ? '#22c55e' : '#f59e0b', fontSize: '1.25rem' }}>
                      {quizScore}%
                    </div>
                    <div style={{ color: '#8b9cbf', fontSize: '0.78rem' }}>{correctAnswers.length}/{quiz.length} correct</div>
                  </div>
                  <div style={{ color: '#c0cce0', fontSize: '0.85rem' }}>
                    {quizScore >= 60 ? 'Good work! Proceed to the next module.' : 'Review the content above and try again.'}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)',
          }}>
            {prevModule ? (
              <Link to={`/learn/${courseId}/module/${prevModule.id}`} className="btn-ghost" style={{ textDecoration: 'none' }}>
                <ChevronLeft size={15} /> Previous
              </Link>
            ) : <div />}
            <button
              className="btn-primary"
              onClick={handleNext}
              disabled={quiz.length > 0 && !quizSubmitted}
              style={{ opacity: (quiz.length > 0 && !quizSubmitted) ? 0.5 : 1 }}
            >
              {isLastModule ? 'Take Assessment' : 'Next Module'} <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
