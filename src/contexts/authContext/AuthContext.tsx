import React, { useContext, useState, useEffect, ReactNode, PropsWithChildren } from 'react';
import { auth } from '../../api/fBStoreConstants';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from '../../shared/types/user';

type Context = {
  currentUser: User | null;
  userLoggedIn: boolean;
  loading: boolean;
};
const AuthContext = React.createContext<Context>({
  currentUser: null,
  userLoggedIn: false,
  loading: true
});

export const useAuth = () => {
  return useContext(AuthContext);
};

interface Props {
  children: ReactNode;
}

// type Props = PropsWithChildren<{}>  // при такой типизации children - необязателен!

export function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser); // onAuthStateChanged в библиотеке
    return unsubscribe;
  }, []);

  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {/* {!loading && children} */}

      {loading ? <span> Загрузка </span> : children}
    </AuthContext.Provider>
  );
}
// понятная запись условия вместо заком. строки: если загрузка
// закончена, то тут будет рендер children
