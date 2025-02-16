import logo from './logo.svg';
import './App.css';
import { store } from './app/store';
import { Provider } from 'react-redux'
import Form from "./app/reactHookForm"

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
