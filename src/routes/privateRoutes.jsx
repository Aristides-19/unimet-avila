import { AuthenticatedRoute } from '../context/AuthenticatedRoute.jsx';
import UserProfile from '../pages/Profile/UserProfile.jsx';
import Reserve from '../pages/Excursions/Reserve/Reserve.jsx';
import ReviewForm from '../pages/Excursions/Excursion/ReviewForm.jsx';
import CreatePost from '../pages/Foro/CreatePost.jsx';
import React from 'react';

export const privateRoutes = [
  {
    path: '/profile',
    element: (
      <AuthenticatedRoute scope='users'>
        <UserProfile />
      </AuthenticatedRoute>
    ),
  },
  {
    path: '/excursions/:excursionId/reserve',
    element: (
      <AuthenticatedRoute scope='Estudiante'>
        <Reserve />
      </AuthenticatedRoute>
    ),
  },
  {
    path: '/excursions/:excursionId/comment',
    element: (
      <AuthenticatedRoute scope='Estudiante'>
        <ReviewForm />
      </AuthenticatedRoute>
    ),
  },
  {
    path: '/forum/create-post',
    element: (
      <AuthenticatedRoute scope='users'>
        <CreatePost />
      </AuthenticatedRoute>
    ),
  },
];
