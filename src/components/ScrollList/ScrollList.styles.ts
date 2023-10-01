import styled from 'styled-components';

export const ScrollListContainer = styled.div`
  max-height: 200px; 
  overflow: auto; 
  width: 342px;
  height: 342px;

  /* Oculta a barra de rolagem vertical (Chrome) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollListContent = styled.div`
padding: 10px;
background-color: #f2f2f2;
overflow-y: auto;
max-height: 100%;
`;

export const ScrollListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const ListTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ListItemTitle = styled.div`
  font-weight: bold;
`;

export const ListItemDay = styled.div`
  font-style: italic;
`;

export const ListItemTime = styled.div`
  color: #888;
`;