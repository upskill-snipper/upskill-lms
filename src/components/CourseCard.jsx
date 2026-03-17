import { useNavigate } from 'react-router-dom';
import Badge from './Badge';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import ProgressRing from './ProgressRing';

const PATHWAY_COLORS = {
  'energy-ready': { from: '#1e3a8a', to: '#3b82f6' },
  'process-safety': { from: '#78350f', to: '#f59e0b' },
  'energy-transition': { from: '#14532d', to: '#22c55e' },
  'leadership': { from: '#4c1d95', to: '#a855f7' },
};

export default function CourseCard({ course, onEnrol }) {
  const navigate = useNavigate();
  const { currentUser, isEnrolled, enrollCourse } = useAuth();
  const { getModuleProgress } = useProgress();

  const enrolled = isEnrolled(course.id);
  const pct = enrolled ? getModuleProgress(course.id, course.moduleList?.length || course.modules) : 0;
  const colors = PATHWAY_COLORS[course.pathway] || { from: '#1e3a8a', to: '#3b82f6' };

  const handleEnrol = (e) => {
    e.stopPropagation();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    enrollCourse(course.id);
    if (onEnrol) onEnrol(course.id);
    navigate(`/course/${course.id}`);
  };

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        background: '#131d35',
        border: '1px solid #1e2d4a',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s, border-color 0.2s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = '#3b82f6';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#1e2d4a';
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: '140px',
        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '1rem',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>
            {course.pathway === 'energy-ready' ? '⚡' :
             course.pathway === 'process-safety' ? '🛡️' :
             course.pathway === 'energy-transition' ? '🌱' : '🎯'}
          </div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {course.pathway.replace(/-/g, ' ')}
          </div>
        </div>
        {enrolled && (
          <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
            <ProgressRing pct={pct} size={44} stroke={4} />
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Badge label={course.level} variant={course.level === 'Foundation' ? 'foundation' : course.level === 'Intermediate' ? 'intermediate' : 'advanced'} />
          {enrolled && <Badge label="Enrolled" variant="cyan" size="xs" />}
        </div>

        <h3 style={{ color: '#f1f5f9', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.4 }}>
          {course.title}
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>
          {course.subtitle}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', color: '#64748b', fontSize: '0.75rem' }}>
            <span>⏱ {course.duration}</span>
            <span>📚 {course.modules} modules</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b', fontSize: '0.75rem' }}>
            <span>★</span>
            <span>{course.rating}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: '1.1rem' }}>£{course.price}</span>
          {enrolled ? (
            <button
              onClick={e => { e.stopPropagation(); navigate(`/learn/${course.id}`); }}
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5rem 1rem',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleEnrol}
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5rem 1rem',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              Enrol Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
