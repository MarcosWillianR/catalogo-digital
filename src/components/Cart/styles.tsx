import styled, { css } from 'styled-components';

interface ContainerProps {
  isCartActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  display: ${props => (props.isCartActive ? 'block' : 'none')};
  right: ${props => (props.isCartActive ? '0px' : '-360px')};
  width: 100%;
  height: 100vh;
  max-width: 360px;

  transition: right 0.3s ease-in-out;

  header {
    display: flex;
    background: #f2f2f2;
    justify-content: center;
    align-items: center;
    position: relative;

    padding: 14.5px 12px;

    button {
      border: 0;
      text-align: right;
      position: absolute;
      right: 10px;
      padding: 6px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const MainContainer = styled.div`
  background: #f2f2f2;
  display: flex;
  height: 100%;
  height: 690px;
  justify-content: center;
  align-items: center;
  padding: 6px;

  p {
    color: #c0c1c3;
    font-size: 16px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 22px;
  border-left: 1px solid #f2f2f2;

  p {
    margin-bottom: 12px;
  }

  button {
    width: 100%;
    border: 0;
    margin-bottom: 12px;
    color: #fff;
    background-color: #bc69af;

    &:first-of-type {
      padding: 22px;
    }

    &:last-of-type {
      padding: 12px 22px;
    }
  }
`;
