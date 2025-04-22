import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAdmin(false); // Reset admin state when Firebase auth changes
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Admin login (hardcoded)
  const loginAdmin = (username, password) => {
    if (username === "admin" && password === "admin123") {
      setCurrentUser({ username: "admin" }); // Fake admin user object
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
  };

  const value = useMemo(
    () => ({
      currentUser,
      isAdmin,
      loginAdmin,
      logout,
      loading,
    }),
    [currentUser, isAdmin, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
