import { Link } from 'react-router-dom';
import { 
  Zap, BookOpen, Award, Users, Shield, TrendingUp, ChevronRight, Star, 
  CheckCircle, Play, Globe, Clock, BarChart2, Wind, Flame, Gauge
} from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';

const FEATURES = [
  {
    icon: <Shield size={22} />,
    title: 'Industry-Recognised Standards',
    desc: 'Content aligned to OPITO, GWO, NEBOSH, and IEC 61511 — standards that operators and regulators actually use.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Genuine Technical Content',
    desc: 'Written by energy sector professionals. Not marketing material — actual engineering knowledge you can apply on the job.',
  },
  {
    icon: <Award size={22} />,
    title: 'Verifiable Certificates',
    desc: 'Every certificate carries a unique ID and verification URL. Printable, shareable, and auditable by employers.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Structured Pathways',
    desc: 'Four curated learning pathways: Energy Ready, Process Safety, Energy Transition, and Leadership & Competence.',
  },
  {
    icon: <Gauge size={22} />,
    title: 'Progress Tracking',
    desc: 'Module-by-module progress, inline quizzes, and a rigorous 20-question final assessment drawn from a large question bank.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Study Anywhere, Anytime',
    desc: 'Fully browser-based. No app to install. Study on shift, at home, or on the commute — your progress is always saved.',
  },
];

const PATHWAYS = [
  {
    id: 'energy-ready',
    label: 'Energy Ready',
    subtitle: 'New Entrants',
    icon: <Flame size={20} />,
    color: '#0ea5e9',
    desc: 'Foundational knowledge for anyone entering the energy sector — from sector structure to safety culture and career planning.',
  },
  {
    id: 'process-safety',
    label: 'Process Safety',
    subtitle: 'Safety Professionals',
    icon: <Shield size={20} />,
    color: '#f59e0b',
    desc: 'Advanced process safety management — HAZOP, bow-tie, SIL, COMAH, and major accident case studies.',
  },
  {
    id: 'energy-transition',
    label: 'Energy Transition',
    subtitle: 'O&G to Renewables',
    icon: <Wind size={20} />,
    color: '#22c55e',
    desc: 'Bridge your oil & gas skills into offshore wind, hydrogen, and the growing low-carbon energy economy.',
  },
  {
    id: 'leadership',
    label: 'Leadership',
    subtitle: 'Managers & Leaders',
    icon: <BarChart2 size={20} />,
    color: '#a855f7',
    desc: 'Competence management, operational risk, and safety leadership for supervisors and managers in high-hazard industries.',
  },
];

const STATS = [
  { value: '17', label: 'Courses', sub: 'across 4 pathways' },
  { value: '4,100+', label: 'Learners', sub: 'enrolled globally' },
  { value: '450+', label: 'Assessment Qs', sub: 'across all courses' },
  { value: '4.8★', label: 'Average Rating', sub: 'from verified learners' },
];

