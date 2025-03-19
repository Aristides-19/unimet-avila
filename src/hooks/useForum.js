import { useEffect, useState } from 'react';
import {
  createAnswer,
  createQuestion,
  getAllQuestions,
  getAnswerCount,
  getAnswersByQuestionId,
  getForumEntryById,
} from '../services/forum';

/**
 * Hook to fetch a forum entry by its ID
 * @param {string} entryId - ID of the forum entry
 * @returns {Object} - Contains the forum entry, loading state, and error
 */
export const useGetForumEntryById = (entryId) => {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const data = await getForumEntryById(entryId);
        setEntry(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, []);

  return { entry, loading, error };
};

/**
 * Hook to create a new question
 * @returns {Function} - Function to create a question, and loading/error states
 */
export const useCreateQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async (authorId, title, content) => {
    if (loading) return;
    setLoading(true);
    try {
      return await createQuestion(authorId, title, content);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { create, loading, error };
};

/**
 * Hook to create an answer to a question
 * @returns {Function} - Function to create an answer, and loading/error states
 */
export const useCreateAnswer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async (authorId, content, parentId) => {
    if (loading) return;
    setLoading(true);
    try {
      return await createAnswer(authorId, content, parentId);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { create, loading, error };
};

/**
 * Hook to fetch all questions from the forum
 * @returns {Object} - Contains the list of questions, loading state, and error
 */
export const useGetAllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getAllQuestions();
        setQuestions(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return { questions, loading, error };
};

/**
 * Hook to fetch all answers for a specific question
 * @param {string} parentId - ID of the question
 * @param refresh - Boolean to trigger a refresh
 * @returns {Object} - Contains the list of answers, loading state, and error
 */
export const useGetAnswersByQuestionId = (parentId, refresh) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const data = await getAnswersByQuestionId(parentId);
        setAnswers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (parentId) {
      fetchAnswers();
    }
  }, [refresh]);

  return { answers, loading, error };
};

/**
 * Hook to get the count of answers for a specific question
 * @param {string} parentId - ID of the question
 * @returns {Object} - Contains the answer count, loading state, and error
 */
export const useGetAnswerCount = (parentId) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnswerCount = async () => {
      if (!parentId) return;

      setLoading(true);
      try {
        const answerCount = await getAnswerCount(parentId);
        setCount(answerCount);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswerCount();
  }, [parentId]);

  return { count, loading, error };
};
