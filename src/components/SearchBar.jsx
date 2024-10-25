import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search-icon.svg';
import { Wrapper } from './styles/Wrapper.styled';

const Form = styled.form`
  width: 70%;
  display: flex;
  background-color: blue;
  margin: 0 auto;

  input {
    width: 100%;
    /* margin: 0 auto; */
  }
`;

const Button = styled.button`
  background-color: #ffad60;
  width: 64px;
`;

const SearchBar = () => {
  return (
    <Wrapper>
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
