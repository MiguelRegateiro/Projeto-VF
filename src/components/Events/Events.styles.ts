import styled from "styled-components";

export const EventsContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 342px;
  height: 156px;
  margin: 10px;
  padding: 10px;
  &:nth-child(odd) {
    margin-right: 10px;
  }

  &:nth-child(even) {
    margin-left: 10px; 
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

export const DateContainer = styled.div`
  background-color: #69A391;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;

export const Category = styled.div`
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Location = styled.div`
  margin-bottom: 5px;
`;

export const Time = styled.div`
  margin-bottom: 5px;
`;

export const DateText = styled.div`
  font-size: 16px;
  text-align: center;
`;
export const CardsWrapper = styled.div`
  margin-left: 140px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row; 
  justify-content: space-between;
`;

export const ScrollListWrapper = styled.div`
  margin-right: 140px;
  width: calc(100% - 814px);
`;