import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaSearch } from 'react-icons/fa';
import { TopBarContainer, SocialIcons } from './SubHeader.styles';

const SubHeader: React.FC = () => {
  return (
    <TopBarContainer>
    <SocialIcons>
      <FaFacebook size={24} style={{ marginRight: '10px' }} />
      <FaInstagram size={24} />
    </SocialIcons>
    <FaSearch size={24}/>
  </TopBarContainer>
);
};

export default SubHeader;
