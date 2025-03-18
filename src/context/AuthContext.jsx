import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// This context provides authentication state and user information to the rest of the app.
const AuthContext = createContext({
  currentUser: null,
  loading: true,
});

// This hook allows components to access the authentication context.
export const useAuth = () => useContext(AuthContext);

/** This component wraps the app and provides the authentication context to all components.
 * @param children Automatically takes the component that AuthProvider wraps (App)
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const logout = () => signOut(auth);

  useEffect(() => {
    /* Subscribe to changes on firebase auth (login, logout, register)
       The return indicates that whenever the component is unmounted, the subscription will be removed
       In this case, it won't be removed because the component is always mounted
       But it's a good practice to return the unsubscribe function, because testing or Vite will use it in HMR
     */
    return onAuthStateChanged(auth, (user) => {
      // This will be called whenever the user logs in or out (and the first time it is rendered)
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    currentUser,
    loading,
    logout,
  };

  // Context provider changes data whenever currentUser or loading changes according to the useEffect subscription
  // children are the components that will be able to access the context (in this case, the entire app)
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* It waits for firebase to check auth state to render children, avoiding components to access an invalid state */}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
