import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 10px 0;
  background-color: ${(props) => props.theme.body}; /* Fundo dinâmico */
  color: ${(props) => props.theme.text}; /* Texto dinâmico */
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.text};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
`;
