import React from 'react';
import { Wrapper, FlexWrapper } from './styles/Wrapper.styled';
import styled from 'styled-components';
import ResultCard from './ResultCard';
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

const SearchResult = ({ data, isLoading, error, title }) => {
  return (
    <Wrapper mt="5rem">
      <TitleBar>{title}</TitleBar>
      <FlexWrapper colgap="1rem" rowgap="2rem" width="100%" mt="2rem" mb="4rem">
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

        {error && <ErrorMessage>{<p>{error}</p>}</ErrorMessage>}
        {data &&
          data
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
