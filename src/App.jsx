import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/LogIn/Login';
import Excursions from './pages/Excursions/ExcursionsPage';
import Excursion from './pages/Excursions/Excursion/Excursion';
import Reserve from './pages/Excursions/Reserve/Reserve';
import Blog from './pages/Blog/BlogArticle';
import BlogContent from './pages/Blog/BlogContent';
import Foro from './pages/Foro/ForumLayout.jsx';
import AdminStudents from './pages/Admin/AdminStudents';
import { UnauthenticatedRoute } from './context/UnauthenticatedRoute.jsx';
import Layout from './components/Layout.jsx';
import CreatePost from './pages/Foro/CreatePost.jsx';
import PostDetails from './pages/Foro/PostDetails';
import { AuthenticatedRoute } from './context/AuthenticatedRoute.jsx';
import ReviewForm from './pages/Excursions/Excursion/ReviewForm.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/adminStudents' element={<AdminStudents />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/excursions' element={<Excursions />} />
        <Route path='/excursions/:excursionId' element={<Excursion />} />
        <Route
          path='/excursions/:excursionId/reserve'
          element={
            <AuthenticatedRoute scope='Estudiante'>
              <Reserve />
            </AuthenticatedRoute>
          }
        />
        <Route
          path='/excursions/:excursionId/comment'
          element={
            <AuthenticatedRoute scope='Estudiante'>
              <ReviewForm />
            </AuthenticatedRoute>
          }
        />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:blogId' element={<BlogContent />} />
        <Route path='/forum' element={<Foro />} />
        <Route path='/forum/:postId' element={<PostDetails />} />
        <Route
          path='/forum/create-post'
          element={
            <AuthenticatedRoute scope='users'>
              <CreatePost />
            </AuthenticatedRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
        <Route
          path='/register'
          element={
            <UnauthenticatedRoute>
              <Register />
            </UnauthenticatedRoute>
          }
        />
        <Route
          path='/login'
          element={
            <UnauthenticatedRoute>
              <Login />
            </UnauthenticatedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
