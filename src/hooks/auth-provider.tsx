'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (credentials: { email: string; password: string }) => void;
  signOut: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token');
    const storedUser = localStorage.getItem('@foodexplorer:user');

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
      router.push('/login');
    }

    setLoading(false);
  }, [router]);

  function signIn({ email, password }: { email: string; password: string }) {
    const validEmail = 'test@gmail.com';
    const validPassword = 'password';

    if (email !== validEmail || password !== validPassword) {
      alert('Invalid email or password');
      return;
    }

    const dummyUser: User = { id: '1', name: 'Usuário Teste', email };

    localStorage.setItem('@tms.CRM:user', JSON.stringify(dummyUser));
    localStorage.setItem('@tms.CRM:token', 'fake-token');

    setUser(dummyUser);
    router.push('/');
  }

  async function signOut() {
    localStorage.removeItem('@tms.CRM:token');
    localStorage.removeItem('@tms.CRM:user');

    setUser(null);
    router.push('/login');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
