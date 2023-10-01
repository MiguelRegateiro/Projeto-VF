import React from 'react'
import {StyledContainer, ParagraphTitle, ParagraphText} from './PrimaryItems.styles'


interface PrimaryItemsProps {
    title: string;
    paragraphs: string[];
  }

const PrimaryItems: React.FC<PrimaryItemsProps> = ({ title, paragraphs }) => {
    return (
      <StyledContainer>
      <ParagraphTitle>{title}</ParagraphTitle>
      {paragraphs.map((paragraph, index) => (
        <ParagraphText key={index}>{paragraph}</ParagraphText>
      ))}
    </StyledContainer>
  );
};
  
  export default PrimaryItems;