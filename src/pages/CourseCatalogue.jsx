import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, Star, Clock, Users, CheckCircle, Lock, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';

const PATHWAY_OPTS = [
  { value: '', label: 'All Pathways' },
  { value: 'energy-ready', label: 'Energy Ready' },
  { value: 'process-safety', label: 'Process Safety' },
  { value: 'energy-transition', label: 'Energy Transition' },
  { value: 'leadership', label: 'Leadership & Competence' },
];

const LEVEL_OPTS = [
  { value: '', label: 'All Levels' },
  { value: 'Foundation', label: 'Foundation' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
];

const pathwayColors = {
  'energy-ready': '#0ea5e9',
  'process-safety': '#f59e0b',
  'energy-transition': '#22c55e',
  'leadership': '#a855f7',
};

export default function CourseCatalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('');
  const pathway = searchParams.get('pathway') || '';

  function setPathway(val) {
    if (val) setSearchParams({ pathway: val });
    else setSearchParams({});
  }

  const filtered = useMemo(() => {
    return COURSES.filter(c => {
      if (pathway && c.pathway !== pathway) return false;
      if (level && c.level !== level) return false;
      if (search) {
        const q = search.toLowerCase();
        return c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
      }
      return true;
    });
  }, [pathway, level, search]);

  const available = filtered.filter(c => !c.comingSoon);
  const coming = filtered.filter(c => c.comingSoon);

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />

      {/* Header */}
      <section style={{ 
        background: 'linear-gradient(180deg, #0d1829 0%, #0a0e1a 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '3rem 0 2.5rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="label-mono" style={{ color: '#0ea5e9', marginBottom: '0.5rem' }}>Course Catalogue</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#f0f4f8', marginBottom: '0.5rem' }}>
            {COURSES.filter(c => !c.comingSoon).length} professional courses
          </h1>
          <p style={{ color: '#8b9cbf' }}>
            Across 4 learning pathways — from sector fundamentals to advanced process safety management.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Filters */}
        <div style={{ 
          display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center',
          marginBottom: '2rem', padding: '1rem',
          background: '#0d1526', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.07)',
        }}>
          {/* Search */}
          <div style={{ position: 'relative', flex: '1 1 220px' }}>
            <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#4a5a78' }} />
            <input
              className="input-field"
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: '2.25rem' }}
            />
          </div>

          {/* Pathway filter */}
          <select
            className="input-field"
            value={pathway}
            onChange={e => setPathway(e.target.value)}
            style={{ flex: '0 1 auto', minWidth: '160px' }}
          >
            {PATHWAY_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>

          {/* Level filter */}
          <select
            className="input-field"
            value={level}
            onChange={e => setLevel(e.target.value)}
            style={{ flex: '0 1 auto', minWidth: '140px' }}
          >
            {LEVEL_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>

          <div style={{ color: '#8b9cbf', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
            {filtered.length} results
          </div>
        </div>

        {/* Available Courses */}
        {available.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {available.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        )}

        {/* Coming Soon */}
        {coming.length > 0 && (
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f4f8' }}>Coming Soon</h2>
              <p style={{ color: '#8b9cbf', fontSize: '0.85rem' }}>These courses are in development. Register your interest.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              {coming.map(course => (
                <div key={course.id} className="card" style={{ padding: '1.25rem', opacity: 0.7 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span className="badge badge-gray"><Lock size={10} /> Coming Soon</span>
                    <span style={{ color: '#8b9cbf', fontSize: '0.8rem', fontWeight: 600 }}>£{course.price}</span>
                  </div>
                  <h3 style={{ color: '#f0f4f8', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{course.title}</h3>
                  <p style={{ color: '#8b9cbf', fontSize: '0.78rem', lineHeight: 1.5 }}>{course.description.substring(0, 100)}...</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#8b9cbf' }}>
            <Search size={48} strokeWidth={1} style={{ marginBottom: '1rem', opacity: 0.5 }} />
            <p>No courses match your filters. Try adjusting the search or pathway.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  const color = pathwayColors[course.pathway] || '#0ea5e9';
  return (
    <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
      <div className="card" style={{ 
        height: '100%', display: 'flex', flexDirection: 'column',
        borderTop: `2px solid ${color}`,
        cursor: 'pointer',
      }}>
        <div style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
            <span className="badge" style={{ 
              background: `${color}15`, color, border: `1px solid ${color}25`,
            }}>
              {course.level}
            </span>
            <span style={{ color: '#f59e0b', fontWeight: 700, fontSize: '0.9rem' }}>£{course.price}</span>
          </div>
          <h3 style={{ color: '#f0f4f8', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3, marginBottom: '0.5rem' }}>
            {course.title}
          </h3>
          <p style={{ color: '#8b9cbf', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {course.description.substring(0, 120)}...
          </p>
          {course.outcomes?.slice(0, 3).map((o, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.3rem', alignItems: 'flex-start' }}>
              <CheckCircle size={11} color="#22c55e" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span style={{ color: '#8b9cbf', fontSize: '0.73rem', lineHeight: 1.5 }}>{o}</span>
            </div>
          ))}
        </div>
        <div style={{ 
          padding: '0.875rem 1.25rem', marginTop: 'auto',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ color: '#8b9cbf', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={11} /> {course.duration}
            </span>
            <span style={{ color: '#8b9cbf', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Users size={11} /> {course.enrolled?.toLocaleString()}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b', fontSize: '0.72rem' }}>
            <Star size={11} fill="#f59e0b" /> {course.rating}
          </div>
        </div>
      </div>
    </Link>
  );
}
