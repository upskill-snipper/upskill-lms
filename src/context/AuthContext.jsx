import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEFAULT_USERS = [
  {
    id: 'user-1',
    name: 'Calum MacLeod',
    email: 'calum@upskillenergy.com',
    password: 'Training2026!',
    role: 'student',
    createdAt: '2025-09-01T10:00:00Z',
    lastActive: new Date().toISOString(),
    enrolledCourses: ['course-1'],
  },
  {
    id: 'user-admin',
    name: 'Admin User',
    email: 'admin@upskillenergy.com',
    password: 'UpskillAdmin2026!',
    role: 'admin',
    createdAt: '2025-01-01T10:00:00Z',
    lastActive: new Date().toISOString(),
    enrolledCourses: [],
  },
];

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize users if not present
    const stored = localStorage.getItem('upskill_users');
    if (!stored) {
      localStorage.setItem('upskill_users', JSON.stringify(DEFAULT_USERS));
    }

    // Restore session
    const session = localStorage.getItem('upskill_session');
    if (session) {
      try {
        const users = JSON.parse(localStorage.getItem('upskill_users') || '[]');
        const userId = JSON.parse(session);
        const user = users.find(u => u.id === userId);
        if (user) {
          const { password: _, ...safeUser } = user;
          setCurrentUser(safeUser);
        }
      } catch (e) {
        localStorage.removeItem('upskill_session');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('upskill_users') || '[]');
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!user) return { success: false, error: 'Invalid email or password' };

    // Update last active
    const updated = users.map(u =>
      u.id === user.id ? { ...u, lastActive: new Date().toISOString() } : u
    );
    localStorage.setItem('upskill_users', JSON.stringify(updated));
    localStorage.setItem('upskill_session', JSON.stringify(user.id));

    const { password: _, ...safeUser } = user;
    setCurrentUser(safeUser);
    return { success: true };
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('upskill_users') || '[]');
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'An account with this email already exists' };
    }

    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
      role: 'student',
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      enrolledCourses: [],
    };

    localStorage.setItem('upskill_users', JSON.stringify([...users, newUser]));
    localStorage.setItem('upskill_session', JSON.stringify(newUser.id));

    const { password: _, ...safeUser } = newUser;
    setCurrentUser(safeUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('upskill_session');
    setCurrentUser(null);
  };

  const enrollCourse = (courseId) => {
    if (!currentUser) return;
    const users = JSON.parse(localStorage.getItem('upskill_users') || '[]');
    const updated = users.map(u => {
      if (u.id === currentUser.id) {
        const enrolled = u.enrolledCourses || [];
        if (!enrolled.includes(courseId)) {
          return { ...u, enrolledCourses: [...enrolled, courseId] };
        }
      }
      return u;
    });
    localStorage.setItem('upskill_users', JSON.stringify(updated));
    const updatedUser = updated.find(u => u.id === currentUser.id);
    const { password: _, ...safeUser } = updatedUser;
    setCurrentUser(safeUser);
  };

  const isEnrolled = (courseId) => {
    return currentUser?.enrolledCourses?.includes(courseId) || false;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout, enrollCourse, isEnrolled, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
