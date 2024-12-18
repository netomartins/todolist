import styled from 'styled-components';

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  span {
    flex: 1;
    text-align: left;
  }
`;
