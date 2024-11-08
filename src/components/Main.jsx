import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import axios from 'axios';

const Main = () => {
  const API_KEY = '44ed81f31ec340de8a53e4fef9864583';
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [title, setTitle] = useState('Headline News');

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then((res) => {
        setNewsData(res.data.articles);
        setError(null);
        setIsLoading(false);
        setSearchError(null);
        setTitle('Headline News');
      })
      .catch((err) => {
        setError(`Sorry couldn't fetch data : ${err.message}`);
        setNewsData(null);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (searchValue) => {
    setIsLoading(true);
    setNewsData(null);
    setSearchResult(null);
    setSearchError(null);

    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((res) => {
        if (res.data.articles.length < 1) {
          setSearchError(`Sorry couldn't find any news`);
        } else {
          setSearchResult(res.data.articles);
          setTitle('Search Result');
          setSearchError(null);
        }
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setSearchError(`Sorry couldn't fetch data : ${err.message}`);
        setSearchResult(null);
        setIsLoading(false);
      });
  };

  return (
    <main>
      <SearchBar handleSubmit={handleSubmit} />
      <SearchResult
        data={searchResult ? searchResult : newsData}
        isLoading={isLoading}
        error={searchError ? searchError : error}
        title={title}
      />
    </main>
  );
};

export default Main;
