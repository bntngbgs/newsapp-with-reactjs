import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid #ffad60;
  border-radius: 8px;
  overflow: hidden;
  flex: 1 1 360px;
`;

const CardImageWrapper = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const CardDetails = styled.div`
  padding: 1rem;

  & .author {
    margin-bottom: 0.5rem;
    color: lightslategrey;
  }

  & .details-btn {
    display: inline-block;
    text-decoration: none;
    margin-top: 1rem;
    background-color: #ffad60;
    border: 1px solid #ffad60;
    padding: 0.15rem 0.75rem;
    border-radius: 4px;
    color: white;
    transition: background-color 0.2s ease;
  }
`;

const ResultCard = ({ imgSrc, title, author, date, desc, link }) => {
  return (
    <CardWrapper>
      <CardImageWrapper src={imgSrc} />
      <CardDetails>
        <h2>{title}</h2>
        <div className="author">
          <p>
            <span>{author}</span> - <span>{date}</span>
          </p>
        </div>
        <p>{desc}</p>
        <a href={link} target="_blank" rel="noreferrer" className="details-btn">
          Read more...
        </a>
      </CardDetails>
    </CardWrapper>
  );
};

export default ResultCard;
