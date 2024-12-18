import React from 'react';
import { Todo } from '../../types/todo';
import { ListContainer } from './style';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from 'styled-components';

interface TodoListProps {
  itens: Todo[];
  apagaItem: (id: number) => void;
}

const List: React.FC<TodoListProps> = ({ itens, apagaItem }) => {
  const theme = useTheme(); // Acessa o tema atual (light ou dark)

  return (
    <ListContainer>
      {itens.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <IconButton aria-label="delete" onClick={() => apagaItem(todo.id)}>
            <DeleteIcon
              sx={{
                color: theme.text, // Usa a cor do texto baseada no tema
                opacity: theme.body === '#121212' ? 0.7 : 1, // Torna cinza no dark mode
              }}
            />
          </IconButton>
        </li>
      ))}
    </ListContainer>
  );
};

export default List;
