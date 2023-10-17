import { createContext, useContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  

  useEffect(() => {
    const cookies = parseCookies()
    console.log({ cookies })

    if (cookies) {
      setToken(cookies);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
