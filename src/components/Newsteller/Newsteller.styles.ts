import styled from 'styled-components';

export const SubscribeContainer = styled.div`
  max-width: 400px; /* Largura máxima do componente */
  margin: 0 auto; /* Centralizar o componente na tela */
  padding: 20px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  text-transform: uppercase;
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const PrivacyText = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  color: white;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: white;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;