import React from 'react'
import {ScrollListContainer, ScrollListContent,  ListTitle, ScrollListItem, ListItemTitle, ListItemDay, ListItemTime} from './ScrollList.styles'

export interface ListItem {
  title: string;
  dayOfWeek: string;
  time: string;
}

interface ScrollListProps {
  title: string;
  items: ListItem[]; // Use the ListItem type here
}

const ScrollList: React.FC<ScrollListProps> = ({ title, items }) => {
  return (
      <><ListTitle>{title}</ListTitle><ScrollListContainer>
      {items.map((item, index) => (
        <ScrollListItem key={index}>
          <ListItemTitle>{item.title}</ListItemTitle>
          <ListItemDay>{item.dayOfWeek}</ListItemDay>
          <ListItemTime>{item.time}</ListItemTime>
        </ScrollListItem>
      ))}
    </ScrollListContainer></>
    );
  };

  export default ScrollList;