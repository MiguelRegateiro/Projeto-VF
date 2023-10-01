import styled from 'styled-components';


export const CardContainer = styled.div<{ backgroundColor: string }>`
  width: 196px;
  height: 259px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const DocumentsContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-top: 20px;
  margin-left: 140px;
  margin-right: 140px;
`;

export const CardImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  text-color: white;
  margin-right:50px;
`;

export const ButtonContainer = styled.div`
  display:flex;
`