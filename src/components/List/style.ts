import styled from 'styled-components';

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
  max-width: 600px;
  text-align: center;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    overflow: hidden; /* Evita conteúdo fora do elemento */
  }

  @media (max-width: 768px) {
    width: 90%; /* Para telas menores */
  }
`;

// export const StyledButton = styled.button`
//   background-color: #f44336;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   padding: 5px 10px;

//   &:hover {
//     background-color: #d32f2f;
//   }
// `;
