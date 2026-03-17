import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CourseCatalogue from './pages/CourseCatalogue';
import CourseDetail from './pages/CourseDetail';
import CoursePlayer from './pages/CoursePlayer';
import Assessment from './pages/Assessment';
import Certificate from './pages/Certificate';
import AdminPanel from './pages/AdminPanel';

function Layout({ children, noNav = false }) {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a' }}>
      {!noNav && <Navbar />}
      {children}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/upskill-lms/">
      <AuthProvider>
        <ProgressProvider>
          <Routes>
            <Route path="/" element={<Layout noNav><Landing /></Layout>} />
            <Route path="/login" element={<Layout noNav><Login /></Layout>} />
            <Route path="/register" element={<Layout noNav><Register /></Layout>} />
            <Route path="/courses" element={<Layout><CourseCatalogue /></Layout>} />
            <Route path="/course/:id" element={<Layout><CourseDetail /></Layout>} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout><Dashboard /></Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/learn/:courseId"
              element={
                <ProtectedRoute>
                  <CoursePlayer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/learn/:courseId/assessment"
              element={
                <ProtectedRoute>
                  <Assessment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/certificate/:certId"
              element={
                <ProtectedRoute>
                  <Layout noNav><Certificate /></Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <Layout><AdminPanel /></Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ fontSize: '4rem' }}>404</div>
                    <div style={{ fontSize: '1.2rem' }}>Page not found</div>
                    <a href="/upskill-lms/" style={{ color: '#60a5fa', textDecoration: 'none' }}>Go Home</a>
                  </div>
                </Layout>
              }
            />
          </Routes>
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
