import styled from 'styled-components';

export const Container = styled.div`
  //background: #f3f3f3;
  background: #f3f3f3;
  border-radius: 6px;
  border: 0;
  padding: 16px;
  width: 100%;
  color: #b4b4b4;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #b4b4b4;
    }
  }

  svg {
    margin-right: 8px;
  }
`;
