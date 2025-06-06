import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import getApiUrl from '../utils/api';

// Tipagem do usuário (ajuste conforme seus dados reais)
interface User {
  email: string;
}

// Tipagem do contexto
interface AuthContextType {
  user: { email: string } | null;
  token: string | null;
  login: (email: string, senha: string) => Promise<void>;
  register: (email: string, senha: string, nome: string, telefone: string, tipoUsuario: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Contexto com valor inicial `undefined`
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tipagem para o AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [refreshtoken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('authToken');
      if (storedToken) {
        setToken(storedToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
    };

    loadToken();
  }, []);

  const login = async (email: string, senha: string) => {
    const response = await axios.post(`${getApiUrl()}/auth/login`, { email, "password": senha });
    const token = response.data.token;

    await AsyncStorage.setItem('authToken', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser({ email });
    setToken(token);
    setRefreshToken(response.data.refreshToken);
  };

  const register = async (email: string, senha: string, nome: string, telefone: string, tipoUsuario: string) => {
    const tipoUsuarioFormatado = tipoUsuario.trim().toUpperCase();
    
    await axios.post(`${getApiUrl()}/api/usuarios`, {
      nome,
      email,
      senha,
      telefone,
      tipoUsuario: tipoUsuarioFormatado
    });

    await login(email, senha);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('authToken');
    setUser(null);
    setToken(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
