import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, TrendingUp, Shield, ChevronRight, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';
import { getUsers, getProgress } from '../utils/auth';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview');
  const users = getUsers().filter(u => u.role !== 'admin');
  const progress = getProgress();
  const adminUser = getUsers().find(u => u.role === 'admin');

  const totalEnrollments = users.reduce((acc, u) => acc + (u.enrolledCourses?.length || 0), 0);
  const totalCerts = users.reduce((acc, u) => acc + (u.certificates?.length || 0), 0);

  // Course completion stats
  const courseStats = COURSES.filter(c => !c.comingSoon).map(course => {
    const enrolled = users.filter(u => u.enrolledCourses?.includes(course.id)).length;
    const completed = users.filter(u => u.completedCourses?.includes(course.id)).length;
    const totalProgress = users.reduce((acc, u) => {
      const prog = progress?.[u.id]?.[course.id];
      const pct = course.moduleList?.length > 0 ? (prog?.completedModules?.length || 0) / course.moduleList.length : 0;
      return acc + pct;
    }, 0);
    const avgProgress = enrolled > 0 ? Math.round((totalProgress / enrolled) * 100) : 0;
    return { course, enrolled, completed, avgProgress };
  });

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '46px', height: '46px', borderRadius: '12px',
            background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#a855f7',
          }}>
            <Shield size={22} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Admin Dashboard</h1>
            <p style={{ color: '#8b9cbf', fontSize: '0.82rem' }}>Platform overview and learner management</p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Registered Learners', value: users.length, icon: <Users size={18} />, color: '#0ea5e9' },
            { label: 'Total Enrollments', value: totalEnrollments, icon: <BookOpen size={18} />, color: '#f59e0b' },
            { label: 'Completed Courses', value: users.reduce((a, u) => a + (u.completedCourses?.length || 0), 0), icon: <TrendingUp size={18} />, color: '#22c55e' },
            { label: 'Certificates Issued', value: totalCerts, icon: <Award size={18} />, color: '#a855f7' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                background: `${s.color}15`, border: `1px solid ${s.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color,
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f0f4f8', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ color: '#8b9cbf', fontSize: '0.75rem' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', background: '#0d1526', borderRadius: '0.5rem', padding: '0.25rem', display: 'inline-flex' }}>
          {[{ id: 'overview', label: 'Course Stats' }, { id: 'learners', label: 'Learners' }].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: '0.5rem 1.25rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500,
              background: activeTab === tab.id ? 'rgba(14,165,233,0.15)' : 'transparent',
              color: activeTab === tab.id ? '#38bdf8' : '#8b9cbf',
              transition: 'all 0.2s',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Stats Tab */}
        {activeTab === 'overview' && (
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1rem', color: '#f0f4f8' }}>Course Performance</h2>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {['Course', 'Level', 'Price', 'Enrolled', 'Completed', 'Avg Progress'].map(h => (
                      <th key={h} style={{ padding: '0.75rem 1.25rem', textAlign: 'left', color: '#8b9cbf', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {courseStats.map(({ course, enrolled, completed, avgProgress }) => (
                    <tr key={course.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}>
                      <td style={{ padding: '0.875rem 1.25rem' }}>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#f0f4f8' }}>{course.title}</div>
                        <div style={{ color: '#8b9cbf', fontSize: '0.72rem' }}>{course.modules} modules</div>
                      </td>
                      <td style={{ padding: '0.875rem 1.25rem' }}>
                        <span className="badge badge-blue" style={{ fontSize: '0.65rem' }}>{course.level}</span>
                      </td>
                      <td style={{ padding: '0.875rem 1.25rem', color: '#f59e0b', fontWeight: 600, fontSize: '0.875rem' }}>£{course.price}</td>
                      <td style={{ padding: '0.875rem 1.25rem', color: '#c0cce0', fontSize: '0.875rem' }}>{enrolled}</td>
                      <td style={{ padding: '0.875rem 1.25rem' }}>
                        <span style={{ color: '#22c55e', fontWeight: 600, fontSize: '0.875rem' }}>{completed}</span>
                      </td>
                      <td style={{ padding: '0.875rem 1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                          <div className="progress-track" style={{ width: '80px', height: '4px' }}>
                            <div className="progress-fill" style={{ width: `${avgProgress}%` }} />
                          </div>
                          <span style={{ color: '#8b9cbf', fontSize: '0.78rem', minWidth: '30px' }}>{avgProgress}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Learners Tab */}
        {activeTab === 'learners' && (
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1rem', color: '#f0f4f8' }}>Registered Learners ({users.length})</h2>
            </div>
            {users.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: '#8b9cbf' }}>
                <Users size={36} strokeWidth={1} style={{ marginBottom: '0.75rem' }} />
                <p>No learners registered yet</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      {['Name', 'Email', 'Joined', 'Enrolled', 'Completed', 'Certificates'].map(h => (
                        <th key={h} style={{ padding: '0.75rem 1.25rem', textAlign: 'left', color: '#8b9cbf', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '0.875rem 1.25rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                              width: '32px', height: '32px', borderRadius: '50%',
                              background: 'rgba(14,165,233,0.15)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: '#0ea5e9', fontSize: '0.8rem', fontWeight: 700,
                            }}>
                              {u.name.charAt(0).toUpperCase()}
                            </div>
                            <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#f0f4f8' }}>{u.name}</span>
                          </div>
                        </td>
                        <td style={{ padding: '0.875rem 1.25rem', color: '#8b9cbf', fontSize: '0.82rem' }}>{u.email}</td>
                        <td style={{ padding: '0.875rem 1.25rem', color: '#8b9cbf', fontSize: '0.78rem' }}>
                          {new Date(u.createdAt).toLocaleDateString('en-GB')}
                        </td>
                        <td style={{ padding: '0.875rem 1.25rem', color: '#c0cce0', fontSize: '0.875rem' }}>
                          {u.enrolledCourses?.length || 0}
                        </td>
                        <td style={{ padding: '0.875rem 1.25rem', color: '#22c55e', fontWeight: 600, fontSize: '0.875rem' }}>
                          {u.completedCourses?.length || 0}
                        </td>
                        <td style={{ padding: '0.875rem 1.25rem' }}>
                          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                            {(u.certificates || []).map(cert => {
                              const course = COURSES.find(c => c.id === cert.courseId);
                              return (
                                <Link key={cert.id} to={`/certificate/${cert.id}`} style={{
                                  textDecoration: 'none', fontSize: '0.65rem', fontWeight: 600,
                                  padding: '0.2rem 0.5rem', borderRadius: '9999px',
                                  background: 'rgba(34,197,94,0.12)', color: '#4ade80',
                                  border: '1px solid rgba(34,197,94,0.2)',
                                  display: 'flex', alignItems: 'center', gap: '0.25rem',
                                }}>
                                  <Award size={10} /> {cert.score}%
                                </Link>
                              );
                            })}
                            {(u.certificates?.length === 0) && <span style={{ color: '#4a5a78', fontSize: '0.78rem' }}>None</span>}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
