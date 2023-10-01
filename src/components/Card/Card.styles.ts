import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  width: 100%;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 26px;
  color: #3E3E40;
`;

export const DateStyled = styled.p`
  font-size: 13px;
  color: #21878F;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  position: absolute;
  margin-left: 21px;
  
  span {
    font-size: 14px;
    background-color: #f2f2f2;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 8px;
    margin-bottom: 4px;
  }
`;

export const CardDetailsWrapper = styled.div`
  margin: 24px 40px 24px 32px;
`;
