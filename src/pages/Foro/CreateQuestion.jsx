import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const CreateQuestion = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'forumEntry'), {
        authorId: userId,
        title,
        content,
        type: 'question',
        createdAt: Timestamp.now(),
        likes: [],
        parentId: null,
      });
      setTitle('');
      setContent('');
      alert('Pregunta publicada');
    } catch (error) {
      console.error('Error al publicar pregunta:', error);
      {
        /* pendiente agregar mensaje de alerta de publicacion fallida al usuario */
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Titulo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder='Escribe tu pregunta'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type='submit'>Publicar</button>
    </form>
  );
};
CreateQuestion.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default CreateQuestion;
