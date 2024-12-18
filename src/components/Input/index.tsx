import React, { useState } from 'react';
import { InputContainer, StyledInput, StyledButton } from './style';

interface TodoInputProps {
  adicionaItem: (title: string) => void;
}

const Input: React.FC<TodoInputProps> = ({ adicionaItem }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      adicionaItem(title);
      setTitle('');
    }
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <StyledButton onClick={handleAdd}>Adicionar</StyledButton>
    </InputContainer>
  );
};

export default Input;
