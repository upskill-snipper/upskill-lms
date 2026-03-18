import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle, Circle, Award, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress, markModuleComplete, enrollUser } from '../utils/auth';

export default function CoursePlayer() {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const course = COURSES.find(c => c.id === courseId);
  const module = course?.moduleList?.find(m => m.id === moduleId);
  const [quizState, setQuizState] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const progress = user ? getUserProgress(user.id, courseId) : null;

  useEffect(() => {
    if (user && course && !(user.enrolledCourses || []).includes(courseId)) {
      enrollUser(user.id, courseId);
    }
  }, [user, course, courseId]);

  useEffect(() => {
    setQuizState({});
    setQuizSubmitted(false);
    window.scrollTo(0, 0);
  }, [moduleId]);

  if (!course || !module) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
        <Navbar />
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Module not found</h2>
          <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', marginTop: '1rem' }}>Browse courses</Link>
        </div>
      </div>
    );
  }

  const moduleIndex = course.moduleList.findIndex(m => m.id === moduleId);
  const prevModule = moduleIndex > 0 ? course.moduleList[moduleIndex - 1] : null;
  const nextModule = moduleIndex < course.moduleList.length - 1 ? course.moduleList[moduleIndex + 1] : null;
  const isLastModule = moduleIndex === course.moduleList.length - 1;

  const quiz = module.quiz || [];
  const correctAnswers = quiz.filter(q => quizState[q.id] === q.correct);
  const quizScore = quiz.length > 0 ? Math.round((correctAnswers.length / quiz.length) * 100) : 100;
  const quizAllAnswered = quiz.length === 0 || quiz.every(q => quizState[q.id] !== undefined);

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

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />
      <div style={{ display: 'flex', maxWidth: '1280px', margin: '0 auto' }}>
        <aside style={{
          width: '272px', flexShrink: 0,
          background: '#0d1526', borderRight: '1px solid rgba(255,255,255,0.07)',
          padding: '1.5rem 0',
          position: 'sticky', top: '64px', height: 'calc(100vh - 64px)', overflowY: 'auto',
        }}>
          <div style={{ padding: '0 1.25rem', marginBottom: '1.25rem' }}>
            <Link to={`/course/${courseId}`} style={{ color: '#8b9cbf', fontSize: '0.78rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
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
                <Link key={m.id} to={`/learn/${courseId}/module/${m.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '0.625rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center',
                    background: active ? 'rgba(14,165,233,0.08)' : 'transparent',
                    borderLeft: `2px solid ${active ? '#0ea5e9' : 'transparent'}`,
                  }}>
                    <div style={{ flexShrink: 0, color: done ? '#22c55e' : active ? '#0ea5e9' : '#4a5a78' }}>
                      {done ? <CheckCircle size={15} /> : <Circle size={15} />}
                    </div>
                    <div>
                      <div style={{ color: active ? '#f0f4f8' : done ? '#c0cce0' : '#8b9cbf', fontSize: '0.8rem', lineHeight: 1.3, fontWeight: active ? 600 : 400 }}>
                        {i+1}. {m.title}
                      </div>
                      <div style={{ color: '#4a5a78', fontSize: '0.68rem' }}>{m.duration}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
            <Link to={`/learn/${courseId}/assessment`} style={{ textDecoration: 'none' }}>
              <div style={{ padding: '0.625rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Award size={15} color={progress?.assessmentPassed ? '#22c55e' : '#4a5a78'} />
                <div style={{ color: '#8b9cbf', fontSize: '0.8rem' }}>Final Assessment</div>
              </div>
            </Link>
          </div>
        </aside>

        <main style={{ flex: 1, padding: '2rem 2.5rem', minWidth: 0 }}>
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

          <div className="module-content" style={{ marginBottom: '3rem' }} dangerouslySetInnerHTML={{ __html: module.content }} />

          {quiz.length > 0 && (
            <div style={{
              background: '#0d1526', border: '1px solid rgba(14,165,233,0.15)',
              borderRadius: '0.875rem', padding: '1.75rem', marginBottom: '2.5rem',
            }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9' }}>
                  <BookOpen size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f0f4f8' }}>Module Quiz</div>
                  <div style={{ color: '#8b9cbf', fontSize: '0.78rem' }}>{quiz.length} questions to test your understanding</div>
                </div>
              </div>

              {quiz.map((q, qi) => {
                const selected = quizState[q.id];
                const isCorrect = selected === q.correct;
                return (
                  <div key={q.id} style={{ marginBottom: '1.75rem' }}>
                    <p style={{ color: '#c0cce0', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.875rem', lineHeight: 1.5 }}>
                      <span style={{ color: '#0ea5e9', marginRight: '0.5rem' }}>Q{qi + 1}.</span>
                      {q.question}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {q.options.map((opt, oi) => {
                        let extraClass = '';
                        if (quizSubmitted) {
                          if (oi === q.correct) extraClass = ' correct';
                          else if (oi === selected && selected !== q.correct) extraClass = ' incorrect';
                        } else if (oi === selected) {
                          extraClass = ' selected';
                        }
                        return (
                          <button
                            key={oi}
                            className={"quiz-option" + extraClass}
                            onClick={() => { if (!quizSubmitted) setQuizState(prev => ({ ...prev, [q.id]: oi })); }}
                            disabled={quizSubmitted}
                          >
                            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', fontSize: '0.72rem', fontWeight: 600, marginRight: '0.75rem', flexShrink: 0, fontFamily: 'monospace' }}>
                              {String.fromCharCode(65 + oi)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {quizSubmitted && (
                      <div style={{ marginTop: '0.625rem', fontSize: '0.78rem', fontWeight: 600, color: isCorrect ? '#4ade80' : '#f87171', display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
                        {isCorrect ? "Correct!" : `Correct answer: ${q.options[q.correct]}`}
                      </div>
                    )}
                  </div>
                );
              })}

              {!quizSubmitted ? (
                <button className="btn-primary" disabled={!quizAllAnswered} onClick={() => setQuizSubmitted(true)} style={{ opacity: quizAllAnswered ? 1 : 0.5 }}>
                  Submit Answers
                </button>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: quizScore >= 60 ? 'rgba(34,197,94,0.08)' : 'rgba(245,158,11,0.08)', borderRadius: '0.5rem', border: `1px solid ${quizScore >= 60 ? 'rgba(34,197,94,0.2)' : 'rgba(245,158,11,0.2)'}` }}>
                  <div>
                    <div style={{ fontWeight: 700, color: quizScore >= 60 ? '#22c55e' : '#f59e0b', fontSize: '1.25rem' }}>{quizScore}%</div>
                    <div style={{ color: '#8b9cbf', fontSize: '0.78rem' }}>{correctAnswers.length}/{quiz.length} correct</div>
                  </div>
                  <div style={{ color: '#c0cce0', fontSize: '0.85rem' }}>
                    {quizScore >= 60 ? 'Good work! Proceed to the next module.' : 'Review the content above and try again.'}
                  </div>
                </div>
              )}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
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
              {isLastModule ? "Take Assessment" : "Next Module"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
