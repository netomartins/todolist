import React, { useState, useEffect } from 'react';
import { db } from './services/database';
import { Todo } from './types/todo';
import Input from './components/Input';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import { MainContent } from './style';

const App: React.FC = () => {
  const [tarefas, setTarefas] = useState<Todo[]>([]);

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
    <div className="App">
      <MainContent>
        <Header />
        <main>
          <Input adicionaItem={addItem} />
          <List itens={tarefas} apagaItem={apagaItem} />
        </main>
        <Footer />
      </MainContent>
    </div>
  );
};

export default App;
