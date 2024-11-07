import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import axios from 'axios';

const Main = () => {
  const API_KEY = '44ed81f31ec340de8a53e4fef9864583';
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then((res) => {
        setNewsData(res.data.articles);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setNewsData(null);
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <SearchBar />
      <SearchResult data={newsData} isLoading={isLoading} error={error} />
    </main>
  );
};

export default Main;
