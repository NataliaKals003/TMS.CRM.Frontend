// 'use client';

// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// // import { api } from '../services/api';

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface SignInCredentials {
//   email: string;
//   password: string;
// }

// interface AuthContextData {
//   user: User | null;
//   signIn: (credentials: SignInCredentials) => Promise<void>;
// }

// const AuthContext = createContext<AuthContextData | undefined>(undefined);

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const token = typeof window !== 'undefined' ? localStorage.getItem('@TMS.CRM:token') : null;
//     const storedUser = typeof window !== 'undefined' ? localStorage.getItem('@TMS.CRM:user') : null;

//     if (token && storedUser) {
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   async function signIn({ email, password }: SignInCredentials) {
//     try {
//     //   const response = await api.post('/sessions', { email, password });
//       const { user, token } = response.data;

//       localStorage.setItem('@TMS.CRM:user', JSON.stringify(user));
//       localStorage.setItem('@TMS.CRM:token', token);

//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setUser(user);
//     } catch (error: any) {
//       if (error.response) {
//         alert(error.response.data.message);
//       } else {
//         alert('Error SignIn');
//       }
//     }
//   }

//   return <AuthContext.Provider value={{ user, signIn }}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }
