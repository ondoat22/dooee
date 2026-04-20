'use client';

import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

type Ctx = { theme: Theme; toggle: () => void };

const ThemeContext = createContext<Ctx | null>(null);

// SSR-safe: useLayoutEffect on client, useEffect on server
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with 'light' so server and first client render match (prevents hydration mismatch).
  // After mount, sync to localStorage — the FOUC inline script already applied the correct
  // class to <html>, so no visual flash.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(readStoredTheme());
  }, []);

  useIsoLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {}
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
