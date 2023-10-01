import React, { useState } from 'react';
import { SubscribeContainer, Title, EmailInput, PrivacyText, CheckboxLabel, Checkbox } from './Newsteller.styles';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
  
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setEmail(e.target.value);
    };
  
    const handleAgreedChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
      setAgreed(e.target.checked);
    };
  
    return (
      <SubscribeContainer>
        <Title>Subscreva a nossa newsletter</Title>
        <EmailInput
          type="email"
          placeholder="Digite o seu e-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <PrivacyText>
          Consulte aqui a nossa <u>Política de Privacidade</u>
        </PrivacyText>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={agreed}
            onChange={handleAgreedChange}
          />
          Li e Concordo com os Termos e Condições
        </CheckboxLabel>
      </SubscribeContainer>
    );
  };
  
  export default NewsletterSignup;