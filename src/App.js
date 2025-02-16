import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { store } from './app/store';
import { Provider } from 'react-redux'
import { Counter2 } from './features/counter2/Counter';
import Form from "./app/form"

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
    
  );
}

export default App;
