import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  width: 90%;
  margin-inline: auto;
  margin-top: ${(props) => props.mt};
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export { Wrapper, FlexWrapper };
