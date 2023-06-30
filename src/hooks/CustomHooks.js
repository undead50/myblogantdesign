import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApi = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export const usePostData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [respData, setRespData] = useState(null);

  const postData = async (postData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(url, postData);
      setRespData(response.data);
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, respData, error, postData };
};
