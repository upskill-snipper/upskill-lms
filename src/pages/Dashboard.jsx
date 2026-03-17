import { Link } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, Clock, Play, ChevronRight, CheckCircle, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress } from '../utils/auth';

function ProgressRing({ percent, size = 64, stroke = 5, color = '#0ea5e9' }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle
        cx={size/2} cy={size/2} r={r} fill="none"
        stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.6s ease' }}
      />
    </svg>
  );
}

export default function Dashboard() {
  const user = getCurrentUser();
  if (!user) return null;

  const enrolledCourses = COURSES.filter(c => (user.enrolledCourses || []).includes(c.id));
  const certificates = user.certificates || [];

  const courseProgress = enrolledCourses.map(course => {
    const prog = getUserProgress(user.id, course.id);
    const totalModules = course.moduleList?.length || 0;
    const completed = prog.completedModules.length;
    const percent = totalModules > 0 ? Math.round((completed / totalModules) * 100) : 0;
    const assessmentDone = totalModules > 0 && completed === totalModules;
    return { course, prog, percent, assessmentDone, totalModules };
  });

  const totalCerts = certificates.length;
  const inProgress = courseProgress.filter(cp => cp.percent > 0 && !cp.prog.assessmentPassed).length;

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />
      <div className="mesh-bg" style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="label-mono" style={{ color: '#0ea5e9', marginBottom: '0.375rem' }}>
            Welcome back
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#f0f4f8', marginBottom: '0.5rem' }}>
            {user.name}
          </h1>
          <p style={{ color: '#8b9cbf' }}>
            {enrolledCourses.length === 0
              ? 'You haven\'t enrolled in any courses yet. Browse the catalogue to get started.'
              : `You have ${enrolledCourses.length} enrolled course${enrolledCourses.length > 1 ? 's' : ''}.`
            }
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Courses Enrolled', value: enrolledCourses.length, icon: <BookOpen size={18} />, color: '#0ea5e9' },
            { label: 'In Progress', value: inProgress, icon: <TrendingUp size={18} />, color: '#f59e0b' },
            { label: 'Completed', value: courseProgress.filter(cp => cp.prog.assessmentPassed).length, icon: <CheckCircle size={18} />, color: '#22c55e' },
            { label: 'Certificates', value: totalCerts, icon: <Award size={18} />, color: '#a855f7' },
          ].map((stat, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                background: `${stat.color}15`, border: `1px solid ${stat.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: stat.color,
              }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f0f4f8', letterSpacing: '-0.02em' }}>{stat.value}</div>
                <div style={{ color: '#8b9cbf', fontSize: '0.75rem' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enrolled Courses */}
        {enrolledCourses.length > 0 ? (
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f0f4f8' }}>My Courses</h2>
              <Link to="/courses" className="btn-ghost" style={{ textDecoration: 'none', fontSize: '0.8rem' }}>
                Browse more <ChevronRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
              {courseProgress.map(({ course, prog, percent, assessmentDone }) => {
                const nextModule = course.moduleList?.find(m => !prog.completedModules.includes(m.id));
                const firstModule = course.moduleList?.[0];
                const targetModule = nextModule || firstModule;

                return (
                  <div key={course.id} className="card" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div style={{ position: 'relative', flexShrink: 0 }}>
                        <ProgressRing percent={percent} />
                        <div style={{ 
                          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.7rem', fontWeight: 700, color: percent === 100 ? '#22c55e' : '#0ea5e9',
                        }}>
                          {percent}%
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f0f4f8', lineHeight: 1.3, marginBottom: '0.25rem' }}>
                          {course.title}
                        </h3>
                        <div className="label-mono" style={{ color: '#8b9cbf', fontSize: '0.62rem' }}>
                          {course.level} · {course.duration}
                        </div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                        <span style={{ color: '#8b9cbf', fontSize: '0.75rem' }}>
                          {prog.completedModules.length} / {course.moduleList?.length || 0} modules
                        </span>
                        {prog.assessmentScore !== null && (
                          <span style={{ 
                            fontSize: '0.72rem', fontWeight: 600,
                            color: prog.assessmentPassed ? '#22c55e' : '#f87171',
                          }}>
                            Assessment: {prog.assessmentScore}%
                          </span>
                        )}
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${percent}%` }} />
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {prog.assessmentPassed ? (
                        <Link
                          to={`/certificate/${user.certificates?.find(c => c.courseId === course.id)?.id}`}
                          className="btn-secondary"
                          style={{ textDecoration: 'none', flex: 1, justifyContent: 'center' }}
                        >
                          <Award size={14} /> View Certificate
                        </Link>
                      ) : assessmentDone && prog.completedModules.length === course.moduleList?.length ? (
                        <Link
                          to={`/learn/${course.id}/assessment`}
                          className="btn-primary"
                          style={{ textDecoration: 'none', flex: 1, justifyContent: 'center' }}
                        >
                          <Play size={14} /> Take Assessment
                        </Link>
                      ) : targetModule ? (
                        <Link
                          to={`/learn/${course.id}/module/${targetModule.id}`}
                          className="btn-primary"
                          style={{ textDecoration: 'none', flex: 1, justifyContent: 'center' }}
                        >
                          <Play size={14} /> {prog.completedModules.length === 0 ? 'Start' : 'Continue'}
                        </Link>
                      ) : null}
                      <Link to={`/course/${course.id}`} className="btn-ghost" style={{ textDecoration: 'none' }}>
                        Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', padding: '4rem 2rem',
            background: '#0d1526', borderRadius: '0.75rem',
            border: '1px solid rgba(255,255,255,0.07)',
            marginBottom: '2.5rem',
          }}>
            <div style={{ color: '#4a5a78', marginBottom: '1rem' }}>
              <BookOpen size={48} strokeWidth={1} />
            </div>
            <h3 style={{ color: '#f0f4f8', fontWeight: 600, marginBottom: '0.5rem' }}>No courses yet</h3>
            <p style={{ color: '#8b9cbf', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Browse the course catalogue to find your first course
            </p>
            <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              Browse courses <ChevronRight size={14} />
            </Link>
          </div>
        )}

        {/* Certificates */}
        {certificates.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f0f4f8', marginBottom: '1.25rem' }}>
              My Certificates
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {certificates.map(cert => {
                const course = COURSES.find(c => c.id === cert.courseId);
                return (
                  <Link key={cert.id} to={`/certificate/${cert.id}`} style={{ textDecoration: 'none' }}>
                    <div style={{ 
                      background: 'linear-gradient(135deg, #0d1a2e, #0d1526)',
                      border: '1px solid rgba(34,197,94,0.2)',
                      borderRadius: '0.75rem', padding: '1.25rem',
                      display: 'flex', gap: '1rem', alignItems: 'center',
                    }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Award size={20} color="#22c55e" />
                      </div>
                      <div>
                        <div style={{ color: '#f0f4f8', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                          {course?.title || 'Certificate'}
                        </div>
                        <div style={{ color: '#22c55e', fontSize: '0.72rem', fontWeight: 600 }}>
                          Score: {cert.score}% · Passed
                        </div>
                        <div style={{ color: '#8b9cbf', fontSize: '0.7rem' }}>
                          {new Date(cert.issuedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
