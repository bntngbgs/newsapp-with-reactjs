import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './styles/Wrapper.styled';

const FooterWrapper = styled.div`
  background-color: #96ceb4;
  padding-block: 0.35rem;
  margin-top: auto;
`;

const FooterText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 700;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <FooterText>Copyright &copy; 2024 News App Developer</FooterText>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
