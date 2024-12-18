import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  overflow: hidden; /* Evita vazamento de conteúdo */
`;

export const ScrollableContainer = styled.div`
  flex: 1; /* Ocupa todo o espaço disponível */
  overflow-y: auto; /* Permite rolagem vertical */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  padding: 10px;

  /* Oculta a barra de rolagem no navegador */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
`;
