import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import CreateQuestion from './CreateQuestion';
import { db } from '../../firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import PropTypes from 'prop-types';
import styles from './Foro.module.css';
import sidebarStyles from './Sidebar.module.css'; // Add this line

const Foro = ({ currentUser }) => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  // Obtener preguntas desde Firebase
  useEffect(() => {
    const q = query(
      collection(db, 'forumEntry'),
      where('type', '==', 'question')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedQuestions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(fetchedQuestions);
      setFilteredQuestions(fetchedQuestions);
    });

    return () => unsubscribe();
  }, []);

  const handleSearch = (query) => {
    setFilteredQuestions(
      questions.filter((q) =>
        q.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.foro}>
      <Sidebar styles={sidebarStyles} /> {/* Pass styles as prop */}
      <div className={styles.mainContent}>
        <SearchBar onSearch={handleSearch} />
        <CreateQuestion userId={currentUser?.userId} />
        <QuestionList questions={filteredQuestions} currentUser={currentUser} />
      </div>
    </div>
  );
};
Foro.propTypes = {
  currentUser: PropTypes.shape({
    userId: PropTypes.string,
  }),
};

export default Foro;
