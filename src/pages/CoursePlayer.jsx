import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import QuizQuestion from '../components/QuizQuestion';

export default function CoursePlayer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { currentUser, isEnrolled } = useAuth();
  const { getUserProgress, markModuleComplete, saveQuizScore, canTakeAssessment } = useProgress();

  const course = COURSES.find(c => c.id === courseId);
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notesOpen, setNotesOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [quizState, setQuizState] = useState({ answers: {}, submitted: false, score: 0 });
  const [showQuiz, setShowQuiz] = useState(false);
  const [moduleJustCompleted, setModuleJustCompleted] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!currentUser) { navigate('/login'); return; }
    if (course && !isEnrolled(courseId)) { navigate('/course/' + courseId); return; }
  }, [currentUser, courseId]);

  useEffect(() => {
    const key = 'upskill_notes_' + (currentUser && currentUser.id) + '_' + courseId;
    setNotes(localStorage.getItem(key) || '');
    setQuizState({ answers: {}, submitted: false, score: 0 });
    setShowQuiz(false);
    setModuleJustCompleted(false);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [activeModuleIdx, courseId]);

  if (!course) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
        Course not found
      </div>
    );
  }

  const modules = course.moduleList || [];
  const progress = getUserProgress(courseId) || {};
  const completedModules = progress.completedModules || [];
  const totalMods = modules.length;
  const completedCount = completedModules.length;
  const overallPct = totalMods > 0 ? Math.round((completedCount / totalMods) * 100) : 0;

  const activeModule = modules[activeModuleIdx];
  const isModuleComplete = activeModule && completedModules.includes(activeModule.id);
  const isModuleUnlocked = activeModuleIdx === 0 || (modules[activeModuleIdx - 1] && completedModules.includes(modules[activeModuleIdx - 1].id));

  const quiz = (activeModule && activeModule.quiz) || [];

  const saveNotes = (val) => {
    setNotes(val);
    const key = 'upskill_notes_' + (currentUser && currentUser.id) + '_' + courseId;
    localStorage.setItem(key, val);
  };

  const handleQuizAnswer = (questionId, idx) => {
    if (quizState.submitted) return;
    setQuizState(function(prev) {
      const newAnswers = Object.assign({}, prev.answers);
      newAnswers[questionId] = idx;
      return Object.assign({}, prev, { answers: newAnswers });
    });
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quiz.forEach(function(q) {
      if (quizState.answers[q.id] === q.correct) score++;
    });
    setQuizState(function(prev) { return Object.assign({}, prev, { submitted: true, score: score }); });
    saveQuizScore(courseId, activeModule.id, score, quiz.length);
  };

  const quizScore = quizState.submitted && quiz.length > 0 ? Math.round((quizState.score / quiz.length) * 100) : 100;
  const quizPassed = quiz.length === 0 || (quizState.submitted && quizScore >= 80);

  const handleCompleteModule = () => {
    markModuleComplete(courseId, activeModule.id);
    setModuleJustCompleted(true);
  };

  const handleNextModule = () => {
    if (activeModuleIdx < modules.length - 1) {
      setActiveModuleIdx(activeModuleIdx + 1);
    }
  };

  const allModulesDone = canTakeAssessment(courseId, totalMods);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#0f1628', borderBottom: '1px solid #1e2d4a', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'sticky', top: 0, zIndex: 50 }}>
        <button onClick={() => navigate('/dashboard')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.1rem' }}>Back</button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.9rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{course.title}</div>
          <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{activeModule && activeModule.title}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <div style={{ background: '#1e2d4a', borderRadius: '100px', height: '6px', width: '100px', overflow: 'hidden' }}>
            <div style={{ background: '#3b82f6', height: '100%', width: overallPct + '%', transition: 'width 0.5s', borderRadius: '100px' }} />
          </div>
          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{overallPct}%</span>
        </div>
        <button
          onClick={() => setNotesOpen(!notesOpen)}
          style={{ background: notesOpen ? 'rgba(59,130,246,0.15)' : 'none', border: '1px solid ' + (notesOpen ? '#3b82f6' : '#1e2d4a'), borderRadius: '6px', color: notesOpen ? '#60a5fa' : '#94a3b8', cursor: 'pointer', padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
        >
          Notes
        </button>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: 0 }}>
        <div style={{ width: sidebarOpen ? '270px' : '0', flexShrink: 0, background: '#0f1628', borderRight: '1px solid #1e2d4a', overflow: 'hidden', transition: 'width 0.3s', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #1e2d4a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600 }}>MODULES ({completedCount}/{totalMods})</span>
            <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '0.9rem' }}>Hide</button>
          </div>
          <div style={{ overflow: 'auto', flex: 1 }}>
            {modules.map((mod, i) => {
              const done = completedModules.includes(mod.id);
              const unlocked = i === 0 || (modules[i - 1] && completedModules.includes(modules[i - 1].id));
              const active = i === activeModuleIdx;
              return (
                <button
                  key={mod.id}
                  onClick={() => unlocked && setActiveModuleIdx(i)}
                  disabled={!unlocked}
                  style={{ width: '100%', background: active ? 'rgba(59,130,246,0.12)' : 'transparent', border: 'none', borderLeft: active ? '3px solid #3b82f6' : '3px solid transparent', padding: '0.75rem 1rem', textAlign: 'left', cursor: unlocked ? 'pointer' : 'not-allowed', opacity: unlocked ? 1 : 0.4, display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                >
                  <span style={{ fontSize: '0.9rem', flexShrink: 0, color: done ? '#22c55e' : active ? '#3b82f6' : '#64748b' }}>{done ? '[x]' : active ? '[>]' : unlocked ? '[ ]' : '[~]'}</span>
                  <div>
                    <div style={{ color: active ? '#60a5fa' : done ? '#4ade80' : '#94a3b8', fontSize: '0.8rem', fontWeight: active ? 600 : 400, lineHeight: 1.3 }}>{mod.title}</div>
                    <div style={{ color: '#64748b', fontSize: '0.7rem', marginTop: '0.15rem' }}>{mod.duration}</div>
                  </div>
                </button>
              );
            })}
          </div>
          {allModulesDone && (
            <div style={{ padding: '1rem', borderTop: '1px solid #1e2d4a', flexShrink: 0 }}>
              <button
                onClick={() => navigate('/learn/' + courseId + '/assessment')}
                style={{ width: '100%', background: 'linear-gradient(135deg, #f59e0b, #d97706)', border: 'none', borderRadius: '8px', padding: '0.75rem', color: 'white', cursor: 'pointer', fontWeight: 700, fontSize: '0.875rem' }}
              >
                Final Assessment
              </button>
            </div>
          )}
        </div>

        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
          {!sidebarOpen && (
            <button onClick={() => setSidebarOpen(true)} style={{ position: 'absolute', left: 0, top: '1rem', background: '#0f1628', border: '1px solid #1e2d4a', borderLeft: 'none', borderRadius: '0 6px 6px 0', padding: '0.5rem', color: '#94a3b8', cursor: 'pointer', zIndex: 10 }}>
              Menu
            </button>
          )}

          <div ref={contentRef} style={{ flex: 1, overflow: 'auto', padding: '2rem 1.5rem' }}>
            {!isModuleUnlocked ? (
              <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>Module Locked</div>
                <p>Complete the previous module first.</p>
              </div>
            ) : (
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                    Module {activeModuleIdx + 1} of {totalMods} &bull; {activeModule && activeModule.duration}
                  </div>
                  <h1 style={{ color: '#f1f5f9', fontSize: '1.6rem', fontWeight: 800 }}>{activeModule && activeModule.title}</h1>
                </div>

                <div className="course-content" dangerouslySetInnerHTML={{ __html: (activeModule && activeModule.content) || '' }} style={{ marginBottom: '3rem' }} />

                {quiz.length > 0 && (
                  <div style={{ background: '#131d35', border: '1px solid #1e2d4a', borderRadius: '12px', padding: '1.75rem', marginBottom: '2rem' }}>
                    <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Module Quiz</h2>
                    <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Score 80% or above to complete this module.</p>

                    {!showQuiz && !isModuleComplete ? (
                      <button onClick={() => setShowQuiz(true)} style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', border: 'none', borderRadius: '8px', padding: '0.75rem 1.5rem', color: 'white', cursor: 'pointer', fontWeight: 700 }}>
                        Start Quiz ({quiz.length} questions)
                      </button>
                    ) : isModuleComplete ? (
                      <div style={{ color: '#4ade80', fontWeight: 600 }}>Quiz complete - module done!</div>
                    ) : (
                      <div>
                        {quiz.map((q, qi) => (
                          <QuizQuestion
                            key={q.id}
                            question={q.question}
                            options={q.options}
                            selectedIndex={quizState.answers[q.id] !== undefined ? quizState.answers[q.id] : null}
                            onSelect={(idx) => handleQuizAnswer(q.id, idx)}
                            submitted={quizState.submitted}
                            correctIndex={q.correct}
                            questionNumber={qi + 1}
                            total={quiz.length}
                          />
                        ))}
                        {!quizState.submitted ? (
                          <button
                            onClick={handleSubmitQuiz}
                            disabled={Object.keys(quizState.answers).length < quiz.length}
                            style={{ background: Object.keys(quizState.answers).length < quiz.length ? '#1e2d4a' : 'linear-gradient(135deg, #3b82f6, #2563eb)', border: 'none', borderRadius: '8px', padding: '0.75rem 1.5rem', color: 'white', cursor: Object.keys(quizState.answers).length < quiz.length ? 'not-allowed' : 'pointer', fontWeight: 700, marginTop: '1rem' }}
                          >
                            Submit Quiz
                          </button>
                        ) : (
                          <div style={{ marginTop: '1.5rem' }}>
                            {quizPassed ? (
                              <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '1rem', color: '#4ade80', fontWeight: 600 }}>
                                Passed! {quizState.score}/{quiz.length} ({quizScore}%)
                              </div>
                            ) : (
                              <div>
                                <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '1rem', color: '#f87171', fontWeight: 600, marginBottom: '1rem' }}>
                                  Score: {quizState.score}/{quiz.length} ({quizScore}%) - Need 80%
                                </div>
                                <button onClick={() => setQuizState({ answers: {}, submitted: false, score: 0 })} style={{ background: 'transparent', border: '1px solid #1e2d4a', borderRadius: '8px', padding: '0.6rem 1.25rem', color: '#94a3b8', cursor: 'pointer' }}>
                                  Try Again
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {(quiz.length === 0 || quizPassed) && !isModuleComplete && (
                  <div style={{ marginBottom: '2rem' }}>
                    <button onClick={handleCompleteModule} style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', border: 'none', borderRadius: '8px', padding: '0.875rem 2rem', color: 'white', cursor: 'pointer', fontWeight: 700 }}>
                      Mark Module Complete
                    </button>
                  </div>
                )}

                {(isModuleComplete || moduleJustCompleted) && (
                  <div style={{ background: '#131d35', border: '1px solid #1e2d4a', borderRadius: '12px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                    <div>
                      <div style={{ color: '#4ade80', fontWeight: 700, marginBottom: '0.25rem' }}>Module complete!</div>
                      {activeModuleIdx < modules.length - 1 ? (
                        <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Next: {modules[activeModuleIdx + 1] && modules[activeModuleIdx + 1].title}</div>
                      ) : (
                        <div style={{ color: '#f59e0b', fontSize: '0.8rem' }}>All done - take the final assessment!</div>
                      )}
                    </div>
                    <div>
                      {activeModuleIdx < modules.length - 1 ? (
                        <button onClick={handleNextModule} style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', border: 'none', borderRadius: '8px', padding: '0.65rem 1.25rem', color: 'white', cursor: 'pointer', fontWeight: 700 }}>
                          Next Module
                        </button>
                      ) : (
                        <button onClick={() => navigate('/learn/' + courseId + '/assessment')} style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', border: 'none', borderRadius: '8px', padding: '0.65rem 1.25rem', color: 'white', cursor: 'pointer', fontWeight: 700 }}>
                          Take Assessment
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {notesOpen && (
            <div style={{ width: '280px', flexShrink: 0, background: '#0f1628', borderLeft: '1px solid #1e2d4a', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #1e2d4a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>MY NOTES</span>
                <button onClick={() => setNotesOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>Hide</button>
              </div>
              <textarea
                value={notes}
                onChange={(e) => saveNotes(e.target.value)}
                placeholder="Take notes..."
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#f1f5f9', fontSize: '0.85rem', padding: '1rem', resize: 'none', lineHeight: 1.7, fontFamily: 'inherit' }}
              />
              <div style={{ padding: '0.5rem 1rem', borderTop: '1px solid #1e2d4a', color: '#64748b', fontSize: '0.7rem', flexShrink: 0 }}>Auto-saved</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
