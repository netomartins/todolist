import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  margin-left: 10px;
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
