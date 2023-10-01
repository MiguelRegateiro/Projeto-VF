import React from 'react';
import {
  ContactContainer,
  ContactTitle,
  ContactText,
  ContactInfoItem,
} from './Contact.styles';

interface ContactProps {
  title: string;
  text: string;
  contactInfo: string[];
}

const Contact: React.FC<ContactProps> = ({ title, text, contactInfo }) => {
  return (
    <ContactContainer>
      <ContactTitle>{title}</ContactTitle>
      <ContactText>{text}</ContactText>
      <ul>
        {contactInfo.map((info, index) => (
          <ContactInfoItem key={index}>{info}</ContactInfoItem>
        ))}
      </ul>
    </ContactContainer>
  );
};

export default Contact;
