import React from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import AnswerQuestion from './AnswerQuestion';

const QuestionList = ({ questions, currentUser }) => {
  if (!questions || questions.length === 0) {
    return <p>No hay preguntas disponibles en este momento.</p>;
  }

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.content}</p>
          <small>Autor: {question.authorId}</small>
          <AnswerList questionId={question.id} />
          <AnswerQuestion parentId={question.id} userId={currentUser?.userId} />
        </div>
      ))}
    </div>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      authorId: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentUser: PropTypes.shape({
    userId: PropTypes.string,
  }),
};

export default QuestionList;
