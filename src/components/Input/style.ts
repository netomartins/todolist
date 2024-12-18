import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 20px;
  max-width: 750px;
  padding: 0px 16px 20px 16px;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 5px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 0.7;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
