import styled from 'styled-components';

interface ContainerProps {
  isCartActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => (props.isCartActive ? 'calc(100% - 360px)' : '100%')};

  height: 100vh;

  position: relative;
  transition: width 0.2s ease-in-out;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  padding: 22px;
`;

export const DescriptionContainer = styled.div`
  margin-right: 22px;
  width: 100%;
  max-width: 500px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  padding-right: 22px;

  button {
    border: 0;
    background: transparent;
  }

  button:first-of-type {
    margin-top: 22px;
  }

  button:last-of-type {
    flex: 1;
    margin-bottom: 27px;
  }

  img {
    height: 100%;
    max-height: 800px;
  }
`;

export const DescriptionTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #981c79;
  padding: 22px 0;
`;

export const DescriptionSubTitle = styled.p`
  line-height: 1.5;
`;

export const QuestionText = styled.p`
  padding: 22px 0;
  font-weight: 500;
`;

export const ListDescriptions = styled.ul`
  margin-bottom: 32px;
  padding-left: 32px;
`;

export const ListDescriptionItem = styled.li`
  font-size: 12px;
  padding: 22px 0;
  font-weight: 400;
`;

export const BottomText = styled.p`
  margin: 12px 0;
`;

export const ActionText = styled.p`
  margin: 12px 0;

  button {
    color: #16a085;
    border: 0;
    background: 0;
    margin-left: 4px;
    text-decoration: underline;
  }
`;

export const IconsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
