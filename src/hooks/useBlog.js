import { useState } from 'react';
import {
  createArticle as createArticleService,
  getArticleById as getArticleByIdService,
  getPaginatedArticles as getPaginatedArticlesService,
} from '../services/blog';

// Hook for creating an article
export const useCreateArticle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Creates a new article.
   * @param {Object} articleData - Data of the article to be created.
   * @returns {Promise<string>} - ID of the created article.
   */
  const createArticle = async (articleData) => {
    setLoading(true);
    setError(null);
    try {
      return await createArticleService(articleData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    createArticle,
    loading,
    error,
  };
};

// Hook for fetching an article by its ID
export const useGetArticleById = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);

  /**
   * Fetches an article by its ID.
   * @param {string} postId - ID of the article to fetch.
   * @returns {Promise<void>}
   */
  const getArticleById = async (postId) => {
    setLoading(true);
    setError(null);
    try {
      setArticle(await getArticleByIdService(postId));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    getArticleById,
    article,
    loading,
    error,
  };
};

// Hook for fetching paginated articles
export const useGetPaginatedArticles = (pageSize) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  /**
   * Fetches a paginated list of articles.
   * @returns {Promise<void>}
   */
  const loadPaginatedArticles = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    setError(null);
    try {
      const newArticles = await getPaginatedArticlesService(
        pageSize,
        articles.length > 0 ? articles[articles.length - 1].id : null
      );
      setArticles((prev) => [...prev, ...newArticles]);

      if (newArticles.length < pageSize) {
        setHasMore(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  loadPaginatedArticles();

  return { loadPaginatedArticles, articles, hasMore, loading, error };
};
