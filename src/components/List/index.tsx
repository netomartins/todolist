import React from 'react';
import { Todo } from '../../types/todo';
import { ListContainer } from './style';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoListProps {
  itens: Todo[];
  apagaItem: (id: number) => void;
}

const List: React.FC<TodoListProps> = ({ itens, apagaItem }) => {
  return (
    <ListContainer>
      {itens.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => apagaItem(todo.id)}
          >
            <DeleteIcon color={'disabled'} />
          </IconButton>
        </li>
      ))}
    </ListContainer>
  );
};

export default List;
