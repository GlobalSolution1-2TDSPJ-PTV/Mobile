import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  email: string;
  senha: string;
};

type AuthContextType = {
  user: User | null;
  register: (email: string, senha: string) => void;
  login: (email: string, senha: string) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const register = (email: string, senha: string) => {
    setUser({ email, senha });
  };

  const login = (email: string, senha: string) => {
    if (!user) return false;
    return user.email === email && user.senha === senha;
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
}
