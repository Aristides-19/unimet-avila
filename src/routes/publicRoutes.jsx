import Home from '../pages/Home/Home.jsx';
import Gallery from '../pages/Gallery/Gallery.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import Blog from '../pages/Blog/Blog.jsx';
import BlogContent from '../pages/Blog/BlogContent.jsx';
import { UnauthenticatedRoute } from '../context/UnauthenticatedRoute.jsx';
import Register from '../pages/Register/Register.jsx';
import Login from '../pages/Login/Login.jsx';
import React from 'react';
import Excursions from '../pages/Excursions/ExcursionsPage.jsx';
import Excursion from '../pages/Excursions/Excursion/Excursion.jsx';
import Foro from '../pages/Foro/ForumLayout.jsx';
import PostDetails from '../pages/Foro/PostDetails.jsx';

export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/excursions', element: <Excursions /> },
  { path: '/excursions/:excursionId', element: <Excursion /> },
  { path: '/forum', element: <Foro /> },
  { path: '/forum/:postId', element: <PostDetails /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/contact', element: <Contact /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:blogId', element: <BlogContent /> },
  {
    path: '/register',
    element: (
      <UnauthenticatedRoute>
        <Register />
      </UnauthenticatedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <UnauthenticatedRoute>
        <Login />
      </UnauthenticatedRoute>
    ),
  },
];
