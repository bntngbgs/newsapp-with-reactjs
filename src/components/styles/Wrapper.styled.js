import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  width: 90%;
  margin-inline: auto;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  row-gap: ${(props) => props.rowgap};
  column-gap: ${(props) => props.colgap};
  width: ${(props) => props.width};
`;

export { Wrapper, FlexWrapper };
