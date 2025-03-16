import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const AnswerQuestion = ({ parentId, userId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'forumEntry'), {
        authorId: userId,
        content,
        type: 'answer',
        createdAt: Timestamp.now(),
        parentId,
      });
      setContent('');
      alert('Respuesta publicada');
    } catch (error) {
      console.error('Error al publicar respuesta:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder='Escribe tu respuesta'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type='submit'>Responder</button>
    </form>
  );
};

AnswerQuestion.propTypes = {
  parentId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default AnswerQuestion;
