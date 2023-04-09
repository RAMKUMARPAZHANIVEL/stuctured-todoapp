import logo from './logo.svg';
import './App.css';
import TodoCard from './components/todo';
import TodoApp from './components/todoApp';
import { Provider } from 'react';
import { mainContext } from './contexs';

function App() {
  const data = {}
  return (
    <div>
      <mainContext.Provider value={data}>
         <TodoApp />
      </mainContext.Provider>
    </div>
  );
}

export default App;
