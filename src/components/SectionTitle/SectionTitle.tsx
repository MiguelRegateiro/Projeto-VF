import React from 'react';
import { SectionTitleProps } from './SectionTitle.types';
import { SectionTitleContainer, Title } from './SectionTitle.styles';


const SectionTitle: React.FC<SectionTitleProps> = ({ title, button }) => {
  return (
    <SectionTitleContainer>
      <Title>{title}</Title>
      {button && button}
    </SectionTitleContainer>
  );
};

export default SectionTitle;
