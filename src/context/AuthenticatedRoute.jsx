import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types';
import { useUser } from '../hooks/useUsers.js';

export const AuthenticatedRoute = ({ scope, children }) => {
  const { currentUser: currentUser } = useAuth();
  const { user, loading } = useUser(currentUser?.uid);
  if (!currentUser) return <Navigate to='/login' />;
  if (loading) return <></>;

  return user?.role === scope ? children : <Navigate to='/' replace />;
};

AuthenticatedRoute.propTypes = {
  scope: PropTypes.oneOf(['admin', 'Guía', 'Estudiante']).isRequired,
  children: PropTypes.node.isRequired,
};