export default function Landing() {
  const featuredCourses = COURSES.filter(c => !c.comingSoon).slice(0, 4);

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f0f4f8' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-bg" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '6rem' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem 2rem' }}>
          <div style={{ maxWidth: '760px' }}>
            {/* Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge-blue">
                <Zap size={10} />
                Industry-Grade Energy Training
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-xl" style={{ color: '#f0f4f8', marginBottom: '1.25rem' }}>
              The professional training<br />
              platform for the{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #0ea5e9, #22c55e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>energy sector</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#8b9cbf', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '600px' }}>
              From offshore safety essentials to process safety management and energy transition skills — 
              genuine technical training built for workers who need to know the material, not just pass a test.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none', padding: '0.75rem 2rem', fontSize: '1rem' }}>
                Browse Courses
                <ChevronRight size={18} />
              </Link>
              <Link to="/register" style={{ 
                textDecoration: 'none', color: '#8b9cbf', fontSize: '0.9rem',
                display: 'flex', alignItems: 'center', gap: '0.375rem'
              }}>
                <Play size={14} fill="currentColor" />
                Start learning free
              </Link>
            </div>

            {/* Social proof */}
            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <span style={{ color: '#8b9cbf', fontSize: '0.85rem' }}>
                Rated 4.8/5 by <strong style={{ color: '#c0cce0' }}>4,100+ energy professionals</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ 
        background: 'rgba(14,165,233,0.05)', 
        borderTop: '1px solid rgba(14,165,233,0.1)', 
        borderBottom: '1px solid rgba(14,165,233,0.1)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0ea5e9', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ color: '#f0f4f8', fontWeight: 600, fontSize: '0.9rem' }}>{s.label}</div>
                <div style={{ color: '#8b9cbf', fontSize: '0.75rem' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Pathways */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="label-mono" style={{ color: '#0ea5e9', display: 'block', marginBottom: '0.75rem' }}>Learning Pathways</span>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Four routes to professional excellence</h2>
          <p style={{ color: '#8b9cbf', maxWidth: '540px', margin: '0 auto' }}>
            Whether you're new to the sector or an experienced professional developing new capabilities — 
            there's a structured pathway for you.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {PATHWAYS.map((pw) => (
            <Link key={pw.id} to={`/courses?pathway=${pw.id}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '1.75rem', height: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: `${pw.color}15`,
                  border: `1px solid ${pw.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: pw.color,
                }}>
                  {pw.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f0f4f8', marginBottom: '0.25rem' }}>{pw.label}</div>
                  <div className="label-mono" style={{ color: pw.color, marginBottom: '0.75rem', fontSize: '0.65rem' }}>{pw.subtitle}</div>
                  <p style={{ color: '#8b9cbf', fontSize: '0.85rem', lineHeight: 1.6 }}>{pw.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.375rem', color: pw.color, fontSize: '0.8rem', fontWeight: 600 }}>
                  Explore pathway <ChevronRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section style={{ background: '#0d1526', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="label-mono" style={{ color: '#0ea5e9', display: 'block', marginBottom: '0.5rem' }}>Featured Courses</span>
              <h2 className="heading-lg">Start with the essentials</h2>
            </div>
            <Link to="/courses" className="btn-secondary" style={{ textDecoration: 'none' }}>
              View all courses <ChevronRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="label-mono" style={{ color: '#0ea5e9', display: 'block', marginBottom: '0.75rem' }}>Why Upskill Energy</span>
          <h2 className="heading-lg">Built for the industry, not around it</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="card" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#0ea5e9',
              }}>
                {f.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#f0f4f8', marginBottom: '0.5rem' }}>{f.title}</div>
                <p style={{ color: '#8b9cbf', fontSize: '0.85rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0d1a2e, #0a0e1a)',
        borderTop: '1px solid rgba(14,165,233,0.15)',
        padding: '5rem 0',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>
            Ready to build your energy career?
          </h2>
          <p style={{ color: '#8b9cbf', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Join thousands of energy professionals who've used Upskill Energy to develop their knowledge, 
            demonstrate their competence, and advance their careers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', padding: '0.875rem 2.5rem', fontSize: '1rem' }}>
              Create free account
              <ChevronRight size={18} />
            </Link>
            <Link to="/courses" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Browse courses
            </Link>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['No credit card required', 'Instant access', 'Industry-recognised certificates'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#8b9cbf', fontSize: '0.8rem' }}>
                <CheckCircle size={12} color="#22c55e" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        borderTop: '1px solid rgba(255,255,255,0.05)', 
        padding: '2rem 0',
        background: '#080c17',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '7px',
              background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Zap size={14} color="white" />
            </div>
            <span style={{ color: '#8b9cbf', fontSize: '0.8rem' }}>Upskill Energy Training Division</span>
          </div>
          <div style={{ color: '#4a5a78', fontSize: '0.75rem' }}>
            © 2026 Upskill Energy. Professional training for the global energy sector.
          </div>
        </div>
      </footer>
    </div>
  );
}

function CourseCard({ course }) {
  const pathwayColors = {
    'energy-ready': '#0ea5e9',
    'process-safety': '#f59e0b',
    'energy-transition': '#22c55e',
    'leadership': '#a855f7',
  };
  const color = pathwayColors[course.pathway] || '#0ea5e9';

  return (
    <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
      <div className="card" style={{ 
        height: '100%', display: 'flex', flexDirection: 'column',
        borderTop: `2px solid ${color}`,
        overflow: 'hidden', cursor: 'pointer',
      }}>
        {/* Header */}
        <div style={{ padding: '1.25rem 1.25rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
            <span className="badge" style={{ 
              background: `${color}15`, color, 
              border: `1px solid ${color}25`,
              fontSize: '0.65rem', letterSpacing: '0.08em',
            }}>
              {course.level}
            </span>
            <div style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: 600 }}>
              £{course.price}
            </div>
          </div>
          <h3 style={{ color: '#f0f4f8', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3, marginBottom: '0.625rem' }}>
            {course.title}
          </h3>
          <p style={{ color: '#8b9cbf', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {course.description.substring(0, 110)}...
          </p>
        </div>

        {/* Outcomes preview */}
        <div style={{ padding: '0 1.25rem', flex: 1 }}>
          {course.outcomes?.slice(0, 3).map((o, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.375rem', alignItems: 'flex-start' }}>
              <CheckCircle size={12} color="#22c55e" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span style={{ color: '#8b9cbf', fontSize: '0.75rem', lineHeight: 1.5 }}>{o}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ 
          padding: '0.875rem 1.25rem', 
          borderTop: '1px solid rgba(255,255,255,0.06)',
          marginTop: '1rem',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ color: '#8b9cbf', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={11} /> {course.duration}
            </span>
            <span style={{ color: '#8b9cbf', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Users size={11} /> {course.enrolled.toLocaleString()}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b', fontSize: '0.72rem' }}>
            <Star size={11} fill="#f59e0b" />
            {course.rating}
          </div>
        </div>
      </div>
    </Link>
  );
}
