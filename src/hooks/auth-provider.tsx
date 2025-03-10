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
  signIn: (credentials: UserCredentials) => Promise<boolean>;
  signOut: () => void;
}

interface UserCredentials {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
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

  const signIn = async (credentials: UserCredentials): Promise<boolean> => {
    // TODO(Nat): call api, passing the email and pass, expecting to get the token
    if (credentials.email !== 'test@gmail.com' || credentials.password !== 'password') {
      return false;
    }

    const token = 'your-secret-token';
    const dummyUser: User = { id: '1', name: 'Usuário Teste', email: credentials.email };

    Cookies.set(tokenKey, token, { expires: 1, secure: true });
    setUser(dummyUser);

    return true;
  };

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
