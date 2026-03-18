import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { seedDemoData, getCurrentUser } from './utils/auth';

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
import NotFound from './pages/NotFound';

function ProtectedRoute({ children, adminOnly = false }) {
  const user = getCurrentUser();
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  useEffect(() => {
    seedDemoData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CourseCatalogue />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/learn/:courseId/module/:moduleId" element={<ProtectedRoute><CoursePlayer /></ProtectedRoute>} />
        <Route path="/learn/:courseId/assessment" element={<ProtectedRoute><Assessment /></ProtectedRoute>} />
        <Route path="/certificate/:certId" element={<Certificate />} />
        <Route path="/admin" element={<ProtectedRoute adminOnly><AdminPanel /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
