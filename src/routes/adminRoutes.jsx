import AdminStudents from '../pages/Admin/AdminStudents.jsx';
import React from 'react';
import { AuthenticatedRoute } from '../context/AuthenticatedRoute.jsx';

export const adminRoutes = [
  {
    path: '/students-admin',
    element: (
      <AuthenticatedRoute scope='admin'>
        <AdminStudents />
      </AuthenticatedRoute>
    ),
  },
  {
    path: '/guides-admin',
    element: <AuthenticatedRoute scope='admin'></AuthenticatedRoute>,
  },
  {
    path: '/excursions-admin',
    element: <AuthenticatedRoute scope='admin'></AuthenticatedRoute>,
  },
  {
    path: '/blog-admin',
    element: <AuthenticatedRoute scope='admin'></AuthenticatedRoute>,
  },
];
