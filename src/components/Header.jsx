import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from './styles/Wrapper.styled';

const StyledHeader = styled.header`
  background-color: #96ceb4;
  padding-block: 0.35rem;
`;

const Logo = styled.a`
  font-family: 'Fugaz One', serif;
  text-decoration: none;
  font-size: 2.5rem;
  color: white;
`;

const Quotes = styled.p`
  font-size: 1.25rem;
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper justify="space-between" align="center">
        <Logo href="index.html">News App</Logo>
        <Quotes>
          <span>"</span> We cannot make good news out of bad practice
          <span>"</span>
        </Quotes>
      </FlexWrapper>
    </StyledHeader>
  );
};

export default Header;
