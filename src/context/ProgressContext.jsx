import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'upskill_progress';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function ProgressProvider({ children }) {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const getUserProgress = useCallback((courseId) => {
    if (!currentUser) return null;
    const key = `${currentUser.id}:${courseId}`;
    return progress[key] || {
      completedModules: [],
      quizScores: {},
      assessmentAttempts: [],
      certificate: null,
      startedAt: null,
      lastActivity: null,
    };
  }, [currentUser, progress]);

  const markModuleComplete = useCallback((courseId, moduleId) => {
    if (!currentUser) return;
    const key = `${currentUser.id}:${courseId}`;
    const all = loadProgress();
    const cur = all[key] || { completedModules: [], quizScores: {}, assessmentAttempts: [], certificate: null, startedAt: new Date().toISOString(), lastActivity: null };

    if (!cur.completedModules.includes(moduleId)) {
      cur.completedModules = [...cur.completedModules, moduleId];
    }
    cur.lastActivity = new Date().toISOString();
    if (!cur.startedAt) cur.startedAt = new Date().toISOString();

    all[key] = cur;
    saveProgress(all);
    setProgress({ ...all });
  }, [currentUser]);

  const saveQuizScore = useCallback((courseId, moduleId, score, total) => {
    if (!currentUser) return;
    const key = `${currentUser.id}:${courseId}`;
    const all = loadProgress();
    const cur = all[key] || { completedModules: [], quizScores: {}, assessmentAttempts: [], certificate: null, startedAt: new Date().toISOString(), lastActivity: null };

    cur.quizScores = {
      ...cur.quizScores,
      [moduleId]: { score, total, pct: Math.round((score / total) * 100), date: new Date().toISOString() }
    };
    cur.lastActivity = new Date().toISOString();
    all[key] = cur;
    saveProgress(all);
    setProgress({ ...all });
  }, [currentUser]);

  const startAssessment = useCallback((courseId) => {
    if (!currentUser) return;
    const key = `${currentUser.id}:${courseId}`;
    const all = loadProgress();
    const cur = all[key] || { completedModules: [], quizScores: {}, assessmentAttempts: [], certificate: null, startedAt: null, lastActivity: null };
    cur.lastActivity = new Date().toISOString();
    all[key] = cur;
    saveProgress(all);
    setProgress({ ...all });
  }, [currentUser]);

  const completeAssessment = useCallback((courseId, score, total) => {
    if (!currentUser) return null;
    const key = `${currentUser.id}:${courseId}`;
    const all = loadProgress();
    const cur = all[key] || { completedModules: [], quizScores: {}, assessmentAttempts: [], certificate: null, startedAt: null, lastActivity: null };

    const pct = Math.round((score / total) * 100);
    const passed = pct >= 70;
    const attempt = {
      date: new Date().toISOString(),
      score,
      total,
      pct,
      passed,
    };

    cur.assessmentAttempts = [...(cur.assessmentAttempts || []), attempt];
    cur.lastActivity = new Date().toISOString();

    let certId = null;
    if (passed && !cur.certificate) {
      certId = `CERT-${courseId.toUpperCase()}-${currentUser.id.slice(-6).toUpperCase()}-${Date.now()}`;
      cur.certificate = {
        id: certId,
        courseId,
        userId: currentUser.id,
        userName: currentUser.name,
        issuedAt: new Date().toISOString(),
        score: pct,
      };
    } else if (cur.certificate) {
      certId = cur.certificate.id;
    }

    all[key] = cur;
    saveProgress(all);
    setProgress({ ...all });
    return { passed, pct, certId };
  }, [currentUser]);

  const issueCertificate = useCallback((courseId) => {
    if (!currentUser) return null;
    const key = `${currentUser.id}:${courseId}`;
    const all = loadProgress();
    return all[key]?.certificate || null;
  }, [currentUser, progress]);

  const getCertificate = useCallback((certId) => {
    const all = loadProgress();
    for (const val of Object.values(all)) {
      if (val.certificate?.id === certId) return val.certificate;
    }
    return null;
  }, []);

  const getModuleProgress = useCallback((courseId, totalModules) => {
    if (!currentUser) return 0;
    const p = getUserProgress(courseId);
    if (!p || totalModules === 0) return 0;
    return Math.round((p.completedModules.length / totalModules) * 100);
  }, [currentUser, getUserProgress]);

  const canTakeAssessment = useCallback((courseId, totalModules) => {
    if (!currentUser) return false;
    const p = getUserProgress(courseId);
    if (!p) return false;
    return p.completedModules.length >= totalModules;
  }, [currentUser, getUserProgress]);

  const getLastAttempt = useCallback((courseId) => {
    if (!currentUser) return null;
    const p = getUserProgress(courseId);
    const attempts = p?.assessmentAttempts || [];
    return attempts.length > 0 ? attempts[attempts.length - 1] : null;
  }, [currentUser, getUserProgress]);

  const canRetryAssessment = useCallback((courseId) => {
    const last = getLastAttempt(courseId);
    if (!last) return true;
    if (last.passed) return false;
    const nextAllowed = new Date(last.date).getTime() + 24 * 60 * 60 * 1000;
    return Date.now() >= nextAllowed;
  }, [getLastAttempt]);

  return (
    <ProgressContext.Provider value={{
      getUserProgress,
      markModuleComplete,
      saveQuizScore,
      startAssessment,
      completeAssessment,
      issueCertificate,
      getCertificate,
      getModuleProgress,
      canTakeAssessment,
      getLastAttempt,
      canRetryAssessment,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
