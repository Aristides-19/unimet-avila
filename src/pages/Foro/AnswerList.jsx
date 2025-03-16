import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import PropTypes from 'prop-types';

const AnswerList = ({ questionId }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'forumEntry'),
      where('parentId', '==', questionId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedAnswers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAnswers(fetchedAnswers);
    });

    return () => unsubscribe();
  }, [questionId]);

  return (
    <div>
      <h4>Respuestas</h4>
      {answers.map((answer) => (
        <div key={answer.id}>
          <p>{answer.content}</p>
          <small>Autor: {answer.authorId}</small>
        </div>
      ))}
    </div>
  );
};

AnswerList.propTypes = {
  questionId: PropTypes.string.isRequired,
};

export default AnswerList;
