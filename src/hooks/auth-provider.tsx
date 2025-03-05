'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

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
  const tokenKey = 'token';

  useEffect(() => {
    // const token = localStorage.getItem('@tms.CRM:token');
    // const storedUser = localStorage.getItem('@tms.CRM:user');
    // if (token && storedUser) {
    //   setUser(JSON.parse(storedUser));
    // } else {
    //   setUser(null);
    //   // router.push('/login');
    // }
    // setLoading(false);
  }, [router]);

  async function signIn({ email, password }: { email: string; password: string }) {
    setLoading(true);

    const validEmail = 'test@gmail.com';
    const validPassword = 'password';

    if (email !== validEmail || password !== validPassword) {
      alert('Invalid email or password');
      return;
    }

    const dummyUser: User = { id: '1', name: 'Usuário Teste', email };

    Cookies.set(tokenKey, 'your-secret-token', { expires: 1, secure: true });

    setUser(dummyUser);
    router.push('/');
  }

  async function signOut() {
    Cookies.remove(tokenKey);

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
