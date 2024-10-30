import React, { useState, useEffect } from 'react';
import { Wrapper, FlexWrapper } from './styles/Wrapper.styled';
import styled from 'styled-components';
import ResultCard from './ResultCard';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

const TitleBar = styled.h1`
  font-family: 'Fugaz One', serif;
  font-size: 2.25rem;
  color: #96ceb4;
  border-bottom: 2px solid #96ceb4;
  text-align: center;
`;

const LoaderWrapper = styled.div`
  margin-inline: auto;
  margin-top: 10rem;
`;

const ErrorMessage = styled.div`
  background-color: #f3d8da;
  color: #cb444a;
  text-align: center;
  margin-top: 2rem;
  padding-block: 0.5rem;
  padding-inline: 1.5rem;
  width: max-content;
  margin-inline: auto;
  border-radius: 8px;

  & p {
    font-size: 1.5rem;
    margin-block: 0.5rem;
  }
`;

const SearchResult = () => {
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
    <Wrapper mt="5rem">
      <TitleBar>Headline News</TitleBar>
      <FlexWrapper colgap="1rem" rowgap="2rem" width="100%" mt="2rem" mb="2rem">
        {isLoading && (
          <LoaderWrapper>
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              strokeColor="#ffad60"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          </LoaderWrapper>
        )}

        {error && (
          <ErrorMessage>
            <p>{`Sorry couldn't fetch data : ${error.message}`}</p>
          </ErrorMessage>
        )}
        {newsData &&
          newsData
            .slice(0, 9)
            .map((item, index) => (
              <ResultCard
                key={index}
                imgSrc={item.urlToImage}
                title={item.title}
                author={item.author}
                date={item.publishedAt}
                desc={item.description}
                link={item.url}
              />
            ))}
      </FlexWrapper>
    </Wrapper>
  );
};

export default SearchResult;
