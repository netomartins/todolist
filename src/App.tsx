import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { db } from './services/database';
import { Todo } from './types/todo';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';
import Header from './components/Header';
import { MainContent, ScrollableContainer } from './style';

const App: React.FC = () => {
  const [tarefas, setTarefas] = useState<Todo[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const carregaItens = async () => {
      const dados = await db.todos.toArray();
      setTarefas(dados);
    };
    carregaItens();
  }, []);

  const addItem = async (title: string) => {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    await db.todos.add(newTodo);
    setTarefas([...tarefas, newTodo]);
  };

  const apagaItem = async (id: number) => {
    await db.todos.delete(id);
    setTarefas(tarefas.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <MainContent>
          <Input adicionaItem={addItem} />
          <ScrollableContainer>
            <List itens={tarefas} apagaItem={apagaItem} />
          </ScrollableContainer>
        </MainContent>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
