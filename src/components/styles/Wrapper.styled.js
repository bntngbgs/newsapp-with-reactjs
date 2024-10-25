import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export { Wrapper, FlexWrapper };
