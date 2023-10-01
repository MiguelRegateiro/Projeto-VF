import React, { ReactNode } from 'react';
import { CardContainer, CardDetailsWrapper, Title, DateStyled, CardImage, Categories } from './Card.styles';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Test from '../../images/Test';
import { CardProps } from './Card.types';


const Card: React.FC<CardProps> = ({ title, categories, date, imageSrc, children, categoriesColor = [] }) => {
  return (
<CardContainer>      
      <Categories>
        {categories.map((category, index) => (
          <span key={index} style={{ backgroundColor: categoriesColor[index] || '#21878F' }}>
            {category}
          </span>
        ))}
      </Categories>
      <CardImage src={imageSrc} alt={title} />
      <CardDetailsWrapper>
      <DateStyled>{date}</DateStyled>
      <Title>{title}</Title>
      <PrimaryButton icon={<Test width={'20'} height={'20'} />} children={"Ver mais"} />
      </CardDetailsWrapper>
    </CardContainer>
  );
};

export default Card;
