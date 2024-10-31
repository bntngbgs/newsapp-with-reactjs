import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search-icon.svg';
import { Wrapper } from './styles/Wrapper.styled';
import axios from 'axios';

const Form = styled.form`
  width: 70%;
  display: flex;
  margin: 0 auto;

  input {
    width: 100%;
    border: 2px solid #ffad60;
    border-radius: 10px 0 0 10px;
    padding-left: 1rem;
  }
`;

const Button = styled.button`
  background-color: #ffad60;
  width: 64px;
  border: 1px solid #ffad60;
  padding: 0.5rem 1rem;
  border-radius: 0 10px 10px 0;

  &:hover {
    background-color: #ffbd80;
    border-color: #ffbd80;
    cursor: pointer;
  }
`;

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Wrapper mt="5rem">
      <Form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search topics..."
        />
        <Button type="submit">
          <img src={searchIcon} alt="search-icon" />
        </Button>
      </Form>
    </Wrapper>
  );
};

export default SearchBar;
