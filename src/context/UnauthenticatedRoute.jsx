import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types';

export const UnauthenticatedRoute = ({ children }) => {
  const { currentUser: currentUser } = useAuth();

  return currentUser ? <Navigate to='/home' replace /> : children;
};

UnauthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
