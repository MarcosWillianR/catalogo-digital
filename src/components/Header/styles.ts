import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #981c79;

  display: flex;
  justify-content: space-between;
`;

export const IconButton = styled.button`
  border: 0;
  background: transparent;
  transition: all 0.3s ease;
  padding: 12px;

  svg {
    color: #fff;
  }

  &:hover {
    background: #fff;

    svg {
      color: #981c79;
    }
  }
`;

export const CenterHeaderWrapper = styled.div`
  display: flex;
`;

export const PageSelectionInput = styled.div`
  flex: 1;
  width: 100%;
  max-width: 150px;
  margin: 0 2px;

  input {
    border: 0;
    width: 100%;
    padding: 17px;
    text-align: center;
    transition: all 0.3s ease;
    font-size: 12px;

    background: #981c79;

    &::placeholder {
      color: #fff;
    }

    &:focus {
      background: #fff;
      color: #981c79;
    }
  }
`;
