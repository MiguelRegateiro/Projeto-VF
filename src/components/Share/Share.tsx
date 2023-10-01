import React from "react";
import { Icon, ShareContainer, Title, IconsWrapper } from "./Share.styles";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEllipsisH,
} from "react-icons/fa";

const ShareIcons = () => {
  return (
    <ShareContainer>
      <Title>Partilhar</Title>
      <IconsWrapper>
        <Icon>
          <FaFacebook />
        </Icon>
        <Icon>
          <FaInstagram />
        </Icon>
        <Icon>
          <FaLinkedin />
        </Icon>
        <Icon>
          <FaEllipsisH />
        </Icon>
      </IconsWrapper>
    </ShareContainer>
  );
};

export default ShareIcons;
