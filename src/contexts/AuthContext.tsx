
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier si un token existe dans localStorage
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simuler l'appel API d'authentification
    return new Promise((resolve) => {
      setTimeout(() => {
        // Vérifier si l'utilisateur existe dans localStorage ou utiliser les identifiants par défaut
        const storedUsers = localStorage.getItem('registered_users');
        let users = [];
        
        if (storedUsers) {
          try {
            users = JSON.parse(storedUsers);
          } catch (error) {
            console.error('Error parsing stored users:', error);
          }
        }

        // Vérifier les identifiants par défaut ou les utilisateurs enregistrés
        const foundUser = users.find((u: any) => u.email === email && u.password === password);
        const isDefaultAdmin = email === 'admin@example.com' && password === 'admin123';

        if (foundUser || isDefaultAdmin) {
          const mockUser = foundUser ? {
            id: foundUser.id,
            email: foundUser.email,
            name: foundUser.name,
            role: foundUser.role || 'user' as const,
            avatar: foundUser.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
          } : {
            id: '1',
            email: 'admin@example.com',
            name: 'Admin User',
            role: 'admin' as const,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
          };
          
          setUser(mockUser);
          localStorage.setItem('auth_token', 'mock_jwt_token');
          localStorage.setItem('user_data', JSON.stringify(mockUser));
          setIsLoading(false);
          resolve(true);
        } else {
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // Récupérer les utilisateurs existants
        const storedUsers = localStorage.getItem('registered_users');
        let users = [];
        
        if (storedUsers) {
          try {
            users = JSON.parse(storedUsers);
          } catch (error) {
            console.error('Error parsing stored users:', error);
          }
        }

        // Vérifier si l'email existe déjà
        const existingUser = users.find((u: any) => u.email === email);
        if (existingUser) {
          setIsLoading(false);
          resolve(false);
          return;
        }

        // Créer un nouvel utilisateur
        const newUser = {
          id: Date.now().toString(),
          email,
          password,
          name,
          role: 'user' as const,
          avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face`
        };

        // Sauvegarder dans localStorage
        users.push(newUser);
        localStorage.setItem('registered_users', JSON.stringify(users));

        // Connecter automatiquement l'utilisateur
        const userForAuth = {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
          avatar: newUser.avatar
        };

        setUser(userForAuth);
        localStorage.setItem('auth_token', 'mock_jwt_token');
        localStorage.setItem('user_data', JSON.stringify(userForAuth));
        
        setIsLoading(false);
        resolve(true);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
