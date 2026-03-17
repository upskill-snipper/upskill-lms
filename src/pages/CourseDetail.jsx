import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Users, Star, Play, Award, BookOpen, ChevronRight, Lock, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';
import { getCurrentUser, enrollUser, getUserProgress } from '../utils/auth';

const pathwayColors = {
  'energy-ready': '#0ea5e9',
  'process-safety': '#f59e0b',
  'energy-transition': '#22c55e',
  'leadership': '#a855f7',
};
const pathwayLabels = {
  'energy-ready': 'Energy Ready',
  'process-safety': 'Process Safety',
  'energy-transition': 'Energy Transition',
  'leadership': 'Leadership & Competence',
};

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
        <Navbar />
        <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h1>Course not found</h1>
          <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', marginTop: '1.5rem' }}>
            Browse courses
          </Link>
        </div>
      </div>
    );
  }

  const color = pathwayColors[course.pathway] || '#0ea5e9';
  const isEnrolled = user && (user.enrolledCourses || []).includes(course.id);
  const progress = user ? getUserProgress(user.id, course.id) : null;
  const completedCount = progress?.completedModules?.length || 0;
  const percent = course.moduleList?.length > 0 ? Math.round((completedCount / course.moduleList.length) * 100) : 0;

  function handleEnroll() {
    if (!user) {
      navigate('/register');
      return;
    }
    enrollUser(user.id, course.id);
    // Navigate to first module
    const firstModule = course.moduleList?.[0];
    if (firstModule) {
      navigate(`/learn/${course.id}/module/${firstModule.id}`);
    } else {
      navigate('/dashboard');
    }
  }

  function handleContinue() {
    const nextModule = course.moduleList?.find(m => !progress?.completedModules?.includes(m.id));
    const target = nextModule || course.moduleList?.[0];
    if (target) navigate(`/learn/${course.id}/module/${target.id}`);
  }

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />
      
      {/* Hero */}
      <section style={{ 
        background: `linear-gradient(180deg, ${color}08 0%, #0a0e1a 100%)`,
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '3rem 0',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'start' }}>
            <div>
              {/* Breadcrumb */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.8rem' }}>
                <Link to="/courses" style={{ color: '#8b9cbf', textDecoration: 'none' }}>Courses</Link>
                <ChevronRight size={12} color="#4a5a78" />
                <span className="badge" style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>
                  {pathwayLabels[course.pathway]}
                </span>
              </div>

              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '0.875rem' }}>
                {course.title}
              </h1>
              <p style={{ color: '#8b9cbf', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '640px' }}>
                {course.description}
              </p>

              {/* Meta */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {[
                  { icon: <Clock size={14} />, text: course.duration },
                  { icon: <BookOpen size={14} />, text: `${course.modules} modules` },
                  { icon: <Users size={14} />, text: `${course.enrolled?.toLocaleString()} enrolled` },
                  { icon: <Star size={14} fill="#f59e0b" color="#f59e0b" />, text: `${course.rating}/5` },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.375rem', alignItems: 'center', color: '#8b9cbf', fontSize: '0.85rem' }}>
                    <span style={{ color }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Level badge */}
              <span className="badge badge-blue">{course.level}</span>
            </div>

            {/* Enrollment Card */}
            <div style={{ 
              background: '#0d1526', border: `1px solid ${color}25`,
              borderRadius: '0.875rem', padding: '1.75rem',
              minWidth: '280px', maxWidth: '320px',
              boxShadow: `0 0 40px ${color}08`,
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b', marginBottom: '0.25rem' }}>
                £{course.price}
              </div>
              <div style={{ color: '#8b9cbf', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                One-time payment · Lifetime access
              </div>

              {isEnrolled ? (
                <div>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                      <span style={{ color: '#8b9cbf', fontSize: '0.78rem' }}>Your progress</span>
                      <span style={{ color, fontSize: '0.78rem', fontWeight: 600 }}>{percent}%</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                  <button onClick={handleContinue} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
                    <Play size={16} /> {percent === 0 ? 'Start Course' : 'Continue Learning'}
                  </button>
                </div>
              ) : course.comingSoon ? (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <Lock size={28} color="#4a5a78" style={{ marginBottom: '0.5rem' }} />
                  <p style={{ color: '#8b9cbf', fontSize: '0.85rem' }}>This course is coming soon</p>
                </div>
              ) : (
                <button onClick={handleEnroll} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem', fontSize: '1rem' }}>
                  <Zap size={16} /> Enrol Now
                </button>
              )}

              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  `${course.modules} learning modules`,
                  `Final assessment (20 questions)`,
                  'Certificate of completion',
                  'Lifetime access',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.8rem', color: '#8b9cbf' }}>
                    <CheckCircle size={13} color="#22c55e" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          {/* Left */}
          <div>
            {/* Learning outcomes */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f0f4f8' }}>
                What you'll learn
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                {course.outcomes?.map((o, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={14} color="#22c55e" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: '#c0cce0', fontSize: '0.85rem', lineHeight: 1.5 }}>{o}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Module list */}
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f0f4f8' }}>
                Course Content
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {course.moduleList?.map((module, i) => {
                  const isComplete = progress?.completedModules?.includes(module.id);
                  return (
                    <div key={module.id} style={{ 
                      background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '0.5rem', padding: '0.875rem 1rem',
                      display: 'flex', alignItems: 'center', gap: '0.875rem',
                    }}>
                      <div style={{ 
                        width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                        background: isComplete ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.05)',
                        border: `1px solid ${isComplete ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.1)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: isComplete ? '#22c55e' : '#4a5a78',
                        fontSize: '0.72rem', fontWeight: 700,
                      }}>
                        {isComplete ? <CheckCircle size={14} /> : i + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: '#f0f4f8', fontWeight: 500, fontSize: '0.875rem' }}>{module.title}</div>
                        <div style={{ color: '#8b9cbf', fontSize: '0.72rem' }}>{module.duration}</div>
                      </div>
                      {isEnrolled && (
                        <Link
                          to={`/learn/${course.id}/module/${module.id}`}
                          style={{ color, fontSize: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}
                        >
                          <Play size={12} /> {isComplete ? 'Review' : 'Start'}
                        </Link>
                      )}
                    </div>
                  );
                })}
                {/* Assessment row */}
                <div style={{ 
                  background: '#0d1526', border: `1px solid ${color}25`,
                  borderRadius: '0.5rem', padding: '0.875rem 1rem',
                  display: 'flex', alignItems: 'center', gap: '0.875rem',
                }}>
                  <div style={{ 
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: progress?.assessmentPassed ? 'rgba(34,197,94,0.15)' : `${color}15`,
                    border: `1px solid ${progress?.assessmentPassed ? 'rgba(34,197,94,0.3)' : color + '30'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: progress?.assessmentPassed ? '#22c55e' : color,
                  }}>
                    <Award size={14} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#f0f4f8', fontWeight: 600, fontSize: '0.875rem' }}>Final Assessment</div>
                    <div style={{ color: '#8b9cbf', fontSize: '0.72rem' }}>
                      20 questions · 70% to pass · Certificate on completion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div>
            <div style={{ 
              background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)', 
              borderRadius: '0.875rem', padding: '1.5rem',
              position: 'sticky', top: '80px',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f0f4f8' }}>
                About This Course
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { label: 'Level', value: course.level },
                  { label: 'Duration', value: course.duration },
                  { label: 'Modules', value: course.modules },
                  { label: 'Assessment', value: '20 questions (70% pass)' },
                  { label: 'Certificate', value: 'Yes — on passing' },
                  { label: 'Access', value: 'Lifetime' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#8b9cbf', fontSize: '0.82rem' }}>{item.label}</span>
                    <span style={{ color: '#c0cce0', fontSize: '0.82rem', fontWeight: 600 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
